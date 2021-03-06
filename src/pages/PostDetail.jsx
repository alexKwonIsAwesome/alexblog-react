import React from 'react';
import PostDetailContainer from '../containers/PostDetailContainer';
import PostUpdateFormContainer from '../containers/PostUpdateFormContainer';
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
    if (this.props.params.slug !== nextProps.params.slug) {
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
        <PostDetailContainer slug={this.props.params.slug} />
      );
    } else
      return(
        <PostUpdateFormContainer slug={this.props.params.slug} toggleEdit={this.toggleEdit}/>
      );
  }

  headerType() {
    if (!this.state.isEditing) {
      return "post-detail";
    } else {
      return "post-form";
    }
  }

  render() {
    return (
      <div>
        <HeaderContainer type={this.headerType()} toggleEdit={this.toggleEdit}/>
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
