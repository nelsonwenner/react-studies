import * as actions from './types';

export const setFilter = (filter) => ({ 
  type: actions.SET_VISIBILITY_FILTER, 
  payload: { 
    filter: filter 
  } 
});