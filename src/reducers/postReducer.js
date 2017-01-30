import initialState from './initialState';
import {
  FETCH_POSTS_REQUESTED,
  FETCH_POSTS_FULFILLED,
  FETCH_POSTS_REJECTED,
  ADD_POST_REQUESTED,
  ADD_POST_FULFILLED,
  ADD_POST_REJECTED,
  UPDATE_POST_SUCCESS,
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
} from '../actions/postActions';

export default function (state = initialState.posts, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUESTED:
      return state;
    case FETCH_POSTS_FULFILLED:
      return [
        ...action.posts
      ];
    case FETCH_POSTS_REJECTED:
      return state;
    case ADD_POST_REQUESTED:
      return state;
    case ADD_POST_FULFILLED:
      return state;
    case ADD_POST_REJECTED:
      return state;
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
