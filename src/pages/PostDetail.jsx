import React from 'react';
import PostDetailContainer from '../containers/PostDetailContainer';

class PostDetail extends React.Component {
  render() {
    return (
      <div>
        <PostDetailContainer id={this.props.params.id}/>
      </div>
    );
  }
}

export default PostDetail;
