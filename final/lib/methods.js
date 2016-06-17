// Feed에 뿌려주기 위한 collection HInfo
HealthInfo = new Mongo.Collection("HInfo");

// 다음 검색 API를 활용하여 동영상 url을 가져옴
Meteor.methods({
    played: function(topic){
        var url = 'https://apis.daum.net/search/vclip?apikey=1ec1745d77ab7ea6aa5b56dbd5bca0df&output=json&q='+topic;
        var result = HTTP.get(url).data;
        console.log("3.http");
        console.log(result);
        return result;
        //return topic;
    }
});