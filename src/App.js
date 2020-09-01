import React from 'react';
import { MoviesState } from './context/movies/MoviesContext';
import Home from './pages/home/Home';

import './App.css';

function App() {
  return (
    <MoviesState>
      <div className="app">
        <Home />
      </div>
    </MoviesState>
  );
}

export default App;
