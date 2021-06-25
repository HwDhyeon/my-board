import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '../app/store';
import LoginForm from '../components/LoginForm';

const Login = ({ isLoggedIn, toLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event) => setEmail(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    toLogin(email);
    setEmail('');
    setPassword('');
  };

  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <Container>
      <Row>
        <Col xs={1} md={3} />
        <Col xs={10} md={6}>
          <Card
            body
            style={{
              marginTop: '1rem',
              borderRadius: '10px',
              borderWidth: '3px',
            }}
          >
            <h3>My Board</h3>
            <h5>게시판입니다.</h5>
            <LoginForm
              email={email}
              password={password}
              onChangeEmail={onChangeEmail}
              onChangePassword={onChangePassword}
              onSubmit={onSubmit}
            />
            <RightText>
              New to MyBoard? <Link to="/register">Create an Account</Link>
            </RightText>
          </Card>
        </Col>
        <Col xs={1} md={3} />
      </Row>
    </Container>
  );
};

const RightText = styled.p`
  text-align: right;
`;

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
