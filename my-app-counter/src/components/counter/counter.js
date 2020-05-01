import React, { Component } from 'react';

const counter = ({count, increment, decrement}) => (
  <div className="container view-port">
    <div className="content-center">
      <h4>{count}</h4>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  </div>
)

export default counter;