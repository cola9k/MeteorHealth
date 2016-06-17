
Session.setDefault('playList', "");

var num = 0;

//하체운동, 타바타, 헬스
var t1 = "타바타";

// item 초기화
if(num > 4)
  num = 0;

//////////////////////////////////////////////////////////////////////
// 각 템플릿 마다 헬퍼를 통해서 playList를 들고옴
// myinfo 화면에 자신의 정보를 출력
Template.myinfo.helpers({
  info: function(){
    Session.set('uname',Meteor.user().username); // mogoDB에잇는 username을 들고옴
    return Meteor.user().username;
  }
});

// Rotaion 템플릿 부터 각 템플릿에서 API호출
Template.rotation.helpers({
  playList: function () {
    console.log("0.helper=");
    console.log(Session.get('playList'));
    return Session.get('playList');
  }
});

Template.oneset.helpers({
  playList: function () {
    console.log("1.helper=");
    console.log(Session.get('playList'));
    return Session.get('playList');
  }
});

Template.twoset.helpers({
  playList: function () {
    console.log("2.helper=");
    console.log(Session.get('playList'));
    return Session.get('playList');
  }
});

Template.threeset.helpers({
  playList: function () {
    console.log("3.helper=");
    console.log(Session.get('playList'));
    return Session.get('playList');
  }
});

// 내용 정렬
Template.feed.helpers({
  HInfo : function(){
    return HealthInfo.find({}, {sort: {createdAt: -1}});
  }
});

///////////////////////////////////////////////////////

// helper에 먼저 call 하기위해 시작
// 'played'를 통해 url을 가져옴
Meteor.startup(function(){
  Meteor.call('played',t1, function(err,result){
    var play_url = result.channel.item[++num].player_url;
    console.log("1.SetEvent=");
    console.log(play_url);
    Session.set('playList', play_url);
  });
});

Template.myinfo.events({
  'click #logout-form' : function(event,template){
    Meteor.logout(function(){
      //event.preventDefault();
      alert('로그아웃!!!');
      Router.go('/');
      Modal.hide(template);
    });
  }
});

//  각 템플릿마다 이벤트발생 ( button 이벤트 발생시 )
Template.rotation.events({
  'click #player': function(){
    Meteor.call('played',t1, function(err, result){
      var play_url = result.channel.item[++num].player_url;
      console.log("0.SetEvent=");
      console.log(play_url);
      Session.set('playList', play_url);
      console.log(Session.get("playList"));
    });
  }
});

Template.oneset.events({
  'click #player': function(){
    Meteor.call('played',t1, function(err, result){
      var play_url = result.channel.item[++num].player_url;
      console.log(num+t1);
      console.log("1.SetEvent=");
      console.log(play_url);
      Session.set('playList', play_url);
    });
  }
});

Template.twoset.events({
  'click #player': function(){
    Meteor.call('played',t1, function(err, result){
      var play_url = result.channel.item[num++].player_url;
      console.log(num+t1);
      console.log("2.SetEvent=");
      console.log(play_url);
      Session.set('playList', play_url);
    });
  }
});

Template.threeset.events({
  'click #player': function(){
    Meteor.call('played',t1, function(err, result){
      var play_url = result.channel.item[num++].player_url;
      console.log(num+t1);
      console.log("3.SetEvent=");
      console.log(play_url);
      Session.set('playList', play_url);
    });
  },

  "click #Next": function (event) {
    var HealthList = t1;

    HealthInfo.insert({
      text:HealthList,
      username:Session.get('uname'), // myinfo 정보 출력을 위해 get사용
      createdAt: new Date()
    });

    Router.go('/feed');
  }
});
