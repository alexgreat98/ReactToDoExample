import React from "react";
import './item-status-filter.css'

const filterButtons = [
  {name: 'all', label: 'All'},
  {name: 'active', label: 'Active'},
  {name: 'done', label: 'Done'}
];

const ItemStatusFilter = ({filter, onFilterChange}) => {

  const buttons = filterButtons.map(({name, label}) => {

    const className = 'btn ' + (name === filter ? 'btn-info' : 'btn-outline-secondary');

    return <button
      onClick={() => onFilterChange(name)}
      key={name} type="button" className={className}>{label}</button>
  });


  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
};


export default ItemStatusFilter