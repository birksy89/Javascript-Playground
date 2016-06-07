window.onload = function() {


    function handleError(jqXHR, textStatus, error) {
        console.log(error);
    }

    $.ajax({
        type: "GET",
        url: "data/tweets.json",
        success: callbackTweets,
        error: handleError

    });


    function callbackTweets(data) {
        console.log(data);

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


};
