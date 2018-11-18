import React from 'react';
import Login from '../components/user/Login';

import '../scss/account.scss';

class Account extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        <Login />
      </div>
    );
  }
}

export default Account;
