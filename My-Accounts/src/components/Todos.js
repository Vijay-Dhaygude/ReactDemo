import React, { Component } from 'react';
import TodoItem from './TodoItem';
import '../css/Table.css';


class Todos extends Component {

  render() {
      let todoItems;
      if(this.props.todos)
      {
        todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key = {todo.title} todo={todo} />
          );
      });
    }
    return (

      <div className="Todos">
      <h3>Todo List</h3>
      {todoItems}
      </div>


    );

  }

}


export default Todos;