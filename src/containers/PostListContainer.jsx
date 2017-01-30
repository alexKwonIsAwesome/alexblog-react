import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import * as postActions from '../actions/postActions';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
