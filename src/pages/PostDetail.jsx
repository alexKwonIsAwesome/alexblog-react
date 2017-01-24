import React from 'react';
import PostDetailContainer from '../containers/PostDetailContainer';
import PostListSidebarContainer from '../containers/PostListSidebarContainer';
import HeaderContainer from '../containers/HeaderContainer';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      this.setState({
      isEditing: false
      })
    }
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  renderContentOrEditForm() {
    if (!this.state.isEditing) {
      return (
        <PostDetailContainer id={this.props.params.id} toggleEdit={() => this.toggleEdit()} />
      );
    } else
      return(
        <div>
          <h1>Edit Form</h1>
          <button onClick={() => this.toggleEdit()}>Back</button>
        </div>
      );
  }

  render() {
    return (
      <div>
        <HeaderContainer type="post-detail"/>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-sm-3">
              <PostListSidebarContainer />
            </div>
            <div className="col col-sm-9">
              {this.renderContentOrEditForm()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetail;
