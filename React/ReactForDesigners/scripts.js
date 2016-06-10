var TweetBox = React.createClass({
    getInitialState: function() {
        return {
            text: "",
            remainingChars: "Remaining Characters: " + 140,
            photoAdded: false
        }
    },
    handleChange: function(event) {
        console.log(event.target.value);
        this.setState({
            text: event.target.value,
            remainingChars: 140 - event.target.value.length
        });
    },
    togglePhoto: function(event) {
        this.setState({
            photoAdded: !this.state.photoAdded
        });
    },
    render: function() {
        return (
            <div className="well clearfix">
                <textarea className="form-control" onChange={this.handleChange}></textarea>
                <br/>
                <span>{this.state.remainingChars}</span>
                <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0}>Tweet</button>
                <button className="btn btn-default pull-right" onClick={this.togglePhoto}>
                    {this.state.photoAdded
                        ? "✓ Photo Added"
                        : "Add Photo"}
                </button>
                <h1>{this.state.text}</h1>
            </div>

        );

    }
})

ReactDOM.render(
    <TweetBox/>, document.getElementById('container'));
