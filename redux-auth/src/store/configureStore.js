import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import authReducer from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

export default () => {
  return createStore(
    combineReducers({
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(logger, ReduxThunk))
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