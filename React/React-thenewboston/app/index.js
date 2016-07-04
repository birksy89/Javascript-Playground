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
      return {
        editing: false
      }
  },


    edit: function() {
        console.log("Editing")

        this.setState({
            editing: true
        })
    },

    remove: function() {
        console.log("Remove")
    },

    save: function() {
      this.setState({
          editing: false
      })
    },

    renderNormal: function(){
      return (
          <div className="panel panel-default" >
              <h1>Hello {this.props.title}</h1>
              <p>{this.props.children}</p>
              <button onClick={this.edit} className="btn btn-warning">Edit</button>
              <button onClick={this.remove} className="btn btn-danger">Remove</button>
              <Checkbox/>
          </div>
      )
    },

    renderForm: function(){
      return (
          <div className="panel panel-default" >
  <h1>Hello {this.props.title}</h1>
              <textarea defaultValue={this.props.children}></textarea>
              <button onClick={this.save} className="btn btn-success">Save</button>

              <Checkbox/>
          </div>
      )
    },

    render: function() {

        if(this.state.editing){
          return this.renderForm();
        }
        else{
          return this.renderNormal();
        }

    }
});

ReactDOM.render(
    <div className="container">
    <Comment title="World!">Hey my name is Andrew</Comment>
    <Comment title="World!">Beans</Comment>
    <Comment title="World!">Tuna</Comment>
</div>, document.getElementById('app'));
