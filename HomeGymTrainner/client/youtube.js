// home youtubue 영상
onYouTubeIframeAPIReady = function () {

    // New Video Player, the first argument is the id of the div.
    // Make sure it's a global variable.
    player = new YT.Player("player", {

        height: "400",
        width: "600",

        // videoId is the "v" in URL (ex: http://www.youtube.com/watch?v=LdH1hSWGFGU, videoId = "LdH1hSWGFGU")
        videoId: "niARNX2oXUo",

        // Events like ready, state change,
        events: {

            onReady: function (event) {

                // Play video when player ready.
                event.target.playVideo();
            }

        }

    });
};

YT.load();