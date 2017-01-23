import React from 'react';
import PostDetailContainer from '../containers/PostDetailContainer';
import PostListSidebarContainer from '../containers/PostListSidebarContainer';
import HeaderContainer from '../containers/HeaderContainer';

class PostDetail extends React.Component {
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
              <PostDetailContainer id={this.props.params.id}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetail;
