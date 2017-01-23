import React from 'react';

class PostDetail extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.content}</p>
      </div>
    );
  }
}

export default PostDetail;
