import React from 'react';
import PostDetailContainer from '../containers/PostDetailContainer';
import PostFormContainer from '../containers/PostFormContainer';
import PostListSidebarContainer from '../containers/PostListSidebarContainer';
import HeaderContainer from '../containers/HeaderContainer';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
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
    console.log('toggle edit is workig');
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
        <PostFormContainer id={this.props.params.id} toggleEdit={() => this.toggleEdit()}/>
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
