var React = require('react');
var ReactDOM = require('react-dom');

var Comment = React.createClass({

    edit: function() {
        console.log("Editing")
    },

    remove: function() {
        console.log("Remove")
    },

    render: function() {

        return (
            <div className="container">
                <h1>Hello {this.props.title}</h1>
                <p>{this.props.children}</p>
                <button onClick={this.edit} className="btn btn-warning">Edit</button>
                <button onClick={this.remove} className="btn btn-danger">Remove</button>
            </div>
        )
    }
});

ReactDOM.render(
    <div>
    <Comment title="World!">Hey my name is Andrew</Comment>
    <Comment title="World!">Beans</Comment>
    <Comment title="World!">Tuna</Comment>
</div>, document.getElementById('app'));
