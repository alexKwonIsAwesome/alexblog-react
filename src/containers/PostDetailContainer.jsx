import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';

const mapStateToProps = (state, ownProps) => {
  const postSlug = ownProps.slug;
  const posts = state.posts;

  let post = posts.find(post => post.slug === postSlug);
  return {
    post: post
  };
}

export default connect(mapStateToProps)(PostDetail);
