import { createStore } from 'redux';

import todoReducer from '../reducers/index';

export default () => {
  return createStore(todoReducer);
}
