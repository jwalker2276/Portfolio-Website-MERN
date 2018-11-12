import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="username">
            Username
            <input type="text" name="username" />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </fieldset>
      </form>
    );
  }
}

export default Login;
