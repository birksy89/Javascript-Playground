import React, {Component} from 'react';

import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            quote: "Loading...",
            author: "Author..."
        };
    }

    componentDidMount() {
        this.getAJAX()
    }

    getAJAX() {

        var config = {
            headers: {
                "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };

        axios.get('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies', config).then(function(response) {

            var data = response.data;
            return data;
        }).then(data => {
            console.log(data);
            this.setState({quote: data.quote, author: data.author});
        }).catch(function(error) {
            console.log(error);
        });

    }

    render() {

        var tweetHref = "https://twitter.com/intent/tweet?text=" + encodeURI(this.state.quote);

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to My React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload.

                </p>
                <h1>{this.state.quote}</h1>
                <h2>{this.state.author}</h2>
                <a href="#" onClick={this.getAJAX.bind(this)}>Load a Quote</a>

                <a className="twitter-share-button" href={tweetHref}>
                    Tweet</a>

            </div>
        );
    }
}

export default App;
