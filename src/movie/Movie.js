import React, { useState } from 'react';
import movieList from '../assets/api/moviedata'
import MovieList from './MovieList';

import './style.css'

const Movie = () => {
    const [data, setData] = useState( movieList )

    const onDel = ( id )  => {        
        setData( data.filter( item => item.no !== id ))
    }
    return (
        <div className="wrap">
            <MovieList data={data}  onDel={onDel}/>
        </div>
    );
};

export default Movie;