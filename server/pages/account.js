import React from 'react';
import Login from '../components/Login';

import '../scss/account.scss';

class Account extends React.Component {
  render() {
    return (
      <div className="account-wrapper">
        <Login />
      </div>
    );
  }
}

export default Account;
