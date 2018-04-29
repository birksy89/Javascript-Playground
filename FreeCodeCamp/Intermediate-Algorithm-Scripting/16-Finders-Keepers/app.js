function findElement(arr, func) {

  var products = []

arr.forEach(function(val){


if (func(val)) {
  products.push(val);
}

})


  var num = products[0];
  console.log(num);
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
