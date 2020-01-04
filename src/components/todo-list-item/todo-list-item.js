import React from "react";
import './todo-list-item.css'

const TodoListItem = ({label, important, done, onToggleDone, onToggleImportant, onDeleted}) => {

  let itemName = 'todo-list-item';
  if (done) itemName += ' done';
  if (important) itemName += ' important';

  let importantActive = 'btn btn-outline-success btn-sm';
  importantActive += (important) ? ' active' : '';
  return (
    <span className={itemName}>
      <span
        className="todo-list-item-label"
        onClick={onToggleDone}
      >
      {label}
      </span>
      <button type="button"
              className={importantActive}
              onClick={onToggleImportant}
      >
        <i className="fa fa-exclamation"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={onDeleted}
      >
        <i className="fa fa-trash-o"/>
      </button>
    </span>
  )

};

export default TodoListItem