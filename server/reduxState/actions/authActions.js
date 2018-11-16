import axios from 'axios';
import actions from './types';

export const login = userData => dispatch => {
  axios
    .post('/login', userData)
    .then(() => console.log('Redirecting to dashboard'))
    .catch(err =>
      dispatch({
        type: actions.GET_ERRORS,
        payload: err.response.data
      })
    );
};
