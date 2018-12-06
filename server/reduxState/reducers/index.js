import { combineReducers } from 'redux';
import authReducer from './authReducer';
import homePageReducer from './homePageReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  homePageData: homePageReducer
});
