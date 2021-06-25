import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Board from './Board';
import Detail from './Detail';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/board" component={Board} />
      <Route path="/detail" component={Detail} />
    </Router>
  );
};

export default Routes;
