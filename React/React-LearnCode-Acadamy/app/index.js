var React = require('react');
var ReactDOM = require('react-dom');

//Data
var name = 'Tyler McGinnis'

//Advanced Example
//------------------------------
var FriendsContainer = React.createClass({

    getInitialState: function() {
        // naming it initialX clearly indicates that the only purpose
        // of the passed down prop is to initialize something internally
        return {
            friends: [
                'Ean Platter', 'Murphy Randally', 'Merrick Christensen'
            ],
            stateOne: "Hello"
        };
    },

    deleteFriend: function(friendIndex) {
        var currentItems = this.state.friends;
        console.log(currentItems);
        console.log("size:" + currentItems.length);

        currentItems.splice(friendIndex, 1);
        console.log(currentItems);
        console.log("size:" + currentItems.length);

        var newItems = currentItems;

        this.setState({friends: newItems});
    },

    changeHeaderTitle(inputTitle){
      this.setState({title: inputTitle});
    },

    render: function() {
        return (
            <div>
                <Header title="Andrew"
                  changeTitle={this.changeHeaderTitle.bind(this)}/>


                <ShowList names={this.state.friends} remove={this.deleteFriend}/>
            </div>
        )
    }
});

var Header = React.createClass({

    getInitialState: function() {
        return {seconds: 0};
    },


    render: function() {



        return (
            <div>
                Hello {this.props.title}
            </div>
        )
    }
});

var ShowList = React.createClass({

    render: function() {
        console.log(this.props)

        function deleteItem(index) {
            return <span>X</span>
        }

        var listItems = this.props.names.map(function(friend, index) {

            return <li key={index}>
                {friend}
            </li>;
        });

        return (
            <div>
                <h3>
                    Friends
                </h3>
                <ul>
                    {listItems}
                </ul>

            </div>
        )
    }
});

ReactDOM.render(
    <FriendsContainer/>, document.getElementById('app'));
