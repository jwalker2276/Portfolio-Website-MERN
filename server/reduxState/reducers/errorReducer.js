import actions from '../actions/types';

// Default state
const errorState = {};

// Check for action type
export default (state = errorState, action) => {
  switch (action.type) {
    case actions.GET_ERRORS:
      // Return errors
      return action.payload;
    case actions.CLEAR_ERROS:
      // Clear the errors object
      return {};
    default:
      return state;
  }
};
