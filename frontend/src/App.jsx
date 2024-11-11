import { useState, useEffect } from 'react'
import './App.css'
import { GoSearch } from "react-icons/go";
import MovieCard from './components/MovieCard'


const API_URL = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}`

const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
  }, [])

  return (
    <div className='flex flex-col w-full items-center bg-slate-900 p-10 min-h-screen gap-4'>
      <h1 className='text-5xl font-bold text-blue-600 mb-5'>Movie Finder</h1>
      <div className='flex flex-row items-center px-4 py-2 min-w-[320px] justify-between border-[1px] border-gray-500 rounded-xl'>
        <input
          type='text'
          placeholder='Eg. Transformers'
          className='outline-none bg-transparent text-white'
          onChange={(e) => setSearch(e.target.value)}
        />
        <GoSearch
          className='text-slate-500 cursor-pointer'
          size={22}
          onClick={() => searchMovies(search)} />
      </div>
      {
        movies?.length > 0 ?
          (
            <div className='grid grid-cols-4 gap-4'>
              {movies.map((movie) => (
                <MovieCard movie={movie}></MovieCard>
              ))}
            </div>
          )
          :
          (<div className='text-white'>No Movies Found</div>)
      }
    </div>
  )
}

export default App
