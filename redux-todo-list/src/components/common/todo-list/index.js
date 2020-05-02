import React from 'react';

import { connect } from 'react-redux';
import * as filterActions from '../../../actions/types';


const TodoList = ({ todos, activeFilter, handlerToggleTodo }) => {
  return (
    <ul>
      {
        getVisibleTodo(todos, activeFilter).map((todo) => (
          <li 
            key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
            onClick={ handlerToggleTodo(todo.id) }>

            { todo.text }
          </li>
        ))
      }
    </ul>
  )
}

const getVisibleTodo = (todos, activeFilter) => {
  const filterItems = {
    [filterActions.SHOW_ALL]: todos,
    [filterActions.SHOW_COMPLETED]: todos.filter((todo) => todo.completed),
    [filterActions.SHOW_ACTIVE]: todos.filter((todo) => !todo.completed)
  }
  return filterItems[activeFilter];
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo,
    activeFilter: state.filter
  }
}

export default connect(mapStateToProps)(TodoList);

/*
 O mapStateToprops, pega as props definidas por você no reducers.
 O Connect pega o objeto retornado do estado, e passa para a função
 ou class via paramentros, por isso Todolist tem o params todos, pois o connect já passa
 o estado para esse parametro. 
*/