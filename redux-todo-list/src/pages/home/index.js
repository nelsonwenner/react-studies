import React, { Component } from 'react';
import './style.css';

import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../../actions/todo';
import { setFilter } from '../../actions/filter';

import Form from '../../components/common/form';
import TodoList from '../../components/common/todo-list/index';
import Filter from '../../components/common/filter';


class HomeContainer extends Component {

  constructor() {
    super();

    this.handlerAddTodo = this.handlerAddTodo.bind(this);
    this.handlerToggleTodo = this.handlerToggleTodo.bind(this);
    this.handlerFilterTodo = this.handlerFilterTodo.bind(this);
  }

  handlerAddTodo(event) {
    event.preventDefault();

    this.props.dispatch(addTodo(event.target.inputDataForm.value));
    event.target.inputDataForm.value = '';
  }

  handlerToggleTodo = (id) => (event) => {
    event.preventDefault();

    this.props.dispatch(toggleTodo(id));
  }

  handlerFilterTodo = (filter) => (event) => {
    event.preventDefault();

    this.props.dispatch(setFilter(filter));
  }

  render() {
    return (
      <>

        <Form handlerAddTodo={ this.handlerAddTodo } />
        <TodoList handlerToggleTodo={ this.handlerToggleTodo } />
        <Filter handlerFilter={ this.handlerFilterTodo } />
        
      </>
    )
  }
}

export default connect()(HomeContainer);