import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: this.props.post.title,
      postContent: this.props.post.content
    }
  }

  updatePostState() {
    const postTitle = this.refs.postTitle.value;
    const postContent = this.refs.postContent.value;
    this.setState({
      postTitle: postTitle,
      postContent: postContent
    });
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" ref="postTitle" onChange={() => this.updatePostState()} className="form-control" id="InputTitle" value={this.state.postTitle} aria-describedby="postTitle" placeholder="Post Title"/>
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" ref="postContent" onChange={() => this.updatePostState()} id="AreaContent" value={this.state.postContent} placeholder="Post Content" />
          </div>
        </form>
        <button onClick={() => this.props.toggleEdit()}>get back!</button>
      </div>
    );
  }
}

PostForm.propTypes = {
  post: React.PropTypes.object
};

export default PostForm;
