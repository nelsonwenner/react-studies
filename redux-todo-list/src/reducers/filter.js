import { SET_VISIBILITY_FILTER, SHOW_ALL } from '../actions/types';

export const initialState = SHOW_ALL;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
  
    default:
      return state;
  }
}