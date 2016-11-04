function sumPrimes(num) {


    var arr = [];

    for(i=0; i<=num; i++){
      console.log(i);
console.log(isPrime(i));

      if(isPrime(i)){
        arr.push(i);
      }
    }



    console.log(arr);

  var sum = arr.reduce(add, 0);
  sum--;
  console.log(sum);

    return sum;
}


function add(a, b) {
    return a + b;
}

function isPrime(val) {

    //test if number is prime
    for (var i = 2; i < val; i++) {
        if (val % i === 0) {
            return false;
        }
    }
    return true;
}



sumPrimes(10);
sumPrimes(977)
