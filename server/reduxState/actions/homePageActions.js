import axios from 'axios';
import actions from './types';

// Clear errors
export const clearErrors = () => {
  return {
    type: actions.CLEAR_ERRORS
  };
};

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
  dispatch(clearErrors());
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
    .then(res =>
      dispatch({
        type: actions.GET_ERRORS,
        payload: { update: res.status }
      })
    )
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
    .then(res =>
      dispatch({
        type: actions.GET_ERRORS,
        payload: { update: res.data.message }
      })
    )
    .catch(err =>
      dispatch({
        type: actions.GET_ERRORS,
        payload: { postError: err }
      })
    );
};

// Delete project from the server
export const deleteProjectData = projectId => dispatch => {
  // Send delete request
  const config = {
    data: {
      id: projectId
    }
  };

  axios
    .delete('/project', config)
    .then(res =>
      dispatch({
        type: actions.GET_ERRORS,
        payload: { update: res.data.message }
      })
    )
    .catch(err =>
      dispatch({
        type: actions.GET_ERRORS,
        payload: { deleteError: err }
      })
    );
};
