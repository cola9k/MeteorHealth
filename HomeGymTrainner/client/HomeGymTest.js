
Session.setDefault('playList', "");

//Tasks = new Mongo.Collection("tasks");


var num = 0;
var t1 = "하체운동";

// item 초기화
if(num >5)
  num = 0;

Template.myinfo.events({
  'click #logout-form' : function(event,template){
    Meteor.logout(function(){
      event.preventDefault();
      alert('로그아웃!!!');
      Router.go('/');
      Modal.hide(template);
    });
  }
});

// helper에 먼저 call 하기위해 시작
Meteor.startup(function(){
  Meteor.call('played',t1, function(err,result){
    var play_url = result.channel.item[num++].player_url;
    console.log("1.SetEvent=");
    console.log(play_url);
    Session.set('playList', play_url);
  });
});

//  각 템플릿마다 이벤트발생 ( button 이벤트 발생시

Template.rotation.events({
  'click #player': function(){
    Meteor.call('played',t1, function(err, result){
      var play_url = result.channel.item[num++].player_url;
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
      var play_url = result.channel.item[num++].player_url;
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
  }
});

// 각 템플릿 마다 헬퍼를 통해서 playList를 들고옴



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



///////////////////////////////////////////////////////


