import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { login } from '../../reduxState/actions/authActions';

import '../../scss/login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    // Login state
    this.state = {
      username: '',
      password: '',
      errors: {}
    };
    // Bind these methods to this instance
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Check if login is needed
    if (this.props.auth.isAuth) {
      // Move to dashboard page
      Router.push('/dashboard');
    }
  }

  // Check for new props
  componentDidUpdate(prevProps) {
    const { errors } = this.props;
    // Check for new errors
    if (prevProps.errors !== errors) {
      this.setState({ errors });
    }

    // Current props state
    const currentIsAuth = this.props.auth.isAuth;

    // Check for change in auth
    if (currentIsAuth !== prevProps.auth.isAuth) {
      // Check if user logged in.
      if (currentIsAuth) {
        // Redirect to dashboard
        Router.push('/dashboard');
      }
    }
  }

  // Form submission
  onSubmit(event) {
    event.preventDefault();

    // User data
    const { username, password } = this.state;

    const user = {
      username,
      password
    };

    // Redux Action
    this.props.login(user);
  }

  // Changed state when input is detected
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { username, password, errors } = this.state;

    return (
      <form className="form" method="POST" onSubmit={this.onSubmit}>
        <h2 className="form__heading">Login</h2>
        <fieldset className="form__set">
          <label htmlFor="username" className="form__label">
            Username
            <span className="form__error">{errors.username}</span>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              className="form__input"
            />
          </label>
          <label htmlFor="password" className="form__label">
            Password
            <span className="form__error">{errors.password || errors.error}</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="form__input"
            />
          </label>
          <button type="submit" value="Submit" className=" form__button">
            Sign in
          </button>
        </fieldset>
      </form>
    );
  }
}

// Add to props from redux state
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
