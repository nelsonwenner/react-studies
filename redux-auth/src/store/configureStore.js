import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import authReducer from '../reducers/authReducer';


export default () => {
  return createStore(
    combineReducers({
      auth: authReducer
    }),
    applyMiddleware(logger, ReduxThunk)
  );
}

const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.group(`LOGGER -> ${action.type}`);
  console.log('Current dispatch: ', action);
  console.log('Old state: ', getState());
  const nexAction = next(action);
  console.log('Next state: ', getState());
  console.groupEnd(`LOGGER -> ${action.type}`);
  return nexAction;
}