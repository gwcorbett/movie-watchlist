import React from 'react';
import MovieCard from './MovieCard';

const MovieScreen = ({addMovie, movieList, page, setPage, list, removeMovie}) =>{
    const decrement = () =>setPage(page - 1);
    const increment = () =>setPage(page + 1);

    const movieDisplay = movieList.map((movie, index) =>{
        return 
            <MovieCard 
                movie={movie}
                addMovie={addMovie}
                list={list}
                removeMovie={removeMovie}/>;
    });
    
    return(
        <div className="page">
            <h1>Greg's Movie Theater</h1>
            <h3>Add A Movie To Your Watchlist</h3>
            <div className='btn-container'>
                <button onClick={page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">
                {movieDisplay}
                </div>
        </div>
    );
}

export default MovieScreen;