import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as SecondPage from './SecondPage'
import { BrowserRouter, Route, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to = '/secondPage'>Second_Page</Link>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


