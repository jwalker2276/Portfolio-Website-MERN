import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const { username, password } = this.state;

    const user = {
      username,
      password
    };

    axios
      .post('/login', user)
      .then(res => console.log(res.data))
      .catch(error => this.setState({ errors: error.response.data }));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { username, password } = this.state;

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

export default Login;
