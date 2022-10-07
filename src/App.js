import React,{useState, useEffect} from 'react'
import Header from './components/Header'
import MovieScreen from './components/MovieScreen'
import WatchList from './components/Watchlist';
import axios from 'axios';
import './App.css';


function App() {
    const [movieList, setMovieList] = useState([]);
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
  
  const addMovie = (movie) => setList([...list, movie]);
  
  const removeMovie = (movie) => {
    const newState = list.filter((mov) =>{
      return mov !== movie;
    });
  setList(newState);
  };

  const getData = () =>{
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) =>{
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };
  
  useEffect(() =>{
    getData();
  }, [page]);
  
  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
        addMovie={addMovie}
        page={page} 
        setPage={setPage}
        movieList={movieList}
        list={list}
        removeMovie={removeMovie}/>
        <WatchList list={list} removeMovie={removeMovie}/>
        </main>
        </div>
  );
  }
export default App;
