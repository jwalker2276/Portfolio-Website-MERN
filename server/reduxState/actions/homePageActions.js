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
        payload: { error: err }
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
        payload: { error: err }
      })
    );
};
