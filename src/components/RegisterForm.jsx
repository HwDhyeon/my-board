import React from 'react';
import { Button, Form } from 'react-bootstrap';

const RegisterForm = ({
  userName,
  email,
  password,
  onChangeUserName,
  onChangeUserEmail,
  onChangeUserPassword,
  onSubmit,
}) => {
  const [isCheck, setIsCheck] = React.useState(false);

  const onClickCheckBox = () => {
    setIsCheck(!isCheck);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formRegisterUserName">
        <Form.Label>User name</Form.Label>
        <Form.Control
          type="text"
          placeholder="User"
          onChange={onChangeUserName}
          value={userName}
          focus
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRegisterEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={onChangeUserEmail}
          value={email}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRegisterPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={onChangeUserPassword}
          value={password}
        />
      </Form.Group>
      <Form.Group onClick={onClickCheckBox}>
        <Form.Check
          type="checkbox"
          className="mb-3"
          label="I Agree to Privacy Policy"
          checked={isCheck}
        />
      </Form.Group>
      <Button className="mb-3" variant="primary" type="submit" size="lg" block>
        Request register
      </Button>
    </Form>
  );
};

export default RegisterForm;
