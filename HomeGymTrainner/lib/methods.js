Users = new Mongo.Collection("u");
Meteor.methods({
    played: function(topic){
        //var url = 'https://apis.daum.net/search/vclip?apikey=1ec1745d77ab7ea6aa5b56dbd5bca0df&output=json&q='+topic;
        //var result = HTTP.get(url).data;
        //console.log("3.http");
        //console.log(result);
        //return result;
        return topic;
    }
});
