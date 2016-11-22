function dropElements(arr, func) {

    var numTrue = 0;
    var newNums = [];
    // Drop them elements.
    arr.forEach(function(val) {



        if (func(val) && numTrue < 1) {
            newNums.push(val);
            numTrue++;
        } else if(numTrue ==1) {
             newNums.push(val);
        }

          console.log("Current Val: " + val + "Number Hits: " + numTrue);
    });


    console.log(newNums);
    return newNums;
}

dropElements([0, 1, 0, 1], function(n) {
    return n === 1;
})
dropElements([1, 2, 3, 9, 2], function(n) {
    return n > 2;
})
