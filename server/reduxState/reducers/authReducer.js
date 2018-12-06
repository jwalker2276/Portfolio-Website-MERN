import _isEmpty from 'lodash.isempty';
import actions from '../actions/types';

// Default state
const authState = {
  isAuth: false,
  user: {}
};

// Check for action type
// Todo : Rename function
const reducer = (state = authState, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        isAuth: !_isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
