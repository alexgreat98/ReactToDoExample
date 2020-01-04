import React, {Component} from "react";
import './item-add-form.css'

export default class ItemAddForm extends Component {

  state = {
    label: '',
    important: false
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  /*onImportantChange = (e) => {
    this.setState({
      important: e.target.value
    });
  };*/

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.label.length){
      this.props.onItemAdded({label: this.state.label, important: this.state.important});
      this.setState({
        label: '',
        important: false
      })
    }else{
      console.log('Введите значение')
    }
  };

  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
        />

        {/*<label>
          важный
          <input type="checkbox" value={this.state.important} defaultChecked={this.state.important} onChange={this.onImportantChange}/>
        </label>*/}

        <button className="btn btn-outline-success">
          Add new Item
        </button>
      </form>
    )
  }
}