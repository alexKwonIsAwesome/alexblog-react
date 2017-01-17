import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';

export class PostListContainer extends React.Component {
  
  render() {
    return (
      <div>
        <Post id={1} title={'love'} content={'message from the heaven'}/>
        <Post id={2} title={'love you so much'} content={'do love really matter?'}/>
        <Post id={3} title={'kimino na wa.'} content={'zenbu musubidayo'}/>
      </div>
    );
  }
}

export default PostListContainer;
