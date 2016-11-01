function translatePigLatin(str) {

    var firstChar = str.charAt(0);


    if (firstChar.match(/^[aeiou]$/i)) {
        console.log("Vowel");

        str += "way";
    } else {
        console.log("Not");



        var newStr = str.slice(1);

        if (!newStr.charAt(0).match(/^[aeiou]$/i)) {
            console.log("Another Vowel");
            var secChar = newStr.charAt(0);
            newStr = newStr.slice(1);

            newStr += firstChar + secChar+ "ay";
        }
        else{
          newStr += firstChar + "ay";
        }





        console.log(newStr);
        str = newStr;
    }

    return str;
}

translatePigLatin("consonant");
translatePigLatin("glove")
