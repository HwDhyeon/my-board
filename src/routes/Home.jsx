import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../app/store';

const Home = ({ isLoggedIn, currentUser, toLogout }) => {
  return isLoggedIn ? (
    <div>
      <h1>Home</h1>
      <div>Hello {currentUser}</div>
      <button onClick={toLogout}>Logout</button>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
    currentUser: state.user,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    toLogout: () => dispath(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
