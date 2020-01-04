import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import './app.css'

export default class App extends Component {

  startId = 10;

  state = {
    items: [
      this.createTodoItem({label: 'Learn React'}),
      this.createTodoItem({label: 'Build awesome app', important: true}),
      this.createTodoItem({label: 'Drink Coffee'}),
    ],
    search: '',
    filter: 'all'
  };

  searchItems = (items, search) => {
    if (search.length === 0) return items;

    return items.filter(({label}) => {
      return label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  itemsItems = (items, filter) => {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item)=> !item.done);
      case 'done':
        return items.filter((item)=> item.done);
      default:
        return items;


    }
  };

  onSearchChange = (search) => {
    this.setState({search})
  };

  onFilterChange = (filter) => {
    this.setState({filter})
  };

  createTodoItem({label, important}) {

    return {
      label,
      important: important,
      done: false,
      id: this.startId++
    }
  }

  deleteItem = (id) => {
    this.setState(({items}) => {

      const idx = items.findIndex((el) => el.id === id);

      const newItems = [...items.slice(0, idx), ...items.slice(idx + 1)];

      return {
        items: newItems
      }
    });
  };

  addItem = ({label, important}) => {
    this.setState(({items}) => {

      const newitems = [...items, this.createTodoItem({label, important})];

      return {
        items: newitems
      }
    })
  };

  toggleProperty = (arr, id, propName) => {

    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]};

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  toggleImportant = (id) => {
    this.setState(({items}) => {
      return {
        items: this.toggleProperty(items, id, 'important')
      }
    })
  };

  toggleDone = (id) => {

    this.setState(({items}) => {
      return {
        items: this.toggleProperty(items, id, 'done')
      }
    })
  };


  render() {
    const {items, search, filter} = this.state;
    const doneCount = items.filter((item) => {
      return item.done === true;
    }).length;
    const itemCount = items.length - doneCount;
    const visibleItems = this.itemsItems(this.searchItems(items, search), filter);
    return (
      <div className="todo-app">
        <AppHeader toDo={itemCount} done={doneCount}/>
        <div className="top-panel d-flex">
          <SearchPanel onSearched={this.onSearchChange}/>
          <ItemStatusFilter onFilterChange={this.onFilterChange} filter={filter}/>
        </div>
        <TodoList todos={visibleItems}
                  onDeleted={this.deleteItem} onToggleImportant={this.toggleImportant}
                  onToggleDone={this.toggleDone}/>
        <ItemAddForm onItemAdded={this.addItem}/>
      </div>
    )
  }
};