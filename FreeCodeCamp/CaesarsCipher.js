function rot13(str) { // LBH QVQ VG!

    var arr = str.split('')

    for (i = 0; i < arr.length; i++) {

  var charCode = arr[i].charCodeAt(0);
        if (charCode >=65 && charCode<=90) {



            //console.log(arr[i] + " : " +charCode);


            if (charCode > 77) {
                //console.log("bigger");
                var diff = (90 - charCode);
                console.log("Diff: " + diff);
                var addfromA = 13 - diff;
                console.log("Count From A: " + addfromA);

                var newCharcode = 64 + addfromA;

                console.log(arr[i] + " : " + charCode + " : " + newCharcode + " : " + String.fromCharCode(newCharcode));

                charCode = newCharcode;


            } else {
                charCode += 13;


            }


            arr[i] = String.fromCharCode(charCode);
        }


    }

    console.log(arr);

    str = arr.join('')
    return str;
}

// Change the inputs below to test
rot13("SERR CVMMN!")
