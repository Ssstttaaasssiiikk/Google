import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Google } from './pages/Google';
import {Counter} from './pages/Counter';
import { Navigation } from './components/Nav';

function App() {
  return (
    <>
      <Routes>
        <Route  path='/' element = {<Google />} ></Route>
        <Route  path='/counter' element = {<Counter />} ></Route>
      </Routes>
      
    </>
  );
}

export default App;
