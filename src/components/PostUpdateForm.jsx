import React from 'react';

class PostUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: this.props.post.title,
      postContent: this.props.post.content
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePostState = this.updatePostState.bind(this);
  }

  updatePostState() {
    const postTitle = this.refs.postTitle.value;
    const postContent = this.refs.postContent.value;
    this.setState({
      postTitle: postTitle,
      postContent: postContent
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = {
      id: this.props.post.id,
      title: this.state.postTitle,
      content: this.state.postContent,
      slug: this.props.post.slug
    };
    this.props.actions.updatePostSuccess(post);
    this.props.toggleEdit();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" ref="postTitle" onChange={this.updatePostState} className="form-control" id="InputTitle" value={this.state.postTitle} aria-describedby="postTitle" placeholder="Post Title"/>
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea className="form-control" ref="postContent" onChange={this.updatePostState} id="AreaContent" value={this.state.postContent} placeholder="Post Content" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button onClick={this.props.toggleEdit} className="btn btn-secondary" type="button">Cancel</button>
        </form>
      </div>
    );
  }
}

PostUpdateForm.propTypes = {
  post: React.PropTypes.object
};

export default PostUpdateForm;
