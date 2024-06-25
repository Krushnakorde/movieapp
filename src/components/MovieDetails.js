import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rating from './Rating';

const MovieDetails = () => {
    const { id } = useParams();
    const movie = useSelector(state => state.movies.watchlist.find(movie => movie.id === parseInt(id)));

    return (
        <div>
            {movie ? (
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <p>{movie.releaseYear}</p>
                    <p>{movie.genre}</p>
                    <Rating movieId={movie.id} />
                    <p>{movie.review}</p>
                </div>
            ) : (
                <p>Movie not found</p>
            )}
        </div>
    );
};

export default MovieDetails;
