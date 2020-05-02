import { createStore, combineReducers } from 'redux';

import todoReducer from '../reducers/todo';
import filterReducer from '../reducers/filter';

export default () => {
  return createStore(
    combineReducers({
      todo: todoReducer,
      filter: filterReducer
    })
  );
}
