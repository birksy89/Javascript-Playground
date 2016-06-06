window.onload = function() {
    //alert("Hello");

  $.get("data/tweets.json", function(data){
    console.log(data);
  });
  //Format is data path, followed by callback funciton.

  console.log("ASync Test... Happens before data, even though it's later in code.")


};


/* READY STATES

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in progress
4 - request is complete

*/
