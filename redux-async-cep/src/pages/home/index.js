import React, { Component } from 'react';
import './style.css';

import SearchCep from '../../components/common/search-cep';
import { updateAddress, fatching } from '../../actions/addressAction';
import NProgress from 'react-nprogress'
import { connect } from 'react-redux';
import Api from '../../services/Api';
import 'react-nprogress/nprogress.css';


class HomeContainer extends Component {

  constructor() {
    super();
  }

  handlerSubmit = async (event) => {
    event.preventDefault();

    const { dispatch } = this.props;
   
    NProgress.start();

    dispatch(fatching(true));

    const cep = event.target.cep.value.toString();
    
    const { data } = await Api.ApiCep.get(`/cep.json?code=${ cep }`);
    
    setTimeout(() => {
      dispatch(fatching(false));
      NProgress.done();
      dispatch(updateAddress(data));
    }, 5000);
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: 120 }}>

        <SearchCep
          { ...this.state }
          handlerSubmit={ this.handlerSubmit }  
        />

      </div>
    )
  }
}

export default connect()(HomeContainer);