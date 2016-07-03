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
     return {friends: ['Ean Platter', 'Murphy Randally', 'Merrick Christensen']};
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

  render: function(){

    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={this.state.friends}
          remove={this.deleteFriend}
           />
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function(){

    function deleteItem(index) {
        return console.log("Friend: " + index)
    }



    var listItems = this.props.names.map(function(friend, index){
      return <li key={index} > {friend} </li>;
    });



    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>

      </div>
    )
  }
});

ReactDOM.render(<FriendsContainer/>, document.getElementById('app'));
