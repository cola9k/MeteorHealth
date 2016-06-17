// collection과 연결되어 있는 HInfo
Meteor.publish('HInfo', function () {
   return HealthInfo.find();
});