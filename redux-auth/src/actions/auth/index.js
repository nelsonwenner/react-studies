import Api from '../../services/Api';
import * as actions from './types';


export const logout = () => ({ 
  type: actions.LOGOUT
});

export const userData = (response) => ({ 
  type: actions.LOGIN, 
  payload: response
});

export const startLogin = (email, password) => async (dispatch, getState) => {

  const { data } = await Api.ApiAuth.post('/api-token', {email: email, password: password});

  dispatch(userData(data));
}
