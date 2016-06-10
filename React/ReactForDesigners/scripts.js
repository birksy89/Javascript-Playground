var TweetBox = React.createClass({
    getInitialState: function() {
        return {
            text: "",
            remainingChars:"Number of Characters Remaining",
            photoAdded: false
        }
    },
    handleChange: function(event) {
        console.log(event.target.value);
        this.setState({
            text: event.target.value

        });
    },
    togglePhoto: function(event) {

      console.log(this.state.photoAdded);

        this.setState({
            photoAdded: !this.state.photoAdded
        });
    },
    remainingChars: function() {
        if (this.state.photoAdded) {
            return 140 - 23 - this.state.text.length;
            console.log(140 - 23 - this.state.text.length);
        } else {
            return 140 - this.state.text.length;
            console.log(140 - this.state.text.length);
        }
    },
    render: function() {
        return (
            <div className="well clearfix">
                <textarea className="form-control" onChange={this.handleChange}></textarea>
                <br/>
                <span>{this.remainingChars()}</span>
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
