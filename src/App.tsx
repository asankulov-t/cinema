import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchToken} from "./Store/GetTokenSlice";
import {RootState} from "./Store/Store";
import {useDispatch, useSelector } from 'react-redux';

function App() {
  let disp=useDispatch();
  useEffect( ()=>{
      // @ts-ignore
    disp(fetchToken())
  },[])

  let token=useSelector<RootState>(state => state.rootReducer.token)

  console.log(token)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
