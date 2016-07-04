var React = require('react');
var ReactDOM = require('react-dom');

var Movie = React.createClass({

    render: function() {

        return (
            <div>
                <hr/>
                <h3>{this.props.name}</h3>
                <h4>{this.props.genre}</h4>
            </div>
        );
    }
})

var Header = React.createClass({

    render: function() {

        return (
            <div>
                <h1>Hello {this.props.title}</h1>
                <Movie name="Titanic" genre="Romance"/>
                <Movie name="Batman" genre="Action"/>
                <Movie name="Oceans 11" genre="Crime"/>
            </div>
        )
    }
});

ReactDOM.render(
    <Header title="World!"/>, document.getElementById('app'));
