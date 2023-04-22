import { useState, useEffect } from 'react'
import './App.css'
import { GoSearch } from "react-icons/go";
import MovieCard from './components/MovieCard'


const API_URL = 'https://www.omdbapi.com/?apikey=19691ee7'

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
    <div className='app'>
      <div className='search'>
        <input type='text' placeholder='Search Movies...' onChange={(e) => setSearch(e.target.value)}></input>
        <GoSearch color='white' size={24} onClick={() => searchMovies(search)} />
      </div>
      <div className='container'>
        {
          movies?.length > 0 ?
            (
              movies.map((movie) => (
                <MovieCard movie={movie}></MovieCard>
              ))
            )
            :
            (<div className='empty'>No Movies Found</div>)
        }
      </div>
    </div>
  )
}

export default App
