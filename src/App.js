import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [{
        name: `Sweep house`,
        id: 0,
        completed: false,
      },
      {
        name: `Clean Room`,
        id: 1,
        completed: false,
      }]
    };
  };
  //adds a item to do
  addTodo = todoText => {
    const newTodo = {
      name: todoText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  //changes completion
  toggleDone = id => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      ...this.state,
      todoList: newTodoList
    });
  };

  deleteCompleted = () => {
    const uncompletedTodoes = this.state.todoList.filter(todo => todo.completed === false);
    this.setState({
      ...this.state,
      todoList: uncompletedTodoes
    })

  };

  render() {
    return (
      <div>
        <h2>Here's what you got left to do</h2>
        <TodoList
          todoList={this.state.todoList}
          toggleDone={this.toggleDone}
        />
        <TodoForm addTodo={this.addTodo} />

        
        <button onClick={this.deleteCompleted}>Confirm Completion</button>
      </div>
    );
  }
}

export default App;
