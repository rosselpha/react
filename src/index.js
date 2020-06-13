import React from 'react';
import ReactDOM from 'react-dom';

import  'materialize-css/dist/css/materialize.min.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import store from './store';

// const store = createStore(reducers => [], {}, applyMiddleware(reduxTunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


///Users/rosselpharinn/Documents/development/web_development/full_stack_apps/block_media/client/node_modules/materialize-css/dist/css/materialize.min.css