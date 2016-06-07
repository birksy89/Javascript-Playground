window.onload = function() {

    function handleError(jqXHR, textStatus, error) {
        console.log(error);
    }


    function callJSON() {
        $.ajax({
            type: "GET",
            url: "data/tweets.json",
            success: callbackTweets,
            error: handleError

        });

    }

    function callbackTweets(data) {
        console.log(data.tweets[0].content);

        document.write(data.tweets[0].content);

        $.ajax({
            type: "GET",
            url: "data/friends.json",
            success: callbackFriends,
            error: handleError
        });

    }


    function callbackFriends(data) {
        console.log(data);

        $.ajax({
            type: "GET",
            url: "data/videos.json",
            success: function(data) {
                console.log(data);


            },
            error: handleError
        });


    }

    //Call Stuff

    setInterval(callJSON, 1000);

    callJSON();


};
