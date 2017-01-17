import React from 'react';

const Post = ({id, title, content}) => {
  return (
    <div>
      <p>Post id: {id}</p>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Post;
