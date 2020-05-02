import React, { Component } from 'react';
import './style.css';

import { connect } from 'react-redux';

import SearchCep from '../../components/common/search-cep'


class HomeContainer extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: 120 }}>
        <SearchCep />
      </div>
    )
  }
}

export default connect()(HomeContainer);