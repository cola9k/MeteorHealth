(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// DescentGym.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
if (Meteor.isClient) {                                                 // 1
    Template.body.events({                                             // 2
        "submit form": function (event) {                              // 3
                                                                       //
            var userName = event.target.username.value;                // 5
            var Email = event.target.email.value;                      // 6
            var Psw = event.target.psw.value;                          // 7
        }                                                              //
    });                                                                //
}                                                                      //
                                                                       //
//var express = require('express');                                    //
//var routes = require('./routes');                                    //
//var user= require('./routes/user');                                  //
//var http = require('http');                                          //
//var path = require('path');                                          //
//                                                                     //
//var passport = require('passport'), FaceBookStrategy = require('passport-faccbook').Strategy;
//                                                                     //
//// serialize                                                         //
//// 인증 후 사용자 정보를 세션에 저장                                               //
//passport.serializeUser(function(user, done) {                        //
//    console.log('serialize');                                        //
//    done(null,user);                                                 //
//});                                                                  //
//                                                                     //
//// deserialize                                                       //
//// 인증후, 사용자 정보를 세션에서 읽어서 request.user에 저장                            //
//passport.deserializeUser(function(user, done) {                      //
//    //findById(id, function (err, user) {                            //
//    console.log('deserialize');                                      //
//    done(null, user);                                                //
//});                                                                  //
//                                                                     //
//passport.use(new FaceBookStrategy({                                  //
//    clientID: '페이스북 개발자 사이트에서 찾아서 넣으세요',                             //
//    clientSecret: '페이스북 개발자 사이트에서 찾아서 넣으세요',                         //
//    callbackURL: "http://localhost:3000/auth/fackbook/callback"      //
//},                                                                   //
//    function(accessToken, refreshToken, profile, done) {             //
//        console.log(profile);                                        //
//        done(null,profile);                                          //
//    }                                                                //
//));                                                                  //
//var app = express();                                                 //
//                                                                     //
//// all environments                                                  //
//app.set('port', process.env.PORT || 3000);                           //
//app.set('views', path.join(_dirname,'views'));                       //
//app.set('view engine', 'ejs');                                       //
//app.use(express.favicon());                                          //
//app.use(express.logger('dev'));                                      //
//app.use(express.json());                                             //
//app.use(express.urlencoded());                                       //
//app.use(express.methodOverride());                                   //
//app.use(express.session({ secret: 'your secret here'}));             //
//app.use(passport.initialize());                                      //
//app.use(passport.session());                                         //
//app.use(app.router);                                                 //
//app.use(express.static(path.join(_dirname, 'public')));              //
//                                                                     //
//// development only                                                  //
//if('development' == app.get('env')) {                                //
//    app.use(exress.errorHandler());                                  //
//}                                                                    //
//                                                                     //
//app.get('/auth/facebook', passport.authenticate('facebook'));        //
//app.get('/auth/facebook/callback',                                   //
//    passport.authenticate('facebook', { successRedirect: '/login_success',
//        failureRedirect: '/login_fail' }));                          //
//app.get('/login_success', ensureAuthenticated, function(req, res){   //
//    res.send(req.user);                                              //
//});                                                                  //
//app.get('/logout', function(req, res) {                              //
//    req.logout();                                                    //
//    req.redirect('/');                                               //
//});                                                                  //
//function ensureAuthenticated(req, res, next) {                       //
//    // 로그인이 되어 있으면, 다음 파이프라인으로 진행                                    //
//    if (req.isAuthenticated()) { return next(); }                    //
//    // 로그인이 안되어 있으면, login 페이지로 진행                                   //
//    res.redirect('/');                                               //
//}                                                                    //
//                                                                     //
//http.createServer(app).listen(app.get('port'), function() {          //
//    console.log('Express server listening on port ' + app.get('port'));
//});                                                                  //
//"click #myBtn": function () {                                        //
//    $("#myModal").modal();                                           //
//}                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=DescentGym.js.map
