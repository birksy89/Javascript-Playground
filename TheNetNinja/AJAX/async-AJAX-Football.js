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
      getDataFromThisURL(linkFixtures);
  }

  initialCall();


// The Above Works... Below is... Well, we'll see.

function getDataFromThisURL(thisURL){
  $.ajax({
      type: "GET",
      url:thisURL,
         headers: { 'X-Auth-Token': 'ea93b0d4d7724762b54ece5762079114' },
      success: genericSuccess,
      error: handleError

  });
}

function genericSuccess(hurah) {
    console.log(hurah);
    return hurah;
}


getDataFromThisURL("http://api.football-data.org/v1/soccerseasons/424");



};
