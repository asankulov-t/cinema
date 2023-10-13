import React, {useState} from 'react';
import styles from './MovieItem.module.css'
import axios from "axios";
import {GridRow} from "semantic-ui-react";
import {Col, Row} from "react-bootstrap";
type pictureType={
    id:number,
    fileName:string,
    fileExt:string
}


type Sum= {
    sum:number,
    price:number,
    addPrice:number,
    addName:string,
    comissionSum:number,
    text:string
}
type PlaceType ={
    sum: Sum
}
type PlacesTypes={
    placeType: PlaceType
}

type Data= {
    placesTypes: PlacesTypes
}

type getSessionPricesResponseType={
    data:Data
}
type tymesType={
    date:string,
    formatContent:string,
    time:string,
    hallName:string,
    getSessionPricesResponse:getSessionPricesResponseType
}
type duratinType={
    duration:string
    text:string
}
export type movieType={
    filmId:string,
    filmName:string,
    age:number,
    picture:pictureType,
    times:Array<tymesType>,
    remark?:string,
    duration:duratinType,
}

const MovieItem = (props:movieType) => {

    return (
    <Row className={styles.row}>
        <Col lg={3} sm={3}>
            <img className={styles.image}
                 src={'https://api.broadway.kg/files/'+props.picture.fileName+props.picture.fileExt}
                 alt=""/>
        </Col>
        <Col lg={9} sm={9}>
            <div>
                <h3>{props.filmName.slice(0,30)}</h3>
                <p className={styles.duration}>{props.duration.text}</p>
                <p className={styles.sessions}>Сеансы</p>
                <div className={styles.times}>{props.times.map((t)=><div className={styles.priceCard}>
                    <p>{t.time}</p>
                    <p>{t.getSessionPricesResponse.data.placesTypes.placeType.sum.text.replace('00коп','')}</p>
                </div>)}
                </div>
            </div>
        </Col>
    </Row>
    );
};

export default MovieItem;