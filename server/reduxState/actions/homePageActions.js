import axios from 'axios';
import actions from './types';

// Get project data
export const getProfileData = () => dispatch => {
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
        payload: { getError: err }
      })
    );
};

// Get project data
export const getProjectData = () => dispatch => {
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
        payload: { getError: err }
      })
    );
};

// Send profile data to server
export const setProfileData = profileData => dispatch => {
  // Post profile data
  axios
    .post('/profile', profileData)
    .then(res => res.status)
    .catch(err =>
      dispatch({
        type: actions.GET_ERRORS,
        payload: { postError: err }
      })
    );
};

// Send project data to server
export const setProjectData = projectData => dispatch => {
  // Post project data
  axios
    .post('/project', projectData)
    .then(res => res.status)
    .catch(err =>
      dispatch({
        type: actions.GET_ERRORS,
        payload: { postError: err }
      })
    );
};
