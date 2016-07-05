var React = require('react');
var ReactDOM = require('react-dom');

var Checkbox = React.createClass({

    getInitialState: function() {
        return {checked: true}
    },

    handleChecked: function() {

        this.setState({
            checked: !this.state.checked
        })

    },

    render: function() {

        var msg;
        if (this.state.checked) {
            msg = "Checked";
        } else {
            msg = "Unchecked";
        }

        return (
            <div>

                <input defaultChecked={this.state.checked} onChange={this.handleChecked} type="checkbox"/>
                <p>Checkbox is {msg}</p>
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
                <Checkbox/>
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
            comments: [
                'Hello', 'Will Add More', 'Later'
            ],
            newComment: "Set From State"
        }

    },

    addCommentChange: function() {

        var val = this.refs.newCommentText.value;

        this.setState({newComment: val})
    },

    addComment: function(text) {
        var arr = this.state.comments;
        var newComment = this.state.newComment;
        arr.push(newComment);
        this.setState({comments: arr})
    },

    removeComment: function(i) {
        console.log("Removing Comment: " + i);
        var arr = this.state.comments;

        arr.splice(i, 1);

        this.setState({comments: arr})
    },

    UpdateComment: function(newText, i) {
        console.log("Updating Comment");
        var arr = this.state.comments;

        arr[i] = newText;

        this.setState({comments: arr})
    },

    eachComment: function(text, i) {
        return (
            <Comment key={i} index={i} updateCommentText={this.UpdateComment} deleteComment={this.removeComment}>
                {text}
            </Comment>
        )
    },

    render: function() {

        return (
            <div className="container">
                <textarea ref="newCommentText" onChange={this.addCommentChange} defaultValue={this.state.newComment}></textarea>
                <button onClick={this.addComment.bind(null, "Basic Text")} className="btn btn-success">Add New</button>
                {this.state.comments.map(this.eachComment)}

            </div>

        );
    }
});

ReactDOM.render(
    <Board/>, document.getElementById('app'));
