window.onload = function() {

var fruits = ["banana","apple","pear"];

fruits.forEach(function(val){
  console.log(val);
});

//Alternatve Way
console.log("Alternative Way...");

function myCallback(val){
  console.log(val);
}

fruits.forEach(myCallback);


};


/* READY STATES

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in progress
4 - request is complete

*/
