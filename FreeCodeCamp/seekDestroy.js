function destroyer(arr) {

    var args = Array.prototype.slice.call(arguments);

    var array = args[0];
    args.splice(0, 1);

    console.log("Original Array: " + array);
  //  console.log(args);

    var tempArr;

    for (i = 0; i < args.length; i++) {

      console.log("Arg: " + args[i]);
      tempArr = arr.filter(function(value){
        return value != args[i];
      })

      arr = tempArr;

  console.log(tempArr);
    }


    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
