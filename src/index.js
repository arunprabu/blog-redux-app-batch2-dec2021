import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // integrating bootstrap css
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // integrating bootstrap js
import App from './App';
import reportWebVitals from './reportWebVitals';

// Step 1: Setup the the Redux Store here
import { createStore, applyMiddleware } from 'redux';

// Step 14: Let's add middleware to work with async actions.
// npm i redux-logger redux-thunk
import logger from 'redux-logger'; // npm i redux-logger 
import thunk from 'redux-thunk';  //npm i redux-thunk

// Step 6:
import { Provider } from 'react-redux'; 
/* Definition: The Provider component uses something 
  called as React Context which allows you to pass the 
  store object to any components 
  that needs to access it without the need to pass props.
  Provider should be imported from react-redux 
*/

// Step 5: let’s import the combinedReducer's data
//and pass it to the store as an argument.
import rootReducer from './reducers'; 

// Step 2: Exec createStore() method and save it in a variable
const store = createStore(rootReducer, applyMiddleware(thunk, logger)); //this needs a special param called 'reducer' 
// We have combined the reducers --- so, passing the rootReducer to the createStore() fn.
console.log(store); // store has dispatch, subscribe properties

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>  {/* this is how we have to provide store data to the app --> */} 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
