export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';

export const updatePostSuccess = (post) => {
  return {
    type: UPDATE_POST_SUCCESS,
    post
  };
};

export const createPostSuccess = (post) => {
  return {
    type: CREATE_POST_SUCCESS,
    post
  };
};

export const deletePostSuccess = (post) => {
  return {
    type: DELETE_POST_SUCCESS,
    post
  };
};
