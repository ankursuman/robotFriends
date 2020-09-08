import React from 'react';
import ReactDOM from 'react-dom';
import {  Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleWare from 'redux-thunk'
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './App'
import { searchRobots, requestRobot} from './reducer';



const logger = createLogger();

const rootReducer = combineReducers({searchRobots,requestRobot})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare,logger));


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
