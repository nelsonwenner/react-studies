import React, { Component } from 'react';
import './style.css';

import NProgress from 'react-nprogress';
import Spinner from 'react-spinkit';
import { connect } from 'react-redux';
import 'react-nprogress/nprogress.css';
import CustomButton from '../../components/common/CustomButton/index';
import CustomInput from '../../components/common/CustomInput/index';
import logo from '../../assets/logo.svg';
import 'react-nprogress/nprogress.css';
import { startLogin } from '../../actions/auth/index';
import redirect from '../../routes/redirect';


class Login extends Component {

  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      loading: false,
      error: null
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value});
  }
  
  onSubmit = (event) => { 
    event.preventDefault();

    const { email, password } = this.state;
    const { dispatch } = this.props;

    if(!email || !password) {
      this.setState(() => ({ error: 'Fill in all the fields' }));
    } else {
      NProgress.start();
      dispatch(startLogin(email, password))
      .then(() => {
        this.onLoginSuccess();
        NProgress.done();
        
        redirect('/dashboard');
        
      })
      .catch(() => this.onLoginFailure());
    }
  }
  
  onLoginFailure() {
    this.setState({ loading: false, error: "Authentication failed" });
    NProgress.done();
  }

  onLoginSuccess() {
    this.setState({ loading: false, email: '', password: '' });
    NProgress.done();
  }

  render() {
    const {email, password, error, loading} = this.state;
    return (
      <div className="container login">
        <div className="center aye">
          <div className="card-body">
            <img className="logo" src={logo}></img>
            <form onSubmit={ this.onSubmit }>
              <div>
                <CustomInput 
                  classs="input01" 
                  icon="email" 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  autoComplete="on"
                  value={ email } 
                  onChange={ this.handleChange }
                />

                <CustomInput 
                  classs="input02" 
                  icon="password" 
                  type="password" 
                  name="password" 
                  placeholder="Enter your password" 
                  autoComplete="on"
                  value={ password } 
                  onChange={ this.handleChange }
                />
              </div>

              {
                error && (
                  <div style={{ paddingTop: 10 }}>
                    <p style={{color: 'red'}}>{error}</p>
                  </div>
                )
              }

              {
                loading ? (
                  <div className="center-text">
                    <Spinner name="pacman" />
                  </div>

                ) : (
                  <CustomButton 
                    typeBtn="submit" 
                    className="login-btn btn btn-outlined purple-btn textarea">
                    Login
                  </CustomButton>
                    
                )
              }
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Login);