import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import ratingReducer from './ratingSlice';

const store = configureStore({
  reducer: {
    movie: movieReducer,
    rating: ratingReducer,
  },
});

export default store;
