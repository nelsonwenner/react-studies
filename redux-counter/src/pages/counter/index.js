import React, { Component } from 'react';
import './style.css';

import Counter from '../../components/counter/counter';
import { connect } from 'react-redux';
import { incr, decr } from '../../actions';


class CounterContainer extends Component {

  constructor() {
    super();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.dispatch(incr());
  }

  decrement() {
    this.props.dispatch(decr());
  }
  
  render() {
    return (
      <Counter count={this.props.counter} increment={this.increment} decrement={this.decrement} />
    )
  }
}

const mapProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapProps)(CounterContainer);