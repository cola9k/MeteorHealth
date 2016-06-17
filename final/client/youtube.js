
// home youtubue 영상
onYouTubeIframeAPIReady = function () {
    player = new YT.Player("player", {

        height: "400",
        width: "600",
        videoId: "niARNX2oXUo",
        events: {
            onReady: function (event) {
                event.target.playVideo();
            }
        }
    });
};

YT.load();
