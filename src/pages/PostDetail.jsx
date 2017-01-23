import React from 'react';
import PostDetailContainer from '../containers/PostDetailContainer';
import PostListSidebarContainer from '../containers/PostListSidebarContainer';

class PostDetail extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm-3">
            <PostListSidebarContainer />
          </div>
          <div className="col col-sm-9">
            <PostDetailContainer id={this.props.params.id}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetail;
