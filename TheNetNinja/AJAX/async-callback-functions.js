window.onload = function() {

    var fruits = ["banana", "apple", "pear"];

    fruits.forEach(function(val) {
        console.log(val);
    });



    //Alternatve Way
    var fruits2 = ["orange", "grapes", "pineapple"];
    console.log("Alternative Way...");

    function myCallback(val) {
        console.log(val);
    }

    fruits2.forEach(myCallback);



    //ASYNC version - jQuery

    $.get("data/tweets.json", function(data) {
        console.log(data);
    });

    console.log("Test - This can appear before the data, even though it's later in the code");


    //Same again, but Passing a callback function, rather than inline
    function myCallback2(data) {
        console.log(data);
    }

    $.get("data/tweets.json", myCallback2 );

    //

};


/* READY STATES

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in progress
4 - request is complete

*/
