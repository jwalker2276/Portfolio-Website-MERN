import actions from '../actions/types';

// Default state
const authState = {
  isAuth: false,
  user: {}
};

// Check for action type
const reducer = (state = authState, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        isAuth: true,
        user: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
