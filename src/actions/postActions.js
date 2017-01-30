import database from '../firebase';
import { slugify } from '../utils';

export const FETCH_POSTS_REQUESTED = 'FETCH_POSTS_REQUESTED';
export const FETCH_POSTS_FULFILLED = 'FETCH_POSTS_FULFILLED';
export const FETCH_POSTS_REJECTED = 'FETCH_POSTS_REJECTED';

export const ADD_POST_REQUESTED = 'ADD_POST_REQUESTED';
export const ADD_POST_FULFILLED = 'ADD_POST_FULFILLED';
export const ADD_POST_REJECTED = 'ADD_POST_REJECTED';

export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';

/* fetch posts */

export const fetchPostsRequestedAction = () => {
  return {
    type: FETCH_POSTS_REQUESTED
  };
}

export const fetchPostsFulfilledAction = (posts) => {
  return {
    type: FETCH_POSTS_FULFILLED,
    posts
  };
}

export const fetchPostsRejectedAction = () => {
  return {
    type: FETCH_POSTS_REJECTED
  };
}

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsRequestedAction());
    return database.ref('/').once('value', snap => {
      const posts = snap.val();
      dispatch(fetchPostsFulfilledAction(posts))
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchPostsRejectedAction());
    });
  }
}

/* add post */

export const addPostRequestedAction = () => {
  return {
    type: ADD_POST_REQUESTED
  };
}

export const addPostRejectedAction = () => {
  return {
    type: ADD_POST_REJECTED
  };

}

export const addPostFulfilledAction = (post) => {
  return {
    type: ADD_POST_FULFILLED,
    post
  };
}

export const addPost = (postData) => {
  return dispatch => {
    dispatch(addPostRequestedAction());
    const postsRef = database.ref('/posts');
    const postSlug = slugify(postData.title);
    postsRef.push({
      title: postData.title,
      content: postData.content,
      slug: postSlug
    })
    .then(() => {
      const postId = postsRef.key
      const postLove = {
        ...postData,
        id: postId
      };
      dispatch(addPostFulfilledAction(postLove));
    })
    .catch((error) => {
      dispatch(addPostRejectedAction());
    });
  } 
}

/* well? */

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
