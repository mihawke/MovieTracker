import React from 'react'
import './styles/MovieCard.css'

const MovieCard = ({movie}) => {
    return (
        <div className='card'>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <p>{movie.Title}</p>
            </div>
        </div>
    )
}

export default MovieCard