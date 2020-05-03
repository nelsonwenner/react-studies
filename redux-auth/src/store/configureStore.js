import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

//import AddressReducer from '../reducers/addressReducer';


export default () => {
  return createStore(
    combineReducers({
      
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