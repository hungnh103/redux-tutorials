import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
