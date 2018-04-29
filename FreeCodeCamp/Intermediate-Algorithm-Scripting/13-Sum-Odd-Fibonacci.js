function sumFibs(num) {


    var currentNum = 0;
    var previousNum = 1;
    var fib = 0;
    var arr = [];

    while (fib <= num) {

        fib = currentNum + previousNum;

        previousNum = currentNum;
        currentNum = fib;
        console.log(fib);

        if(fib %2 !==0){
            arr.push(fib); //Only push the odd numbers into the array
        }


    }
    arr.pop(); //Remove LAst Element


    console.log(arr);

    var sum = arr.reduce(add, 0);
    console.log(sum);

    return sum;
}


function add(a, b) {
    return a + b;
}



sumFibs(75025);
