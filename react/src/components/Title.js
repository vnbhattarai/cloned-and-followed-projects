import React from 'react';

const Title = ({todoCount}) => {
  return (

      <div>
        <h1>To-do App <small>Number of Todos: {todoCount}</small></h1>
      </div>
    
  );
}

export default Title;
