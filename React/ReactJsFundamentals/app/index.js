var React = require('react');
var ReactDOM = require ('react-dom');

// var HelloWorld = React.createClass({
//     render: function(){
//       return(
//         <div>Hello World - Using webpack-dev-server</div>
//       )
//     }
// })
//
//
// ReactDOM.render(
//   <HelloWorld/>, document.getElementById('app')
// );

//Basic Example
//------------------------------
// var HelloUser = React.createClass({
//   render: function(){
//     return (
//       <div> Hello, {this.props.name}</div>
//     )
//   }
// });
// ReactDOM.render(<HelloUser name="Tyler"/>, document.getElementById('app'));


//Advanced Example
//------------------------------
var FriendsContainer = React.createClass({
  render: function(){
    var name = 'Tyler McGinnis'
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
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
