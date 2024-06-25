import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    updateMovie: (state, action) => {
      const { id, title, description, releaseYear, genre } = action.payload;
      const movieToUpdate = state.movies.find((movie) => movie.id === id);
      if (movieToUpdate) {
        movieToUpdate.title = title;
        movieToUpdate.description = description;
        movieToUpdate.releaseYear = releaseYear;
        movieToUpdate.genre = genre;
      }
    },
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addMovie, updateMovie, deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;
