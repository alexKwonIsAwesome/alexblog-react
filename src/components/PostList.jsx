import React from 'react';

class PostList extends React.Component {
  renderPost(posts) {
    return posts.map((post) => {
      return (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.id}</p>
          <p>{post.content}</p>
        </div>
      );
    });
  }

  render() {
    const {posts} = this.props.posts;
    return (
      <div>
        <h1>Post</h1>
        {this.renderPost(posts)}
      </div>
    );
  }
}

export default PostList;