import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchToken} from "./Store/GetTokenSlice";
import {useDispatch, useSelector } from 'react-redux';
import {RootState} from "./Store/Store";
import Header from "./Components/Header/Header";
import Movies from "./Components/Movies/Movies";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Sessions from "./Components/Sessions/Sessions";
import Discount from "./Components/Discount/Discount";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  let disp=useDispatch();
  let token=useSelector<RootState>(state => state.rootReducer.token)

  useEffect( ()=>{
      // @ts-ignore
    disp(fetchToken())
  },[])


  return (
    <div className="App ">
        <BrowserRouter>
            <Header/>
            <div className={'container'}>
                <Routes>
                    <Route path={'/afisha'} element={<Movies token={token+''}/>}/>
                    <Route path={'/repertuar'} element={<Sessions/>}/>
                    <Route path={'/discount'} element={<Discount/>}/>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
                <Footer/>
            </div>

        </BrowserRouter>
    </div>
  );
}

export default App;
