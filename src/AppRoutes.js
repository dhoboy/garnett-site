import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import News from './components/News';
import Bio from './components/Bio';
import HowTeach from './components/HowTeach';
import ACAC from './components/ACAC';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

const AppRoutes = () => {
  return (
    <Switch>
      <Route 
        exact
        path="/"
        render={routeProps => <Redirect {...routeProps} to="/news" />}
      />
      <Route 
        path="/news"
        render={routeProps => <News { ...routeProps} />}
      />
      <Route 
        path="/bio"
        render={routeProps => <Bio {...routeProps} />}
      />
      <Route 
        path="/how-i-teach"
        render={routeProps => <HowTeach {...routeProps} />}
      />
      <Route 
        path="/acac"
        render={routeProps => <ACAC {...routeProps} />}
      />
      <Route 
        path="/testimonials"
        render={routeProps => <Testimonials {...routeProps} />}
      />
      <Route 
        path="/contact"
        render={routeProps => <Contact {...routeProps} />}
      />
    </Switch>
  );
};

export default AppRoutes;
