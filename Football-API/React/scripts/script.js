var UserGist = React.createClass({
    getInitialState: function() {
        return {username: '', lastGistUrl: ''};
    },

    componentDidMount: function() {

        this.serverRequest = $.ajax({
            type: "GET",
            url: "http://api.football-data.org/v1/soccerseasons/424/teams",
            headers: {
                'X-Auth-Token': 'ea93b0d4d7724762b54ece5762079114'
            },
            success: function(result) {
                var lastGist = result.teams[0];
                console.log(result);
                this.setState({username: lastGist.name, lastGistUrl: lastGist.crestUrl});
            }.bind(this),
            error: handleError

        });

    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        return (
            <div>
                {this.state.username}s flag is:
                <img src={this.state.lastGistUrl} />
            </div >
        );
    }
});

ReactDOM.render(< UserGist source = "https://api.github.com/users/octocat/gists" / >, document.getElementById('data-panel'));

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
    $("#title").text(feedTitle + " - Fixtures");

    var linkFixtures = footie._links.fixtures.href;
    //console.log(linkFixtures);
    getDataFromThisURL(linkFixtures, displayFixtures);
}

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

function displayFixtures(fixtures) {
    //alert("hello");

    console.log(fixtures);

    for (var i = 0; i < fixtures.fixtures.length; i++) {

        var aFixture = fixtures.fixtures[i].homeTeamName + " vs " + fixtures.fixtures[i].awayTeamName;

        //console.log(aFixture);
        $("#data-panel").append("<h2>" + aFixture + "</h2>");
    }
}
