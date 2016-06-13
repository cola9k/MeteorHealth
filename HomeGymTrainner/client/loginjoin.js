///////////////////////////////////////////////////
// 로그인 & 회원가입
Template.login.events({
    'click #front-login-submit':function(event,temp){
        var username = temp.find('input[id=front-login-username]').value;
        var password = temp.find('input[id=front-login-password]').value;

        Meteor.loginWithPassword(username, password, function(err){
            if (err){
                alert('로그인 실패!!!.');
            }
            else{
                alert('로그인 성공!!!');
                Router.go('/');
                console.log(Meteor.user());
            }
        });
    },



    'click #change-to-join' : function(){
        Router.go('/join');
    }
});

Template.join.events({
    'click #front-join-submit':function(event,temp){
        var username1 = temp.find('input[id=front-join-username]').value;
        var password2 = temp.find('input[id=front-join-password]').value;

        //var joinObject = {
        //  username : temp.find('input[id=front-join-username]').value,
        //  password : temp.find('input[id=front-join-password]').value
        //};

        Users.insert({
            userID:username1,
            pwd: password2,
            movie: false,
            createdAt: new Date()
        });

        //Accounts.createUser(joinObject, function(err){
        //  if (err){
        //    alert('가입 실패!!!.');
        //  }
        //  else{
        //    alert('가입 성공!!!');
        //    Router.go('/home');
        //    console.log(Meteor.user());
        //  }
        //});
    },

    'click #change-to-login' : function(){
        Router.go('/home');
    }
});