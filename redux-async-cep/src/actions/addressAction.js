import * as actions from './types';


export const updateAddress = (data) => ({ 
  type: actions.UPDATE_ADDRESS, 
  payload: data
});

export const fatching = (bool) => ({ 
  type: actions.FATCHING, 
  isFaching: bool
});
