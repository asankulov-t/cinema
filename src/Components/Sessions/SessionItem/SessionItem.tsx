import React from 'react';
import {movieType} from "../../MovieItem/MovieItem";
import style from './SessionItem.module.css'
const SessionItem = (props:movieType) => {
    return (
        <div className={style.sessionBlock}>
            <div>
                <img src={'https://api.broadway.kg/files/'+props.picture.fileName+props.picture.fileExt} alt=""/>
            </div>
            <div className={style.info}>
                <h3>{props.filmName}</h3>
                <p>{props.remark}</p>
                <div>
                    {props.times.map((t)=><div >
                        <span className={style.timeWrapper}>{t.time}</span>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default SessionItem;