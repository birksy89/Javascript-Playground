function slasher(arr, howMany) {

    var arrLength = arr.length;
    //var newArr = [];
    var i = 0;
    while (i < howMany) {

  arr.splice(0, 1);




        i++
    }


console.log(arr);
    return arr;
}

slasher([1, 2, 3], 2);
