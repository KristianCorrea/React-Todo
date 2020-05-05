import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.todoList.map((item, index) => (
        <Todo  item={item} 
               key={index} 
               toggleDone={props.toggleDone} 
        />
      ))}
    </div>
  );
};

export default TodoList;
