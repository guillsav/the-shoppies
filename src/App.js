import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MoviesState } from './context/movies/MoviesContext';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <Router>
      <MoviesState>
        <AppRoutes />
      </MoviesState>
    </Router>
  );
}

export default App;
