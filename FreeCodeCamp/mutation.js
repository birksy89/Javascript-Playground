function mutation(arr) {



    var lowerA = arr[0].toLowerCase();
    var lowerB = arr[1].toLowerCase();

    var b = lowerB.split('');

    var ok = true;

    for (var i = 0; i < b.length; i++) {

        if (lowerA.indexOf(b[i]) == -1) //if FALSE
        {
            ok = false;
            break;
        } else {
            ok = true;
        }


    }

    if (ok == true) {
        arr = true;
    } else {
        arr = false;
    }


    console.log(arr);
    return arr;


}

mutation(["hello", "Hello"]);
