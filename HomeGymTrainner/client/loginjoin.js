
// 로그인
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

//회원가입
Template.join.events({
    'click #front-join-submit':function(event,temp){
        // 회원 정보 객체화
        var joinObject = {
          username : temp.find('input[id=front-join-username]').value,
          password : temp.find('input[id=front-join-password]').value
        };

        Accounts.createUser(joinObject, function(err){
          if (err){
            alert('가입 실패!!!.');
          }
          else{
            alert('가입 성공!!!');
            Router.go('/myinfo');
            console.log(Meteor.user());
          }
        });
    }
});