import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import LogoutButton from '../components/user/LogoutButton';

class Dashboard extends React.Component {
  // Check if user is authenticated client side
  componentDidMount() {
    if (!this.props.auth.isAuth) {
      // User should not be here, redirect to login page.
      Router.push('/account');
    }
  }

  // Check if user clicked logout
  componentDidUpdate(prevProps) {
    // Check if logout button was pressed
    if (this.props.auth.isAuth !== prevProps.auth.isAuth) {
      // Redirect back to login screen
      Router.push('/account');
    }
  }

  render() {
    return (
      <React.Fragment>
        <LogoutButton />
        <h1>Dashboard page</h1>
        <p>Logged in</p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Dashboard);
