import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Login = ({ login }) => {
  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  const handleLogin = e => {
    e.preventDefault();
    login(usernameRef.current.value, passwordRef.current.value);
  };

  return (
    <form onSubmit={handleLogin}>
      <input ref={usernameRef} placeholder="Username" />
      <input ref={passwordRef} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default connect(
  null,
  { login: actions.login },
)(Login);
