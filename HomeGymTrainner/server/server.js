
Meteor.publish('HInfo', function () {
   return HealthInfo.find();
});