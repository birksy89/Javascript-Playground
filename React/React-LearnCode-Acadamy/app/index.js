var React = require('react');
var ReactDOM = require('react-dom');



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

    var deleteItem = this.props.names.map(function(friend,index){
      return <li> {friend} - {index +1} </li>;
    });

    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>

        <ol>
          {deleteItem}
        </ol>
      </div>
    )
  }
});

ReactDOM.render(<FriendsContainer/>, document.getElementById('app'));

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

// var HelloWorld = React.createClass({
//     render: function(){
//       console.log(this.props);
//       return(
//         <div>Hello {this.props.name}</div>
//       )
//     }
// })
//
//
// ReactDOM.render(
//   <HelloWorld name="Andrew" anydatacangohere={29}/>, document.getElementById('app')
// );

// var USER_DATA = {
//     name: "Andrew Birks",
//     username: "birksy89",
//     image: "http://avatars1.githubusercontent.com/u/4971630?v=3&s=460"
// }
//
// var ProfilePic = React.createClass({
//     render: function() {
//         return (<img src={this.props.image} style={{
//             height: 100,
//             width: 100
//         }}/>)
//     }
// })
//
// var Link = React.createClass({
//
//   changeURL: function(){
//     window.location.replace(this.props.href)
//   },
//     render: function() {
//         return (
//             <span style={{color:'blue', cursor: 'pointer'}}
//               onClick={this.changeURL}>
//                 {this.props.children}
//             </span>
//         )
//     }
// })
//
// var ProfileLink = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <Link href={"https://www.github.com/" + this.props.username}>
//                     {this.props.username}
//                 </Link>
//             </div>
//         )
//     }
// })
//
// var ProfileName = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 {this.props.name}
//             </div>
//         )
//     }
// })
//
// var Avatar = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <ProfilePic image={this.props.user.image}/>
//                 <ProfileName name={this.props.user.name}/>
//                 <ProfileLink username={this.props.user.username}/>
//             </div>
//         )
//     }
// })

// ReactDOM.render(
//     <Avatar user={USER_DATA}/>,
//      document.getElementById('app')
//    );
