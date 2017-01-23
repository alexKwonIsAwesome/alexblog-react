import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';

const mapStateToProps = (state, ownProps) => {
  const postId = parseInt(ownProps.id, 10);
  const posts = state.posts;

  let post = posts.find(post => post.id === postId);
  console.log(post);
  return {
    post: post
  };
}

export default connect(mapStateToProps)(PostDetail);
