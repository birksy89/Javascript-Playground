
function sumAll(arr) {

  var max = Math.max(...arr);
  var min = Math.min(...arr);
  console.log(max);
  console.log(min);

  var spread = [];

  for(var i = min; i<=max; i++ ){
    spread.push(i);
  }

  console.log(spread);


    var sum = spread.reduce(function(a, b) {
        return a + b;
    }, 0);

    console.log(sum);

  return sum;

}

sumAll([1, 4]);
