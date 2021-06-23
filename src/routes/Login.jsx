import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../app/store';

const Login = ({ isLoggedIn, toLogin }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onChangeId = (event) => setId(event.target.value);
  const onChangePw = (event) => setPw(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    toLogin(id);
    setId('');
    setPw('');
  };

  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <div>
      <h1>Login form</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          onChange={onChangeId}
          value={id}
        />
        <input
          type="password"
          placeholder="패스워드를 입력해주세요"
          onChange={onChangePw}
          value={pw}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/register">
        <span>회원가입하기</span>
      </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
