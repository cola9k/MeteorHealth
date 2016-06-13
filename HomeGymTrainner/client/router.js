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
Router.route('/oneset',{name:'oneset'});
Router.route('/twoset',{name:'twoset'});
Router.route('/threeset',{name:'threeset'});
Router.route('/login',{name:'login'});
Router.route('/join',{name:'join'});
