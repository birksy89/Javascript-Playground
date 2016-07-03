var TodoList = React.createClass({
    render: function() {
        var createItem = function(item, index) {
            return <li key={item.id}>{item.text} {index} </li>;
        };

        return (
            <div>
                <ul>{this.props.items.map(createItem)}
                </ul>
                <button onClick={this.props.removeAction}>Remove</button>
            </div>
        )
    }
});
var TodoApp = React.createClass({
    getInitialState: function() {
        return {items: [], text: ''};
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([
            {
                text: this.state.text,
                id: Date.now()
            }
        ]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },

    removeItem: function() {
      var currentItems = this.state.items;
      console.log(currentItems);
      console.log("size:" + currentItems.length);

      currentItems.splice(0, 1);
      console.log(currentItems);
      console.log("size:" + currentItems.length);

        var newItems = currentItems;
        var newText = '';

        this.setState({items: newItems, text: newText});
    },

    render: function() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} removeAction={this.removeItem}/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text}/>
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <TodoApp/>, document.getElementById('data-panel'));
