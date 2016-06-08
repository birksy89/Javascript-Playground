window.onload = function() {

  var footballURL ="http://api.football-data.org/v1/soccerseasons/424";

  function initialCall(){
    $.ajax({
        type: "GET",
        url:footballURL,
           headers: { 'X-Auth-Token': 'ea93b0d4d7724762b54ece5762079114' },
        success: callbackFootie,
        error: handleError

    });
  }


  function handleError(jqXHR, textStatus, error) {
      console.log(error);
  }

  function callbackFootie(footie) {
      console.log(footie);

      var feedTitle = footie.caption;
      $("#data-panel").append(feedTitle);


      var linkFixtures = footie._links.fixtures.href;
        //console.log(linkFixtures);
      getDataFromThisURL(linkFixtures, displayFixtures);
  }

  initialCall();


// The Above Works... Below is... Well, we'll see.

function getDataFromThisURL(thisURL,successAction){
  $.ajax({
      type: "GET",
      url:thisURL,
         headers: { 'X-Auth-Token': 'ea93b0d4d7724762b54ece5762079114' },
      success: successAction,
      error: handleError

  });
}

function genericSuccess(hurah) {
    console.log(hurah);
}

function displayFixtures(fixtures){
//alert("hello");

console.log(fixtures);

for(i=0; i < fixtures.fixtures.length; i++){

  var aFixture = fixtures.fixtures[i].homeTeamName + " vs " + fixtures.fixtures[i].awayTeamName;

  //console.log(aFixture);
  $("#data-panel").append("<h2>"+aFixture + "</h2>");
}
}





};
