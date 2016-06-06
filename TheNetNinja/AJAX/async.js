window.onload = function() {
    //alert("Hello");

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        //console.log(http);

        if (http.readyState == 4 && http.status == 200) {
            //console.log(http.response); //String
            console.log(JSON.parse(http.response));
            console.log("Done");
        }
    }

    http.open("GET", "data/tweets.json", true) //Type of request ... path to file ... ASync True or False.
//If you set the above value to false, it makes it Syncronous and will block code going forward.

    http.send(); //once prepared, send.

    console.log(http);
    console.log("Async Test - Fires before Ajax call, even at end."); // Fires before the object is returned.

};


/* READY STATES

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in progress
4 - request is complete

*/
