import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
