var React = require('react');
var transparentBg = require('../styles/').transparentBg;
//Router stuff
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function() {
        return (

            <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
                <div>Hello from Home!</div>
                <h1>Github Battle</h1>
                <p>Hello fancy stuff...
                </p>
                <Link to="/playerOne">
                    <button type='button' className="btn btn-lg btn-success">Get Started</button>
                </Link>

            </div>
        )
    }
});

module.exports = Home;
