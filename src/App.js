import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import AddEditMovie from './components/AddEditMovie';
import MovieDetails from './components/MovieDetails';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Movie Watchlist</h1>
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddEditMovie} />
        <Route path="/edit/:id" component={AddEditMovie} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route component={NotFound} />
      </div>
    </Router>
  );
};

export default App;
