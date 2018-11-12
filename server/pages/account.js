import React from 'react';
import Login from '../components/user/Login';

class Account extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Account Page</p>
        <Login />
      </React.Fragment>
    );
  }
}

export default Account;
