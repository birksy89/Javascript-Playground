
function truthCheck(collection, pre) {
  // Is everyone being true?

//console.log(collection);

var errors = 0;

collection.forEach(function(val){
  console.log(val[pre]);

  if(val[pre]){
      console.log("Looks ok to me");
  }
  else{
    console.log("Hmmmm");
    errors++;
  }


})

console.log(errors);

if(errors >0){
  pre = false;
}
else{
  pre = true;
}

//
// function isTruthy(element, index, array){
//   if (element == true){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
