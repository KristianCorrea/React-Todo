import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: '',
    };
  }

  changeHandler = e => {
    this.setState({
      todoText: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({ todoText: '' })
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          type="text"
          name="todoText"
          value={this.state.todoText}
          onChange={this.changeHandler}
        />
        <button type="submit">+</button>
      </form>
    );
  }
}

export default TodoForm;
