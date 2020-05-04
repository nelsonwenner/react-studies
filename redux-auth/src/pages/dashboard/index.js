import React, { Component } from 'react';
import './style.css';

import { connect } from 'react-redux';
import  { logout } from '../../actions/auth';
import CustomButton from '../../components/common/CustomButton'


class Dashboard extends Component {

  handlerClick = () => {
    const { dispatch } = this.props;
    
    dispatch(logout());
  }

  render() {
    return (
      <div>
        <h4 style={{ textAlign: 'center', fontSize: 50 }}>{ `Wellcome ${this.props.userData.username}` }</h4>

        <CustomButton 
          typeBtn="button"
          onClick={ this.handlerClick } 
          className="login-btn btn btn-outlined purple-btn textarea">
          Logout
        </CustomButton>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userData: JSON.parse(state.auth.userData)
  }
}

export default connect(mapStateToProps)(Dashboard);