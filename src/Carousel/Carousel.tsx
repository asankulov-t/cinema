import React from 'react';
import style from './Carousel.module.css'

import Carousel from 'react-bootstrap/Carousel';
import {useSelector} from "react-redux";
import {RootState} from "../Store/Store";
import {Container} from "react-bootstrap";
//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
const Carousels = () => {
    let movies = useSelector<RootState>(state => state.rootReducer.movies)
    console.log(movies)
    return (
       <Container>
           <Carousel className={style.wrapper} fade={true}>

               {
                   // @ts-ignore
                   movies && movies.map((t) => <Carousel.Item key={t.filmName}>
                       <div className={style.carouselWrapper}>
                           <img src={"https://api.broadway.kg/files/" + t.picture.fileName + t.picture.fileExt} alt=""/>
                           <Carousel.Caption className={style.caption}>
                               <h3>{t.filmName}</h3>
                               <p>{t.remark}</p>
                           </Carousel.Caption>
                       </div>
                   </Carousel.Item>)

               }
           </Carousel>
       </Container>
    );
}

export default Carousels;