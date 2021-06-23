import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../app/store';

const Register = ({ isLoggedIn, toLogin }) => {
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setuserPw] = useState('');

  const onChangeUserName = (event) => setUserName(event.target.value);
  const onChangeUserId = (event) => setUserId(event.target.value);
  const onChangeUserPw = (event) => setuserPw(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    toLogin(userId);
    setUserName('');
    setUserId('');
    setuserPw('');
  };

  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="username"
          onChange={onChangeUserName}
          value={userName}
        />
        <input
          type="text"
          id="user_id"
          onChange={onChangeUserId}
          value={userId}
        />
        <input
          type="password"
          id="user_pw"
          onChange={onChangeUserPw}
          value={userPw}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
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
