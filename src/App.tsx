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
import Carousels from "./Carousel/Carousel";


function App() {
  let disp=useDispatch();

    let token=useSelector<RootState>(state => state.rootReducer.token)
    let title=useSelector<RootState>(state => state.rootReducer.titleReducers.title)

  useEffect( ()=>{
      // @ts-ignore
    disp(fetchToken())
  },[])
  return (
    <div className="App ">
        <BrowserRouter>
            <Header/>
            <Carousels/>

            <Container >

                <h4>{title+''}</h4>
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
