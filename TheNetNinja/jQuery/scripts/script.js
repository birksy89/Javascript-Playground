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


    // Chaining - Lesson 8
    $("#contact-methods").css({
            border: "2px solid red"
        })
        .next().css({
            border: "2px solid blue"
        })
        .closest("section").css({
            border: "2px solid green"
        });

    // Adding Content - Lesson 9

    var tweet = "<div style='background:purple'>Some Content From Variable</div>";

    //$("#tweets .tweet-data").append(tweet);
    //$("#tweets .tweet-data").prepend(tweet);
    //$("#tweets .tweet-data").before(tweet);
    //$("#tweets .tweet-data").after(tweet);
    //$("#tweets .tweet-data").html(tweet);
    //$("#tweets .tweet-data").text(tweet);


    // Wrapping and unwrapping Elements - Lesson 10

    //$("section").wrap("<div>");
    //$("section").unwrap();
    //$("section").wrapAll("<div>");

    var wrapper = "<div class='wrapper'>";
    var button = $(".button");
    var wrapped = true;

    button[0].onclick = function() {
        if (wrapped) {
            $("section").unwrap();
            wrapped = false;
            button.text("Wrap");
        } else {
            $("section").wrapAll(wrapper);
            wrapped = true;
            button.text("UnWrap");
        }
    };

    //Empty & Removing Content

    //$(".button").empty();
    //$("#points-of-sale").empty();


    // $(".button").remove();
    // $("#points-of-sale").remove();
    // $("#contact img").remove();


    //Changing & Removing Attributes

    //$("#contact img").removeAttr("alt");
    //$("#contact img").attr("alt", "Hello world!");

    //Retrieve
    console.log($("#contact img").attr("alt"));



    // CSS With jquery
    //Get current
    console.log($("#social-nav").css("position"));

    //Set css
    $("#social-nav").css("left", "100px");
    //Set CSS - Chaining
    $("#social-nav").css("left", "100px").css("top", "10px");
    //Set CSS - Object


    // $("#social-nav").css({
    //     height: "40px",
    //     width: "500px",
    //     background:"red"
    // });

    var cssObject = {
        height: "40px",
        width: "500px",
        background: "red"
    };

    $("#social-nav").css(cssObject);


    //Binding & Unbinding Events

    var myLis = $("#points-of-sale li"); //Get a bunch of LIs

    //Bind a click method to any of these
    myLis.on("click", function() {
        $(this).css("background", "pink");

        //After clicking 1, stop the others from working
        myLis.off("click");
    });


    //Event Helpers

    //Click helper - Slightly shorter than above
    $("#lead-banner").click(function() {
        alert("You clicked me");
    });



    //The Event Object "e"
    $("#logo").click(function(e) {
        console.log("Event Target: " + (e.target));
        console.log("Event Type: " + e.type);
        e.stopPropagation();
    });



    //Animation

    $("section >h2").click(function() {
        $(this).animate({
                "width": "500px",
                "height": "100px"
            }, 4000, "linear") //Animation speed in miliseconds & easing style
    })




});
