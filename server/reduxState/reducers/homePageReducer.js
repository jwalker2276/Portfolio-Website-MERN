import actions from '../actions/types';

const pageState = {
  profileData: null,
  projectData: null,
  loading: false
};

export default (state = pageState, action) => {
  switch (action.type) {
    case actions.DATA_LOADING:
      return {
        ...state,
        loading: true
      };
    case actions.GET_PROFILE:
      return {
        ...state,
        profileData: action.payload,
        loading: false
      };
    case actions.GET_PROJECTS:
      return {
        ...state,
        projectData: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
