import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../reduxState/actions/authActions';

import '../scss/buttons.scss';

class LogoutButton extends React.Component {
  handleClick() {
    // Use redux action
    this.props.logout();
  }

  render() {
    return (
      <button type="button" onClick={() => this.handleClick()}>
        Logout
      </button>
    );
  }
}

export default connect(
  null,
  { logout }
)(LogoutButton);
