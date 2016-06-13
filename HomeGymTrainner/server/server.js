Meteor.publish('u',function(){
   return Users.find();
});