import axios from 'axios';
import jwtDecode from 'jwt-decode';

import actions from './types';
import setAuthToken from '../../helpers/setAuthToken';

// Set the current user data
export const setCurrentUser = tokenData => {
  return {
    type: actions.SET_CURRENT_USER,
    payload: tokenData
  };
};

// Login in user and store token
export const login = userData => dispatch => {
  axios
    .post('/login', userData)
    .then(res => {
      // Save token to localStorage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Set token to auth header
      setAuthToken(token);
      // Decode jwt for user data
      const decoded = jwtDecode(token);
      // Set user data
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: actions.GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Log out the user
export const logout = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header from requests
  setAuthToken(false);
  // Set current user to {}
  dispatch(setCurrentUser({}));
};
