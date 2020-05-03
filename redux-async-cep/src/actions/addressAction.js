import Api from '../services/Api';
import * as actions from './types';


export const updateAddress = (data) => ({ 
  type: actions.UPDATE_ADDRESS, 
  payload: data
});

export const fatching = (bool) => ({ 
  type: actions.FATCHING, 
  isFaching: bool
});

export const fetchAddress = (cep) => async (dispatch, getState) => {
  dispatch(fatching(true));

  const { data } = await Api.ApiCep.get(`/cep.json?code=${ cep }`);

  setTimeout(() => {
    dispatch(fatching(false));
    dispatch(updateAddress(data));
  }, 5000);
}
