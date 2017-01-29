import initialState from './initialState';
import {
  UPDATE_POST_SUCCESS,
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS
} from '../actions/postActions';

export default function (state = initialState.posts, action) {
  switch (action.type) {
    case UPDATE_POST_SUCCESS:
      return [
        ...state.filter(post => post.id !== action.post.id),
        action.post
      ];
    case CREATE_POST_SUCCESS:
      return [
        ...state,
        action.post
      ];
    case DELETE_POST_SUCCESS:
      return state;
    default:
      return state;
  }
}
