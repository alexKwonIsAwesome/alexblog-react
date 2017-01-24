import React from 'react';

class PostForm extends React.Component {
  render() {
    return (
      <div>
        <h1>HAHAHAHALOVELY</h1>
        <p>{this.props.post.id}</p>
        <button onClick={() => this.props.toggleEdit()}>get back!</button>
      </div>
    );
  }
}

PostForm.propTypes = {
  post: React.PropTypes.object.isRequired
};

export default PostForm;
