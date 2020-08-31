import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
// import Details from './pages/Details';

const AppRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/movies/:id" component={Details} /> */}
    </>
  );
};

export default AppRoutes;
