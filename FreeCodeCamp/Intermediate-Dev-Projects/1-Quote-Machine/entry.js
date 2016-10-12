var $ = require('jquery');
window.jQuery = $;
window.$ = $;


function getQuote(){
  $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
      headers: {
        "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      dataType: 'json',
      success: function(data){
        console.log(data);
        document.getElementById('q').innerHTML = data.quote;
          document.getElementById('a').innerHTML = data.author;
      }
    });

}


$(function() {
    console.log( "ready!" );
    getQuote();

    $("#button").click(function(){
        getQuote();
    })


});
