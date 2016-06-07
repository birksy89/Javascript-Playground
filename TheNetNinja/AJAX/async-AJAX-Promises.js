window.onload = function() {

    $.get("data/tweets.json").then(function(tweets) {
        console.log(tweets);

        for (var i = 0; i < tweets.tweets.length; i++) {
            console.log(tweets.tweets[i].content);
        }

        return $.get("data/friends.json");

    }).then(function(friends) {
        console.log(friends);

        return $.get("data/videos.json");
        
    }).then(function(videos) {
        console.log(videos);
    });

};
