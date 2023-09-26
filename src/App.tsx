import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchToken} from "./Store/GetTokenSlice";
import {useDispatch, useSelector } from 'react-redux';
import {RootState} from "./Store/Store";
import Header from "./Components/Header/Header";
import Movies from "./Components/Movies/Movies";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  let disp=useDispatch();
  let token=useSelector<RootState>(state => state.rootReducer.token)

  useEffect( ()=>{
      // @ts-ignore
    disp(fetchToken())
  },[])


  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/repertuar'} element={<Movies token={token+''}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
