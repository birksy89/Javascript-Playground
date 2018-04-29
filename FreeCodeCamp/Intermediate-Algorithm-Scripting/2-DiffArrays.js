function diffArray(arr1, arr2) {
    var newArr = [];

    arr1.forEach(function(val) {
console.log(newArr);

        //console.log("Arr1: " + val);
        //console.log("..."+arr2.indexOf(val));
        if (arr2.indexOf(val) < 0) {
            newArr.push(val);
        }

    });

    arr2.forEach(function(val) {
        if (arr1.indexOf(val) < 0) {
            newArr.push(val);
        }
    });

    console.log(newArr);

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
