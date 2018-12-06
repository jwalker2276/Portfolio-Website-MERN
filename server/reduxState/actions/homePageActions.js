import axios from 'axios';

import actions from './types';

// Set loading flag
export const setDataLoading = () => {
  return {
    type: actions.DATA_LOADING
  };
};

// Get project data
export const getProfileData = () => dispatch => {
  // Call loading toggle function
  dispatch(setDataLoading());
  // Fetch profile data
  axios
    .get('/profile')
    .then(res =>
      dispatch({
        type: actions.GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: actions.GET_ERRORS,
        payload: { error: err }
      })
    );
};

// Get project data
export const getProjectData = () => dispatch => {
  // Call loading toggle function
  // dispatch(setDataLoading());
  // Fetch project data
  axios
    .get('/project/all')
    .then(res =>
      dispatch({
        type: actions.GET_PROJECTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: actions.GET_ERRORS,
        payload: { error: err }
      })
    );
};
