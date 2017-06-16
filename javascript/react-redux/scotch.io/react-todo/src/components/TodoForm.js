import React from 'react';

const TodoForm = ({addTodo}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      addTodo(input.value);
        input.value = '';
    }}>
      <input className="form-control largetext" ref={node => {
        input = node;
      }} />
      <br />
    </form>
  );
};

export default TodoForm;
