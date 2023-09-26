import React, {memo, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Store/Store";
import {fetchData} from "../Store/GetMoviesSlice";


type moviesType={
    token:string
}

const Movies = (props:moviesType) => {
    let disp=useDispatch();
    let movies=useSelector<RootState>(state => state.rootReducer.movies)
    useEffect(()=>{
        // @ts-ignore
        disp(fetchData(props.token&&props.token))
    },[props.token])
    console.log(movies)
    return (
        <div>
            <h3>Hello</h3>
        </div>
    );
}

export default memo(Movies);