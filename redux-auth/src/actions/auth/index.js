import * as actions from './types';
import Api from '../../services/Api';


export const userData = (userInfo) => ({ 
  type: actions.LOGIN, 
  payload: userInfo
});

export const startLogin = (email, password) => async (dispatch, getState) => {

  const { data } = await Api.ApiAuth.post('/api-token', {email: email, password: password});

  dispatch(userData({uid: data.id, name: data.username}));
}