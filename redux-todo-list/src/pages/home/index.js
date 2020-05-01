import React, { Component } from 'react';
import './style.css';

import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../../actions/index';
import Form from '../../components/common/form/index';
//import TodoList from '../../components/common/todo-list';
//import Filter from '../../components/common/filter';


class HomeContainer extends Component {

  constructor() {
    super();

    this.handlerAddTodo = this.handlerAddTodo.bind(this);
  }

  handlerAddTodo(event) {
    event.preventDefault();

    this.props.dispatch(addTodo(event.target.inputDataForm.value));
    event.target.inputDataForm.value = '';
  }

  handlerToggleTodo(id) {
    this.props.dispatch(toggleTodo(id));
  }

  render() {
    console.log(this.props)
    const { todos } = this.props;

    return (
      <div>
        <Form handlerAddTodo={this.handlerAddTodo} />

        <ul>
          {
            todos.map((todo) => (
              <li 
                key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
                onClick={() => this.handlerToggleTodo(todo.id)}>

                { todo.text }
              </li>
            ))
          }
        </ul>

        <div>
          <h4>Show</h4>
          <a href=''>All</a> | <a href=''>Finalized</a> | <a href=''>To do</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo,
    filters: state.filter
  }
}

export default connect(mapStateToProps)(HomeContainer);