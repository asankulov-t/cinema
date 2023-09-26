import React, {memo, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Store/Store";
import {fetchData} from "../../Store/GetMoviesSlice";
import MovieItem from "../MovieItem/MovieItem";
import style from './Movies.module.css'

type moviesType = {
    token: string
}

const Movies = (props: moviesType) => {
    let disp = useDispatch();
    let movies = useSelector<RootState>(state => state.rootReducer.movies)
    useEffect(() => {
        // @ts-ignore
        disp(fetchData(props.token && props.token))
    }, [props.token])
    console.log(movies)
    return (
     <div className={style.container}>
         <h2 className={style.title}>Расписание на сегодня</h2>
         <div className={style.movies}>
             {
                 // @ts-ignore
                 movies && movies.map((it) => <MovieItem
                     key={it.filmId} filmId={it.filmId}
                     filmName={it.filmName}
                     picture={it.picture}
                     times={it.times}
                    age={it.age}

                 />)}
         </div>
     </div>
    );
}

export default memo(Movies);