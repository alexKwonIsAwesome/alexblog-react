import initialState from './initialState';

export default function (state = initialState.posts, action) {
  switch (action.type) {
    case 'LOVE':
      return state;
    case 'HATRED':
      return state;
    default:
      return state;
  }
}
