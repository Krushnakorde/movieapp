export const addMovie = movie => ({
    type: 'ADD_MOVIE',
    payload: movie,
});

export const editMovie = movie => ({
    type: 'EDIT_MOVIE',
    payload: movie,
});

export const deleteMovie = id => ({
    type: 'DELETE_MOVIE',
    payload: id,
});

export const toggleWatched = id => ({
    type: 'TOGGLE_WATCHED',
    payload: id,
});

export const rateMovie = (id, rating) => ({
    type: 'RATE_MOVIE',
    payload: { id, rating },
});

export const reviewMovie = (id, review) => ({
    type: 'REVIEW_MOVIE',
    payload: { id, review },
});
