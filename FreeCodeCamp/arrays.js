function largestOfFour(arr) {
    // You can do this!
var biggest = [];

    for (i = 0; i < arr.length; i++) {
        //Loop Number
      //  console.log(i);
      //  console.log(arr[i]);

      var temp = 0;

        for (x = 0; x < arr[i].length; x++) {

          var currentArry = arr[i];
          var currentNumber = currentArry[x];



          if(currentNumber > temp){
            temp = currentNumber;
          }


          //console.log(currentArry[x]);
          //console.log("//");


        biggest[i] =   temp;
        }

        console.log(temp);


    }
    arr = biggest;
    return arr;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
