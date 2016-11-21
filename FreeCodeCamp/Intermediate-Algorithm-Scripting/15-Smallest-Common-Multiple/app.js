function smallestCommons(arr) {

    //First make sure the numbers are in order
    arr.sort(sortNumber);

    arr.reverse();

    //Get array of all numbers inc and between
    var allNumbers = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
        allNumbers.push(i);
    }

    console.log(allNumbers);


    var divisibleByEveryNumber = false;
    var passed;
    var x = 1;

    var answer = 0;

    while (divisibleByEveryNumber === false) {
        //console.log(x);

        var remainderTotal = 0;

        passed = allNumbers.every(function(val){
          return x % val ===0;
        });

        if(passed){
          answer = x;
            console.log("This would work! " + x);
          divisibleByEveryNumber = true;
        }
        else{
          x++;
        }

    }

    //console.log(arr);
    return answer;
}


//External Helpers
function sortNumber(a, b) {
    return a - b;
}


module.exports = smallestCommons;
