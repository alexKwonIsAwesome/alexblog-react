import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostUpdateForm from '../components/PostUpdateForm';
import * as postActions from '../actions/postActions';

const mapStateToProps = (state, ownProps) => {
  const postSlug = ownProps.slug;
  const posts = state.posts;

  let post = posts.find(post => post.slug === postSlug);
  return {
    post: post
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(postActions, dispatch) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostUpdateForm);
