import React, {Component} from "react";
import './search-panel.css'


export default class SearchPanel extends Component{

  state = {
    search: ''
  };

  onSearchChange = (e) => {

    const {onSearched} = this.props;

    this.setState({
      search: e.target.value
    });
    onSearched(e.target.value)
  };

  render() {
    return <input
      type="text"
      placeholder="search"
      className="search-panel form-control"
      onChange={this.onSearchChange}
      value={this.state.search}
    />
  }



};