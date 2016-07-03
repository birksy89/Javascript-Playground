
var App = React.createClass({


    render: function() {

      var name = "Andrew";
      const test = "Birks";

        return (
            <div>
                <h1>My App</h1>

                <h2>Hi it's {name} {test}!</h2>

            </div>
        );
    }
});

ReactDOM.render(
    <App/>, document.getElementById('data-panel'));
