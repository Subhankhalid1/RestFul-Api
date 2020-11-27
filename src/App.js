import React, { useEffect, useState } from 'react';
import MoviesListItems from './components/MoviesListItems'
import SearchBar from './components/SearchBar'
import './App.css';
// import AddFavList from './components/AddFavList';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {

    const getMoviesRequest = async (searchValue) => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e7783ed7&s=war`
      const response = await fetch(url);
      const data = await response.json()
      console.log(data)
      if (data.Search) {
        setMovies(data.Search);
      }

    }
    getMoviesRequest(searchValue);

  }, [searchValue])

  if(!movies.length)
  return<h3>Loading..</h3>

  return (
    <div className="App" >
      
      <div>
     
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div>
        <MoviesListItems movies={movies} />
      </div>
    </div>
  );
}

export default App;
