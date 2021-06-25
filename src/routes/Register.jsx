import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../app/store';
import RegisterForm from '../components/RegisterForm';

const Register = ({ isLoggedIn, toLogin }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onChangeUserName = (event) => setUserName(event.target.value);
  const onChangeUserEmail = (event) => setUserEmail(event.target.value);
  const onChangeUserPassword = (event) => setUserPassword(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    toLogin(userName);
    setUserEmail('');
    setUserName('');
    setUserPassword('');
  };

  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <RegisterForm
      userName={userName}
      userEmail={userEmail}
      userPassword={userPassword}
      onChangeUserName={onChangeUserName}
      onChangeUserEmail={onChangeUserEmail}
      onChangeUserPassword={onChangeUserPassword}
      onSubmit={onSubmit}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toLogin: (id) => dispatch(login(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
