import React, { Component } from 'react';
import './style.css';

import SearchCep from '../../components/common/search-cep';
import { fetchAddress } from '../../actions/addressAction';
import NProgress from 'react-nprogress'
import { connect } from 'react-redux';
import 'react-nprogress/nprogress.css';


class HomeContainer extends Component {

  constructor() {
    super();
  }

  handlerSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    
    dispatch(fetchAddress(event.target.cep.value.toString()));
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: 120 }}>

        <SearchCep
          handlerSubmit={ this.handlerSubmit }  
        />

      </div>
    )
  }
}

export default connect()(HomeContainer);