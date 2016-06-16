<<<<<<< HEAD
Router.configure({
  //postsList 루트가 언제 준비(ready)상태인지를 아는 것은 우리가 빈 템플릿을 보여줄 것이라면 대단한 일은 아니다. 다행히, Iron Router는 준비가 될 때까지 템플릿을 보여주는 것을 연기하고, 대신 loading 템플릿을 보여주는 빌트인 방식을 제공한다.
  layoutTemplate: 'layout', // layout 템플릿
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

//Router.route('/home', {name:'home'});
//Router.route('/contact', {name:'contact'}); // name안에 템플릿 속성들 들고 온다.
//Router.route('/press' , {
//  name: 'press',
//      waitOn: function (){
//    console.log("contact waitOn");
//  }
//});
// 방법 2) name 가져오기
//Router.route('/about', function(){this.render('about')}); // 방법 1) 템플릿 가져오기

Router.route('/home',{name:'home'});
Router.route('/rotation',{name:'rotation'});
Router.route('/feed',{name:'feed'});
Router.route('/myinfo',{name:'myinfo'});
Router.route('/posttest', {name:'posttest'});


// Make sure it's in client
if (Meteor.isClient) {
  Session.setDefault('counter',0);
  var player;
  var y1, y2;
  var playlist;
  var print;
  // The below function "onYouTubePlayerAPIReady" or "onYouTubeIframeAPIReady" creates an <iframe> (and YouTube player) on the element with id="player" after the API code downloads.
  // The API will call this function when the page has finished downloading the JavaScript for the player API, which enables you to then use the API on your page. Thus, this function might create the player objects that you want to display when the page loads.
  onYouTubeIframeAPIReady = function(){
    player=new YT.Player('id-player', {
      videoId:'u1zgFlCw8Aw'
      , events:{
        'onStateChange':function(event) {
          var i=event.data;
          switch (i) {
            case YT.PlayerState.UNSTARTED: // -1
              console.log(i+' : unstarted');
              break;
            case YT.PlayerState.ENDED: // 0
              console.log(i+' : ended');
              break;
            case YT.PlayerState.PLAYING: // 1
              console.log(i+' : playing');
              break;
            case YT.PlayerState.PAUSED: // 2
              console.log(i+' : paused');
              break;
            case YT.PlayerState.BUFFERING: // 3
              console.log(i+' : buffering');
              break;
            case YT.PlayerState.CUED: // 5, 이건 언제 호출되는겨?
              console.log(i+' : video cued');
              break;
          }
        }
      }
    });
    print=setInterval(function() {
      if (player.playVideo) {
        clearInterval(print);
        var str="// All properties of player : at "+new Date().toLocaleTimeString();
        for (var p in player) {
          str+="\n"+p+" : "+player[p];
        }
        var $result=$("#player-properties");
        $result.html( kipid.escapeHTML(str) );
        $result.removeClass("prettyprinted");
        prettyPrint(function(){}, $result.parent()[0]);
      }
    }, 2000); // Without setTimeout or setInterval, play/pause 같은 동영상을 컨트롤하는 function 들이 안찍힘. 아마도 동영상을 load 하고나서 function 들을 추가시켜서 그런듯?

    // 이어서 재생하기.
    y1=new YT.Player($('#youtube-1')[0] // id 대신 DOM element 를 넣어도 됨.
        , {
          videoId:'bHQqvYy5KYo'
          , playerVars:{theme:"light", color:"white", start:10, end:600}
          , events:{'onStateChange':function(e) {
            if (e.data===YT.PlayerState.ENDED) {
              $(window).scrollTop($("#youtube-2").offset().top);
              y2.playVideo();
            }
          }
          }
        });
    y2=new YT.Player('youtube-2', {
      videoId:'u1zgFlCw8Aw'
      , events:{}
    });

    // Loop
    new YT.Player('youtube-loop', {
      videoId:'Skhwqq-iGQM'
      , playerVars:{loop:1} // 동작 안함.
      , events:{'onStateChange':function(e) {
        if (e.data===YT.PlayerState.ENDED) {
          e.target.playVideo();
        }
      }
      }
    });

    playlist=new YT.Player('youtube-playlist', {
      events:{'onReady':function(e) {
        var p=e.target;
        p.cuePlaylist([
          "Skhwqq-iGQM" // Zion.T (자이언티), Crush (크러쉬) - Just (그냥)
          , "R0W-voiYpQk" // K.will (케이윌), Mamamoo (마마무), Feat. Whee sung (휘성) - Peppermint Chocolate (썸남썸녀)
          , "ftCCmMeqXds" // 에디킴 (Eddy Kim) - 밀당의 고수 (Push & Pull)
          , "t0x98vf62_k" // 에디킴 (Eddy Kim) - My Love
          , "t0x98vf62_0" // error : This video is unavailable. => Not included in the playlist at the first place.
          , "J-nsu2K8Z8s" // KARA - So Good : The uploader has not made this video available in your country. => 105 error.
          , "OPf0YbXqDm0" // Mark Ronson - Uptown Funk
          , "pB-5XG-DbAA" // Sam Smith - Stay With Me
          , "gEqlF5N8UMs" // Winner - 공허해
        ]);
        p.setLoop(true);
        // p.setShuffle(true);
      }, 'onError':function(e) {
        console.log(e.data);
        e.target.nextVideo();
      }, 'onStateChange':function(e) {
        var i=e.data;
        console.log(i);
        switch (i) {
          case YT.PlayerState.UNSTARTED: // -1
            console.log(i+' : playlist unstarted');
            break;
          case YT.PlayerState.ENDED: // 0
            console.log(i+' : playlist ended');
            console.log('Current Playlist Index : '+e.target.getPlaylistIndex());
            // For 1-loop
            // e.target.playVideoAt(e.target.getPlaylistIndex()-1);
            // or
            // e.target.previousVideo(); // 이러면 다음 비디오로 간 다음에 가는데도 그 전전 영상으로 가버리네? 결과적으로 역재생인듯한.
            break;
          case YT.PlayerState.PLAYING: // 1
            console.log(i+' : playlist playing');
            break;
          case YT.PlayerState.PAUSED: // 2
            console.log(i+' : playlist paused');
            break;
          case YT.PlayerState.BUFFERING: // 3
            console.log(i+' : playlist buffering');
            break;
          case YT.PlayerState.CUED: // 5
            console.log(i+' : playlist video cued');
            break;
        }
      }}
    });
  }

  // Loading a youtube video by a function.
  $("#load-youtube").on("click", function() {
    new YT.Player('load-youtube-target', {
      videoId:'bHQqvYy5KYo'
    });
  });
}



// 사용자 화면 초기화 및 사용자 정보 보호?
//if(Meteor.isClient){
//  //Session.setDefault('counter', 0);
//  Accounts.ui.config(passwordSignupFields("USERNAME_ONLY"));
//}
=======

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


>>>>>>> 682758802a0c46748dc2750f0dc72f43e3151040
