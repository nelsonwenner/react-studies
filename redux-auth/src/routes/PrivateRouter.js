import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouter = ({ isLoggedin, component: Component, ...rest }) => {

  return ( 
    <Route { ...rest } render={(props) => (
      
      isLoggedin ? (

        <Component { ...props } />

      ) : (

        <Redirect to="/" />

      )

      )}
    />
  )

}

const mapStateToProps = (state) => {
  return {
    isLoggedin: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(PrivateRouter);