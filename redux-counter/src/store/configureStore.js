import { createStore } from 'redux';
import counterReducer from '../reducers/counter';


export default () => {
  return createStore(counterReducer);
}