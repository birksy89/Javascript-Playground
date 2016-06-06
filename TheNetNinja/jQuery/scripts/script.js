$(document).ready(function() {
    //alert("jQuery Loaded");

    //https://api.jquery.com/category/selectors/
    //Selector / Filters

    $("header nav li:first").css({
        border: "2px solid red"
    });

    $("header nav li:even").css({
        border: "2px solid blue"
    });



    //Not Filters
    $("section:not('#contact')").css({
        border: "2px solid green"
    });

    //Less than / Greater than
    $("#social-nav li:lt(2)").css({
        border: "4px solid orange"
    });

    $("#social-nav li:gt(2)").css({
        border: "4px solid pink"
    });

    //Attribute Filters
    $("div[class]").css({
        border: "2px solid blue"
    });

    $("img[alt]").css({
        border: "2px solid gold"
    });

    $("img[alt=quote]").css({
        border: "4px solid purple"
    });

});
