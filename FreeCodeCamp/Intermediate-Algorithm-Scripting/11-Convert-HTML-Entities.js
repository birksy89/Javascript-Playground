// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


function convertHTML(str) {
    // &colon;&rpar;

    var arr = str.split('')
    var newArr = [];

    arr.forEach(function(val) {
        console.log(val);

        switch (val) {
            case "&":
                val = "&amp;";
                break;
            case "<":
                val = "&lt;";
                break;
            case ">":
                val = "&gt;";
                break;
            case "'":
                val = "&apos;";
                break;
                case "\"":
                    val = "&quot;";
                    break;

        }

        newArr.push(val);

    })

    var output = newArr.join('')
    console.log(arr);
    console.log(newArr);
    console.log(output);

    str = output;
    return str;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos")
