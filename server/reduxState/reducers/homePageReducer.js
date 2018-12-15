import actions from '../actions/types';

const pageState = {
  profileData: null,
  projectData: null
};

export default (state = pageState, action) => {
  switch (action.type) {
    case actions.GET_PROFILE:
      return {
        ...state,
        profileData: action.payload
      };
    case actions.GET_PROJECTS:
      return {
        ...state,
        projectData: action.payload
      };
    default:
      return state;
  }
};
