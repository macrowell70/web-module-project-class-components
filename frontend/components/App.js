import React from 'react';
import Form from './Form';
import TodoList from './TodoList';


const initialValues = {
  name: '',
  id: '',
  completed: false
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: initialValues
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
      todo: [...this.state.todo, newItem]
    })
  }

  render() {
    return (
      <div>
        <Form addItem={this.addItem} />
        <TodoList todo={this.state.todo} />
      </div>
    )
  }
}
