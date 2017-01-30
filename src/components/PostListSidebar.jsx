import React from 'react';
import { Link } from 'react-router';

class PostListSidebar extends React.Component {
  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <li key={post.id}>
          <Link to={"/post/" + post.slug}>
            <h2>{post.title}</h2>
          </Link>
        </li>
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

PostListSidebar.propTypes = {
  posts: React.PropTypes.array
};

export default PostListSidebar;
