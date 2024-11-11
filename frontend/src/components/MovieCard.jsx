import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <div className="flex flex-col gap-2 p-4 rounded-lg overflow-hidden shadow-lg bg-white hover:scale-[1.05]">
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'http://via.placeholder.com/400'}
                    alt={movie.Title}
                    className="w-auto h-[350px] object-cover rounded-md"
                />
                <p className="text-sm text-gray-500">{movie.Year}</p>
                <p className="text-lg font-semibold text-gray-800 truncate">{movie.Title}</p>
        </div>
    )
}

export default MovieCard