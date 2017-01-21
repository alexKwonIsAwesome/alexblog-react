import { combineReducers } from 'redux';
import posts from './postReducer';

const rootReducer = combineReducers({
  posts //posts : posts
});

export default rootReducer;
