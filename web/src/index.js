import React from 'react';
import ReactDOM from 'react-dom';
import { getPersistor } from '@rematch/persist';
import store from './rdx/store';
// import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import App from './ui/App';

import './index.css';

const persistor = getPersistor();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// reportWebVitals();
