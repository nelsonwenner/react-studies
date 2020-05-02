import React from 'react';

const Form = ({ handlerAddTodo }) => {
  return (
    <form onSubmit={handlerAddTodo}>
      <input type="text" name="inputDataForm"/>
      <button type="submit">Adding</button>
    </form>
  )
}

export default Form;