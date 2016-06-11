Session.setDefault('playList', "");

Router.configure({
  //postsList 루트가 언제 준비(ready)상태인지를 아는 것은 우리가 빈 템플릿을 보여줄 것이라면 대단한 일은 아니다. 다행히, Iron Router는 준비가 될 때까지 템플릿을 보여주는 것을 연기하고, 대신 loading 템플릿을 보여주는 빌트인 방식을 제공한다.
  layoutTemplate: 'layout', // layout 템플릿
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/',{name:'home'});
Router.route('/rotation',{name:'rotation'});
Router.route('/feed',{name:'feed'});
Router.route('/myinfo',{name:'myinfo'});
<<<<<<< HEAD
Router.route('/oneset',{name:'oneset'});
Router.route('/twoset',{name:'twoset'});
Router.route('/threeset',{name:'threeset'});

var num = 0;
var t1 = "하체운동";

// item 초기화
if(num >0)
  num = 0;

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
=======
Router.route('/posttest', {name:'posttest'});
onYouTubeIframeAPIReady = function () {

  // New Video Player, the first argument is the id of the div.
  // Make sure it's a global variable.

    player = new YT.Player("player", {

      height: "400",
      width: "600",

      // videoId is the "v" in URL (ex: http://www.youtube.com/watch?v=LdH1hSWGFGU, videoId = "LdH1hSWGFGU")
      videoId: "LdH1hSWGFGU",

      // Events like ready, state change, 
      events: {

        onReady: function (event) {

          // Play video when player ready.
          event.target.playVideo();
        }

      }

    });

  }
  ;
>>>>>>> origin/master

  YT.load();

// 사용자 화면 초기화 및 사용자 정보 보호?
//if(Meteor.isClient){
//  //Session.setDefault('counter', 0);
//  Accounts.ui.config(passwordSignupFields("USERNAME_ONLY"));
//}
