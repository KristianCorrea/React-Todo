import React from 'react';
import './Todo.css';

const Todo = function(props) {
  console.log(props.item)
  return (
    <div
      onClick={() => props.toggleDone(props.item.id)}
      className={props.item.completed ? ' completed' : ''}
      
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
