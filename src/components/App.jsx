import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Login from '../routes/Login';
import Register from '../routes/Register';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
};

export default App;
