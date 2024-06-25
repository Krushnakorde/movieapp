import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie, toggleWatched } from '../redux/actions/movieActions';

const MovieList = () => {
    const movies = useSelector(state => state.movies.watchlist);
    const dispatch = useDispatch();

    return (
        <div>
            {movies.map(movie => (
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                    <p>{movie.releaseYear}</p>
                    <p>{movie.genre}</p>
                    <button onClick={() => dispatch(toggleWatched(movie.id))}>
                        {movie.watched ? 'Unwatched' : 'Watched'}
                    </button>
                    <button onClick={() => dispatch(deleteMovie(movie.id))}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
