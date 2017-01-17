import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOVE':
      return state;
    case 'HATRED':
      return state;
    default:
      return state;
  }
}
