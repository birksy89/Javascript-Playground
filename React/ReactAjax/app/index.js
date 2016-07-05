var React = require('react');
var ReactDOM = require('react-dom');

var friends = "http://rest.learncode.academy/api/johnbob/friends";

var AddFriend = React.createClass({

    getInitialState: function() {
        return {newFriend: "Set From State"}

    },

    addCommentChange: function() {

        var val = this.refs.newFriendText.value;

        this.setState({newFriend: val})
        //console.log(this.state.newFriend);
    },

    render: function() {

      var newFriendObject = {
        id: Date.now(),
        age: 26,
        name: this.state.newFriend
      }

        return (
            <div>

                <textarea ref="newFriendText" onChange={this.addCommentChange} defaultValue={this.state.newFriend}></textarea>

                <button onClick={this.props.addFriendAction.bind(null, newFriendObject)} className="btn btn-success">Add New</button>
            </div>

        );
    }
})

var Comment = React.createClass({

    getInitialState: function() {
        return {editing: false}
    },

    edit: function() {
        console.log("Editing")

        this.setState({editing: true})
    },

    remove: function() {
        console.log("Remove");
        this.props.deleteComment(this.props.index);
    },

    save: function() {
        var val = this.refs.newText.value;
        console.log('New Comment: ' + val);
        this.props.updateCommentText(val, this.props.index);
        this.setState({editing: false})
    },

    renderNormal: function() {
        return (
            <div className="panel panel-default">
                <h1>Hello {this.props.title}</h1>
                <p>{this.props.children}</p>
                <button onClick={this.edit} className="btn btn-warning">Edit</button>
                <button onClick={this.remove} className="btn btn-danger">Remove</button>

            </div>
        )
    },

    renderForm: function() {
        return (
            <div className="panel panel-default">
                <h1>Hello {this.props.title}</h1>
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <button onClick={this.save} className="btn btn-success">Save</button>

                <Checkbox/>
            </div>
        )
    },

    render: function() {

        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        }

    }
});

var Board = React.createClass({

    getInitialState: function() {
        return {

            friendsArray: [],
            newFriendBoard: "Set From State Board"
        }

    },

    componentDidMount: function() {
        console.log("mounted");
        this.getUsers();

    },

    getUsers: function() {

        this.serverRequest = $.ajax({
            type: "GET",
            url: friends,
            success: function(result) {
                console.log(result);
                var friendsData = result;
                this.setState({friendsArray: friendsData});
                console.log(this);
            }.bind(this),
            error: function(e) {
                alert("Error: " + e);
            }

        });
    },


    addFriend: function(friendObject) {
        var arr = this.state.friendsArray;
        console.log(arr);
        var newFriend = friendObject;
        arr.push(newFriend);
        console.log(arr);
        this.setState({comments: arr})


    },

    UpdateComment: function(newText, i) {
        console.log("Updating Comment");
        var arr = this.state.comments;

        arr[i] = newText;

        this.setState({comments: arr})
    },

    remove: function(i, id) {
        console.log("Remove" + i);

        var arr = this.state.friendsArray;
        arr.splice(i, 1);
        this.setState({friendsArray: arr})

        $.ajax({
            type: 'DELETE',
            url: friends + '/' + id,
            success: function() {
                //no data...just a success (200) status code
                console.log('Friend Deleted Successfully!');
            }
        });
    },

    eachFriend: function(text, i) {

        if (text.id) {
            return (

                <div key={i} className="panel panel-default">

                    <h6>{i}- {text.id}
                      -<b>{text.name}</b></h6>
                    <p>{text.drink}</p>
                    <button onClick={this.edit} className="btn btn-warning">Edit</button>

                    <button onClick={this.remove.bind(null, i, text.id)} className="btn btn-danger">Remove</button>

                </div>

            )

        } else {
            return (

                <div key={i} className="panel panel-default">

                    <h6>No ID!</h6>


                </div>

            )
        }

    },

    render: function() {

        return (
            <div className="container">
<AddFriend addFriendAction={this.addFriend}/>
                {this.state.friendsArray.map(this.eachFriend)}



            </div>

        );
    }
});

ReactDOM.render(
    <Board/>, document.getElementById('app'));
