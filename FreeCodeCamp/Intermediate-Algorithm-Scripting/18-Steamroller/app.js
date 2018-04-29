
function steamrollArray(arr) {
  // I'm a steamroller, baby
console.log(arr);

var newArray = [];

//Is the whole thing an array?
//console.log(Array.isArray(arr));

loopArrary(arr);

function loopArrary(arr){

  arr.forEach(function(val){

    var isArray = Array.isArray(val);
    console.log(val + " - " + isArray );

    if(isArray){
loopArrary(val);

    }
    else{
      newArray.push(val);
    }


  })

}



console.log(newArray);
  return newArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]])
