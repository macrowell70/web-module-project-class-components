import React from 'react';
import Form from './Form';
import TodoList from './TodoList';


const todos = [{
  name: '',
  id: 1234,
  completed: false
}]


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  addItem = (evt, item) => {
    evt.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newItem]
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <Form addItem={this.addItem} />
      </div>
    )
  }
}
