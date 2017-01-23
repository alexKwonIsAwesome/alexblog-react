import { connect } from 'react-redux';
import PostListSidebar from '../components/PostListSidebar';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(PostListSidebar);
