import { connect } from 'react-redux';
import PostForm from '../components/PostForm';

const mapStateToProps = (state, ownProps) => {
  const postId = parseInt(ownProps.id, 10);
  const posts = state.posts;

  let post = posts.find(post => post.id === postId);
  return {
    post: post
  };
}

export default connect(mapStateToProps)(PostForm);
