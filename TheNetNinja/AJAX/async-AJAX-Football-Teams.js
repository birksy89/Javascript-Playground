window.onload = function() {

    var footballURL = "http://api.football-data.org/v1/soccerseasons/424";

    function initialCall() {
        $.ajax({
            type: "GET",
            url: footballURL,
            headers: {
                'X-Auth-Token': 'ea93b0d4d7724762b54ece5762079114'
            },
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
        $("#title").text(feedTitle + " - Teams");


        //var linkFixtures = footie._links.fixtures.href;
        //console.log(linkFixtures);
        var linkTeams = footie._links.teams.href;
        getDataFromThisURL(linkTeams, displayTeams);
    }

    initialCall();


    // The Above Works... Below is... Well, we'll see.

    function getDataFromThisURL(thisURL, successAction) {
        $.ajax({
            type: "GET",
            url: thisURL,
            headers: {
                'X-Auth-Token': 'ea93b0d4d7724762b54ece5762079114'
            },
            success: successAction,
            error: handleError

        });
    }

    function genericSuccess(hurah) {
        console.log(hurah);
    }

    function displayTeams(teamData) {

        console.log(teamData);

        for (i = 0; i < teamData.teams.length; i++) {

            var aTeam = teamData.teams[i].name;

            //console.log(aFixture);
            $("#data-panel").append("<h2>" + aTeam + "</h2>");
        };
    }





};
