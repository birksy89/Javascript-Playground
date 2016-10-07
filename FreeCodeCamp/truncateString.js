function truncateString(str, num) {
    // Clear out that junk in your trunk

    var output = str.substring(0, num);
    console.log(output);

    if(num <=3){
        str = output + "...";
    }
    else if (str.length > num && str.length >3) {
        output = output.substring(0, output.length - 3);
        str = output + "...";
    }
     else {
        str = output;
    }

    console.log(str);
    return str;


}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);
