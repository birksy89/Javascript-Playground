function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    //console.log(collection);

    collection.forEach(function(item) {

        var ok = true; // Is this present in the array? Say true till otherwise

        var itemObjKeys = Object.keys(item);
        var sourceObjKeys = Object.keys(source);

        //console.log("Source Keys:" + sourceObjKeys);


        sourceObjKeys.forEach(function(sourceKeyName) {
            //console.log(sourceKeyName + " : " + source[sourceKeyName]);

            if (item.hasOwnProperty(sourceKeyName)) {
                //Ok you have a property of the same name... That don't impress'a me much.

                if (item[sourceKeyName] != source[sourceKeyName]) {
                    ok = false;
                }

            }
            else{
              ok = false;
            }
        })


        if (ok) {
            arr.push(item);
        }


        // itemObjKeys.forEach(function(itemKeyName) {
        //     console.log(itemKeyName + " : " + item[itemKeyName]);
        // })

    })


    console.log(arr);
    // Only change code above this line
    return arr;
}

whatIsInAName([{
    "a": 1,
    "b": 2
}, {
    "a": 1
}, {
    "a": 1,
    "b": 2,
    "c": 2
}], {
    "a": 1,
    "b": 2
});

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
