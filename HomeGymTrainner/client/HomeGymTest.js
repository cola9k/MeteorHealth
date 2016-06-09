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

  YT.load();

// 사용자 화면 초기화 및 사용자 정보 보호?
//if(Meteor.isClient){
//  //Session.setDefault('counter', 0);
//  Accounts.ui.config(passwordSignupFields("USERNAME_ONLY"));
//}
