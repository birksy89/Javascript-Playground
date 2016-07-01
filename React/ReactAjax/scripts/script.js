var friends = "http://rest.learncode.academy/api/andrew/friends";

// Advanced Example
// ------------------------------
var FriendsContainer = React.createClass({

    getInitialState: function() {
        return {data: [], inputUsername: "Enter Username" };
    },

    componentDidMount: function() {
        console.log("mounted");

        this.serverRequest = $.ajax({
            type: "GET",
            url: friends,
            success: function(result) {
                console.log(result);
                var friendsData = result;

                this.setState({data: friendsData});
                console.log(this);
            }.bind(this),
            error: function(e) {
                alert("Error: " + e);
            }

        });
    },

    addUser: function(inputName, inputAge) {
        $.ajax({
            type: 'POST',
            url: 'http://rest.learncode.academy/api/andrew/friends',
            data: {
                name: inputName,
                age: inputAge
            },
            success: function(data) {
                console.log("Friend added!", data); //the new item is returned with an ID
            }
        });
    },



    tester: function(input) {
        console.log("Does this fire? " + input);
    },

    handleChange: function() {

        this.setState({inputUsername: this.refs.inputbox.value});
    },

    render: function() {
        var name = 'Tyler McGinnis'
        var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
        return (
            <div>
                <h3>
                    Name: {this.state.inputUsername}
                </h3>

                <input ref="inputbox" value={this.state.inputUsername} onChange={this.handleChange}></input>

                <button onClick={this.addUser.bind(this, this.state.inputUsername, 45)}>Add</button>
                <ShowList names={this.state.data}  testerThing={this.addUser()} />
            </div>
        )
    }
});

var ShowList = React.createClass({


  deleteUser: function(userID) {

      $.ajax({
          type: 'DELETE',
          url: 'http://rest.learncode.academy/api/andrew/friends/' + userID,
          success: function() {
              //no data...just a success (200) status code
              console.log('Friend Deleted Successfully!');
          }
      });
  },


    render: function() {
        var listItems = this.props.names.map(function(friend) {
            return <li key={friend.id}>
                {friend.name} - <button > Delete - {friend.id}  </button>
            </li>;

        });
        return (
            <div>
                <h3>
                    Friends:
                </h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
});

ReactDOM.render(
    <FriendsContainer/>, document.getElementById('data-panel'));
