import React from 'react';
import { Button, Form } from 'react-bootstrap';

const RegisterForm = ({
  email,
  onChangeEmail,
  password,
  onChangePassword,
  onSubmit,
}) => {
  const [isCheck, setIsCheck] = React.useState(false);

  const onClickCheckBox = () => {
    setIsCheck(!isCheck);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formLoginEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={onChangeEmail}
          value={email}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLoginPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={onChangePassword}
          value={password}
        />
      </Form.Group>
      <Form.Group onClick={onClickCheckBox}>
        <Form.Check
          type="checkbox"
          className="mb-3"
          label="Remember Me"
          checked={isCheck}
        />
      </Form.Group>
      <Button className="mb-3" variant="primary" type="submit" size="lg" block>
        Login
      </Button>
    </Form>
  );
};

export default RegisterForm;
