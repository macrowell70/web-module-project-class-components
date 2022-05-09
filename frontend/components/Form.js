import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      itemText: ''
    }
  }

  changeHandler = evt => {
    this.setState({
      itemText: evt.target.value
    })
  }

  submitHandler = evt => {
    evt.preventDefault()
    this.props.addItem(evt, this.state.itemText)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} >
          <input 
            type="text"
            name="item"
            value={this.state.itemText}
            onChange={this.changeHandler}
            />
          <button>Input</button>
          <button>Hide Completed</button> 
        </form>
      </div>
    )
  }
}
