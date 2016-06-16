Router.configure({
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
