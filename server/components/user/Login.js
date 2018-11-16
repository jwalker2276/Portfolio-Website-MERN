import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../reduxState/actions/authActions';

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

  // Check for new props
  componentDidUpdate(prevProps) {
    const { errors } = this.props;
    // Check for new errors
    if (prevProps.errors !== errors) {
      this.setState({ errors });
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
    // TODO : Add error elements under form inputs.

    return (
      <form method="POST" onSubmit={this.onSubmit}>
        <fieldset>
          <label htmlFor="username">
            Username
            <input type="text" name="username" value={username} onChange={this.handleChange} />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </label>
          <button type="submit" value="Submit">
            Login
          </button>
        </fieldset>
      </form>
    );
  }
}

// Add to props
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
