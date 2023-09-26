import React from 'react';
import styles from './MovieItem.module.css'
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

export type movieType={
    filmId:string,
    filmName:string,
    age:number,
    picture:pictureType,
    times:Array<tymesType>,
}

//https://api.broadway.kg/files/janym.png
const MovieItem = (props:movieType) => {
    return (
    <div>
        <div className={styles.item}>
            <div className={props.age==18?styles.red:styles.green}>
                <span>{props.age}+</span>
            </div>
            <img className={styles.image} src={'https://api.broadway.kg/files/'+props.picture.fileName+props.picture.fileExt}
                 alt=""/>
            <div className={styles.titleWrapper}>
                <h3>{props.filmName}</h3>
            </div>
            {/*<div>{props.times.map((t)=><div>*/}
            {/*    <p>{t.time}</p>*/}
            {/*    <p>{t.getSessionPricesResponse.data.placesTypes.placeType.sum.text.replace('00коп','')}</p>*/}
            {/*</div>)}</div>*/}
        </div>
    </div>
    );
};

export default MovieItem;