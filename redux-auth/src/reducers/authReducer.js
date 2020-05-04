import * as actions from '../actions/auth/types';

const initialState = {
  uid: '',
  'name': ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...action.payload
      }
    
    case actions.LOGOUT:
      return {
        ...state
      }
    
    default:
      return state;
  }
}