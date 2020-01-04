import React, {Component} from "react";
import './app-header.css'

export default class AppHeader extends Component {


  render() {

    const {toDo, done} = this.props;

    return (
      <div className="app-header d-flex">
        <h1>My Todo list</h1>
        <h2>{toDo} more todo, {done} done</h2>
      </div>
    )
  }


};
