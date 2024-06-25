import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rating: 0,
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRating: (state, action) => {
      state.rating = action.payload;
    },
  },
});

export const { setRating } = ratingSlice.actions;
export default ratingSlice.reducer;
