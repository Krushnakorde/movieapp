const initialState = {
    watchlist: [],
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload],
            };
        case 'EDIT_MOVIE':
            return {
                ...state,
                watchlist: state.watchlist.map(movie =>
                    movie.id === action.payload.id ? action.payload : movie
                ),
            };
        case 'DELETE_MOVIE':
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload),
            };
        case 'TOGGLE_WATCHED':
            return {
                ...state,
                watchlist: state.watchlist.map(movie =>
                    movie.id === action.payload ? { ...movie, watched: !movie.watched } : movie
                ),
            };
        case 'RATE_MOVIE':
            return {
                ...state,
                watchlist: state.watchlist.map(movie =>
                    movie.id === action.payload.id ? { ...movie, rating: action.payload.rating } : movie
                ),
            };
        case 'REVIEW_MOVIE':
            return {
                ...state,
                watchlist: state.watchlist.map(movie =>
                    movie.id === action.payload.id ? { ...movie, review: action.payload.review } : movie
                ),
            };
        default:
            return state;
    }
};
