import React from 'react';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

import Login from './components/Login';

const App = ({ authed }) => (
  <div>
    {authed ? <Redirect to="/" /> : <Redirect to="/login" />}
    <Route path="/login" exact component={Login} />
  </div>
);

const mapStateToProps = state => ({
  authed: state.authed,
});

export default connect(
  mapStateToProps,
  {},
)(App);
