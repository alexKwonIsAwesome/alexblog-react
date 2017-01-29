import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostCreateForm from '../components/PostCreateForm';
import * as postActions from '../actions/postActions';

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(postActions, dispatch) 
  };
}

export default connect(null, mapDispatchToProps)(PostCreateForm);
