var TweetBox = React.createClass({
    getInitialState: function() {
        return {
          text: "",
        remainingChars: "Remaining Characters: " + 140}
    },
    handleChange: function(event) {
        console.log(event.target.value);
        this.setState({
          text: event.target.value,
          remainingChars: 140 - event.target.value.length
        }
        );
    },
    render: function() {
        return (
            <div className="well clearfix">
                <textarea className="form-control" onChange={this.handleChange}></textarea>
                <br/>
                <span>{this.state.remainingChars}</span>
                <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0}>Tweet</button>

                <h1>{this.state.text}</h1>
            </div>

        );

    }
})

ReactDOM.render(
    <TweetBox/>, document.getElementById('container'));
