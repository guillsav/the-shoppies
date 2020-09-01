import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MoviesState } from './context/movies/MoviesContext';
import AppRoutes from './AppRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <MoviesState>
        <div className="app">
          <AppRoutes />
        </div>
      </MoviesState>
    </Router>
  );
}

export default App;
