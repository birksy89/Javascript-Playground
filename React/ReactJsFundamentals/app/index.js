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
// var FriendsContainer = React.createClass({
//   render: function(){
//     var name = 'Tyler McGinnis'
//     var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
//     return (
//       <div>
//         <h3> Name: {name} </h3>
//         <ShowList names={friends} />
//       </div>
//     )
//   }
// });
//
// var ShowList = React.createClass({
//   render: function(){
//     var listItems = this.props.names.map(function(friend){
//       return <li> {friend} </li>;
//     });
//     return (
//       <div>
//         <h3> Friends </h3>
//         <ul>
//           {listItems}
//         </ul>
//       </div>
//     )
//   }
// });
//
// ReactDOM.render(<FriendsContainer/>, document.getElementById('app'));




// Facebook Example - Not fully working - Images don't load.
//------------------------------
// var ProfilePic = React.createClass({
//   render: function() {
//     return (
//       <img src={'https://photo.fb.com/' + this.props.username} />
//     )
//   }
// })
// var ProfileLink = React.createClass({
//   render: function() {
//     return (
//       <a href={'https://www.fb.com/' + this.props.username}>
//         {this.props.username}
//       </a>
//     )
//   }
// })
// var Avatar = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <ProfilePic username={this.props.username} />
//         <ProfileLink username={this.props.username} />
//       </div>
//     )
//   }
// })
//
//  ReactDOM.render(<Avatar username="tylermcginnis" />, document.getElementById('app'));



// fn(d) = v
//  when using a function - you should pass it the data, and it will return a view.

var HelloWorld = React.createClass({
    render: function(){
      console.log(this.props);
      return(
        <div>Hello {this.props.name}</div>
      )
    }
})


ReactDOM.render(
  <HelloWorld name="Andrew" anydatacangohere={29}/>, document.getElementById('app')
);
