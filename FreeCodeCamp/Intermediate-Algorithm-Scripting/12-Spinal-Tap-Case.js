function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  var arr = str.split('');
var newArr = [];
  arr.forEach(function(val,index){

    //console.log(val + index);
    if(val == " " || val == "_"){
      val = "-";
    }

    if(val == val.toUpperCase() && index !==0  ){
      newArr.push("-");

    }


val = val.toLowerCase();
    newArr.push(val);

  })

  str = newArr.join('');



  var newstr = str.replace(/---/g,'-');

  newstr = newstr.replace(/--/g,'-');

  //console.log(newArr);
  //console.log(str);
  console.log(newstr);
  return newstr;
}

spinalCase("This Is Spinal Tap")
spinalCase("thisIsSpinalTap")
spinalCase("Teletubbies say Eh-oh")
