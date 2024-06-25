import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie } from '../redux/movieSlice.js';

const Home = () => {
  const movies = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();

  const handleDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  };

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
