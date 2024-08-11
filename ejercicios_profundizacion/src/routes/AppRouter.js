// src/routes/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Posteos from '../components/Posteos';
import CrearPosteo from '../components/CrearPosteo';
import PosteoDetalle from '../components/PosteoDetalle';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posteos" component={Posteos} />
        <Route path="/posteos/:id" component={PosteoDetalle} />
        <Route path="/crear" component={CrearPosteo} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
