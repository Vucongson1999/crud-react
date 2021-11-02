import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
// style
// import './asset/style/index.css'
 
// utilities from libraries
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
 
// root saga + reducer
import rootReducer from './reducer'
import rootSaga from './saga'
 
// setup
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga)
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
