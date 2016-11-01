function myReplace(str, before, after) {

    var arr = str.split(' ');
    console.log(arr);

    var swapPos = arr.indexOf(before);

    if(before.charAt(0) == before.charAt(0).toUpperCase()){
      console.log("Uppercase");
      after = capitalizeFirstLetter(after);
      console.log(after);
    }
    else{
        console.log("Lowercase");
    }

    arr.splice(swapPos, 1, after);
    str = arr.join(' ');

    console.log(str);
    return str;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");
