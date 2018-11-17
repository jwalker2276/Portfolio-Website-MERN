import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import jwtDecode from 'jwt-decode';
import { initStore } from '../reduxState/store';

import setAuthToken from '../helpers/setAuthToken';
import { setCurrentUser } from '../reduxState/actions/authActions';

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
      };
    }

    componentDidMount() {
      // Check if token is in local storage
      if (localStorage.jwtToken) {
        // Set token to header for requests
        setAuthToken(localStorage.jwtDecode);
        // Decode the token for user info
        const decoded = jwtDecode(localStorage.jwtToken);
        // Set user data
        this.props.store.dispatch(setCurrentUser(decoded));
      }
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);
