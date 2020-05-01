import React, { Component } from 'react';
import './style.css';

import { connect } from 'react-redux';
import { addTodo } from '../../actions/index';


class HomeContainer extends Component {

  constructor() {
    super();

    this.handlerAddTodo = this.handlerAddTodo.bind(this);
  }

  handlerAddTodo(event) {
    event.preventDefault();

    this.props.dispatch(addTodo(event.target.inputDataForm.value));
  }

  render() {

    const { todos } = this.props;

    return (
      <div>
        <form onSubmit={this.handlerAddTodo}>
          <input type="text" name="inputDataForm"/>
          <button type="submit">Adding</button>
        </form>

        <ul>
          {
            todos.map((todo) => (
              <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
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
    todos: state
  }
}

export default connect(mapStateToProps)(HomeContainer);