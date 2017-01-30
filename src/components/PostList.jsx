import React from 'react';
import { Link } from 'react-router';

class PostList extends React.Component {
  componentDidMount() {
    this.props.actions.fetchPosts();
  }

  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <div key={post.id}>
          <Link to={"/post/" + post.slug}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.id}</p>
          <p>{post.content}</p>
        </div>
      );
    });
  }

  render() {
    const posts = this.props.posts;
    return (
      <div>
        {this.renderPosts(posts)}
      </div>
    );
  }
}

PostList.propTypes = {
  posts: React.PropTypes.array
};

export default PostList;
