import React, {useEffect, useState} from 'react';
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
import 'semantic-ui-css/semantic.min.css'
import {Container} from "react-bootstrap";


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
            <Container >
                <Routes>
                    <Route path={'/afisha'||'/cinema'} element={<Movies token={token+''}/>}/>
                    <Route path={'/repertuar'} element={<Sessions/>}/>
                    <Route path={'/discount'} element={<Discount/>}/>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
                <Footer/>
            </Container>
        </BrowserRouter>
    </div>
  );
}

export default App;
