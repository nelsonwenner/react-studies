import { FATCHING, UPDATE_ADDRESS } from '../actions/types';

const initialState = {
  address: '',
  city: '',
  district: '',
  state: '',
  code: '',
  status: 0,
  ok: true,
  isFaching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FATCHING:
      return {
        ...state,
        isFaching: action.isFaching,
      }
    
    case UPDATE_ADDRESS:
      return {
        ...action.payload,
        isFaching: false
      }
    
    default:
      return state;
  }
}