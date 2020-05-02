import React, { Component } from 'react';
import './style.css';

import { connect } from 'react-redux';

import SearchCep from '../../components/common/search-cep';
import Api from '../../services/Api';


class HomeContainer extends Component {

  constructor() {
    super();

    this.state = {
      address: '',
      city: '',
      district: '',
      state: '',
      code: '',
      status: 0,
      ok: true,
      isFaching: false
    }
  }

  async componentDidMount() {
  
  }

  handlerSubmit = async (event) => {
    event.preventDefault();
    this.setState({isFaching: true});
    const cep = event.target.cep.value.toString();
    const { data } = await Api.ApiCep.get(`/cep.json?code=${ cep }`);

    setTimeout(() => {
      this.setState({isFaching: false});
      this.setState(data);
    }, 5000);
   
    //event.target.cep.value = '';
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