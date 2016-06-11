var CurrentGame = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {

        this.serverRequest = $.ajax({
            type: "GET",
            url: "http://api.football-data.org/v1/soccerseasons/398/teams",
            headers: {
                'X-Auth-Token': 'ea93b0d4d7724762b54ece5762079114'
            },
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
                <h1>Team List</h1>
                <TeamList data={this.state.data}/>
            </div>
        );
    }
});

var TeamList = React.createClass({

    render: function() {

        // This prints the correct data
        var teamDataTest = this.props.data;
        console.log(teamDataTest);

        // This is to test looping round basic array
        var names = ['Jake', 'Jon', 'Thruster'];
        console.log(names);

        // This is to test looping round "complex" object array
        var stations = [
            {
                call: 'station one',
                frequency: '000'
            }, {
                call: 'station two',
                frequency: '001'
            }
        ]
        console.log(stations);

        //This is the map function which binds each item in array to it's own bit of code
        return (
            <div className="row">

                {/*names.map(function(name, index) {
                    return <li key={index}>{name}
                        - {index}</li>;
                })*/}

                {/*stations.map(function(station, index) {
                    return <li key={index}>{station.call}
                        - {index}</li>;
                })*/}

                {teamDataTest.map(function(team, index) {
                    return <div key={index} className="panel panel-default">
                        <div className="panel-heading">{team.name}</div>
                        <div className="panel-body"><img className="crestImage" src={team.crestUrl}/>
                        <PlayerList dataUrl ={team._links.players.href}/>
                        </div>
                    </div>;
                })}

            </div>
        )
    }
});


var PlayerList = React.createClass({

  getInitialState: function() {
      return {data: []};
  },

  componentDidMount: function() {

      this.serverRequest = $.ajax({
          type: "GET",
          url: this.props.dataUrl,
          headers: {
              'X-Auth-Token': 'ea93b0d4d7724762b54ece5762079114'
          },
          success: function(result) {
              var playerData = result.players;
              console.log(playerData);
              this.setState({data: playerData});
          }.bind(this),
          error: handleError

      });

  },

  render: function() {

    var tester = this.state.data;
    console.log(tester);
    return (
      <div className="playerLister">
        <h2>Players</h2>


        {tester.map(function(station, index) {
            return <li key={index}>{station.name}
                - {index}</li>;
        })}

      </div>
    );
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
