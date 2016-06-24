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


var HelloUser = React.createClass({
  render: function(){
    return (
      <div> Hello, {this.props.name}</div>
    )
  }
});
ReactDOM.render(<HelloUser name="Tyler"/>, document.getElementById('app'));
