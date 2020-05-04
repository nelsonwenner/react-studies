import { isAuth, getUser, removeTokenAndUser, addToken } from '../guard/auth';
import * as actions from '../actions/auth/types';

const initialState = {
  isAuthenticated: isAuth(),
  userData: getUser()
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      addToken(action.payload);
      return {
        isAuthenticated: isAuth(),
        userData: getUser()
      }
      
    case actions.LOGOUT:
      removeTokenAndUser();
      return {
        ...state
      }
    
    default:
      return state;
  }
}