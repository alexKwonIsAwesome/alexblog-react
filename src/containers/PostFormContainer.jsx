import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostForm from '../components/PostForm';
import * as postActions from '../actions/postActions';

const mapStateToProps = (state, ownProps) => {
  const postId = parseInt(ownProps.id, 10);
  const posts = state.posts;

  let post = posts.find(post => post.id === postId);
  return {
    post: post
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(postActions, dispatch) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
