function repeatStringNumTimes(str, num) {
    // repeat after me
    var output = "";

    for (i = 0; i < num; i++) {
        console.log("Hi");
        output += str;
    }

    console.log(output);
    str = output;
    return str;
}

repeatStringNumTimes("abc", 3);
