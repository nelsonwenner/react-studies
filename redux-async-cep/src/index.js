import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import Routes from './routes/routes';
import './style.css';

const store = configureStore();

/* Reducers all */
store.subscribe(() => {
  console.log(`State -> `, store.getState());
});

const jsx = (
  <Provider store={store}>
      <Routes />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));