var friends = "http://rest.learncode.academy/api/andrew/friends";

// Advanced Example
// ------------------------------
var FriendsContainer = React.createClass({

    getInitialState: function() {
        return {data: [], inputUsername: "Enter Username"};
    },

    componentDidMount: function() {
        console.log("mounted");
        this.getUsers();

    },


    getUsers: function(){
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

        return (
            <div>
                <h3>
                    Name: {this.state.inputUsername}
                </h3>

                <input ref="inputbox" value={this.state.inputUsername} onChange={this.handleChange}></input>

                <button onClick={this.addUser.bind(this, this.state.inputUsername, 45)}>Add</button>
                <ShowList names={this.state.data} />
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

    tester: function(input) {
        console.log(input);
    },


    deleteAll: function() {

        this.props.names.map(function(friend) {
            console.log(friend.id);
            //this.deleteUser(friend.id);


            $.ajax({
                type: 'DELETE',
                url: 'http://rest.learncode.academy/api/andrew/friends/' + friend.id,
                success: function() {
                    //no data...just a success (200) status code
                    console.log('Friend Deleted Successfully!');
                }
            });

        });

    },

    render: function() {
        var listItems = this.props.names.map(function(friend) {
            return <li key={friend.id}>
                {friend.name} - {friend.id}
            </li>;

        });
        return (
            <div>
                <h3>
                    Friends:
                </h3>
                <button onClick={this.deleteAll}>Delete All</button>
                <ul>

                    <Useritem users={this.props.names}/>
                </ul>
            </div>
        )
    }
});


var Useritem = React.createClass({

  render: function() {

    var listItems2 = this.props.users.map(function(user) {
        return <li key={user.id}>
            {user.name} - {user.id}
        </li>;

    });

      return (
        <div>
{listItems2}
  </div>
      )
  }
  });

ReactDOM.render(
    <FriendsContainer/>, document.getElementById('data-panel'));
