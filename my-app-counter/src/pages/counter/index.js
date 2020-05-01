import React, { Component } from 'react';
import './style.css';

import Counter from '../../components/counter/counter';

class CounterContainer extends Component {

  constructor() {
    super();

    this.state = {
      counter: 0
    }
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      counter: this.state.counter += 1
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter -= 1
    })
  }

  render() {
    const { counter } = this.state;

    return (
      <Counter count={counter} increment={this.increment} decrement={this.decrement} />
    )
  }
}

export default CounterContainer;