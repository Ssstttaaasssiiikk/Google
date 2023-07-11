import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux';
import { Provider } from 'react-redux';


const defulteState = {
    counter: 0
}

const reduser = (state = defulteState, action: any) => {
    switch(action.type){
        case 'PLUS':
            return{...state, counter: state.counter + action.payload}
        case 'MINUS':
            return{...state, counter: state.counter - action.payload}
        default: 
            return state 
    }
}

const store = createStore(reduser);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


