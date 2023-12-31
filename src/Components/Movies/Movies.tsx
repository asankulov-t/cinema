import React, {memo, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Store/Store";
import {fetchData} from "../../Store/GetMoviesSlice";
import MovieItem from "../MovieItem/MovieItem";
import {Col, Row} from "react-bootstrap";

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
    return (
     <div>

             {
                 // @ts-ignore
                 movies && movies.map((it) => <MovieItem
                 duration={it.duration}
                         key={it.filmId}
                         filmId={it.filmId}
                         filmName={it.filmName}
                         picture={it.picture}
                         times={it.times}
                         age={it.age}

                     />
                 )}

     </div>
    );
}

export default memo(Movies);