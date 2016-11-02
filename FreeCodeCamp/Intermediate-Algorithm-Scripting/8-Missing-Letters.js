function fearNotLetter(str) {

    var currentCharCode = str.charCodeAt(0);
    //console.log(currentChar);
    var arr = str.split('');
    str = undefined;

    arr.forEach(function(val) {


        //console.log(val);
        var valCharCode = val.charCodeAt(0);
        console.log(val + " - " + valCharCode + " - Current: " + currentCharCode);

        if (currentCharCode != valCharCode) {
            console.log("hmmmm... I think it should be: " + String.fromCharCode(currentCharCode));

            str = String.fromCharCode(currentCharCode);
        }


        currentCharCode = valCharCode + 1;


    })

    console.log(str);
    return str;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
