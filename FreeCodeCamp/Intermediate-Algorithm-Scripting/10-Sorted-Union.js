
function uniteUnique(arr) {

var args = Array.prototype.slice.call(arguments);
var newArr = [];

args.forEach(function(arg){
  console.log(arg);

    arg.forEach(function(val){

      if(newArr.indexOf(val) == -1){ //if value isn't in array, push it.
        newArr.push(val);
      }

    })
})


console.log(newArr);
arr = newArr;
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
