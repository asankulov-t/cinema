import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../Store/Store";
import SessionItem from "./SessionItem/SessionItem";

const Sessions = () => {
    let movies = useSelector<RootState>(state => state.rootReducer.movies)
    return (
        <div>
            {
                // @ts-ignore
                movies && movies.map((t) => <SessionItem
                    key={t.filmId}
                    filmId={t.filmId}
                    filmName={t.filmName}
                    age={t.age}
                    picture={t.picture}
                    times={t.times}
                    remark={t.remark}/>
                )
            }
        </div>
    );
};

export default Sessions;