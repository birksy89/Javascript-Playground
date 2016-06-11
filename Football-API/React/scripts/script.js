var CurrentGame = React.createClass({
    getInitialState: function() {
        return {
            data: []
        };
    },
    componentDidMount: function() {

        this.serverRequest = $.ajax({
            type: "GET",
            url: "http://api.football-data.org/v1/soccerseasons/398/teams",
            headers: {
                'X-Auth-Token': 'ea93b0d4d7724762b54ece5762079114'
            },
            async: false,
            success: function(result) {
                var teamsData = result.teams;
                console.log(teamsData);
                this.setState({data: teamsData});
            }.bind(this),
            error: handleError

        });

    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        return (
            <div className="CurrentGame">
                <h1>
                    Current Game Information</h1>
                <PlayerList data={this.state.data}/>
            </div>
        );
    }
});

var PlayerList = React.createClass({

    render: function() {

        // This prints the correct data
        var teamDataTest = this.props.data;
        console.log("In the Player List");
        console.log(teamDataTest);

        var names = ['Jake', 'Jon', 'Thruster'];
        console.log(names);

        var stations = [
  {call:'station one',frequency:'000'},
  {call:'station two',frequency:'001'}
]
console.log(stations);

        return (
            <p>Hello

              {names.map(function(name, index) {
                    return <li key={index}>{name} - {index}</li>;
                })}

                {stations.map(function(station, index) {
                      return <li key={index}>{station.call} - {index}</li>;
                  })}

                  {teamDataTest.map(function(team, index) {
                        return <li key={index}>{team.name} - {index}</li>;
                    })}


            </p>
        )
    }
});

ReactDOM.render(
    <CurrentGame/>, document.getElementById('data-panel'));



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
