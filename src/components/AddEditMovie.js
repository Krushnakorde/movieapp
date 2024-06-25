import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie, editMovie } from '../redux/actions/movieActions';

const AddEditMovie = ({ movie, isEditing }) => {
    const [title, setTitle] = useState(movie ? movie.title : '');
    const [description, setDescription] = useState(movie ? movie.description : '');
    const [releaseYear, setReleaseYear] = useState(movie ? movie.releaseYear : '');
    const [genre, setGenre] = useState(movie ? movie.genre : '');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const movieData = { title, description, releaseYear, genre };
        if (isEditing) {
            dispatch(editMovie({ ...movie, ...movieData }));
        } else {
            dispatch(addMovie({ ...movieData, id: Date.now(), watched: false }));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
            <input type="number" value={releaseYear} onChange={e => setReleaseYear(e.target.value)} placeholder="Release Year" />
            <input type="text" value={genre} onChange={e => setGenre(e.target.value)} placeholder="Genre" />
            <button type="submit">Save</button>
        </form>
    );
};

export default AddEditMovie;
