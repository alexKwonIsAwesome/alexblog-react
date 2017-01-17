import React from 'react';
import logo from '../logo.svg';
import PostListContainer from '../containers/PostListContainer';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Alexblog</h2>
        </div>
        <p className="App-intro">
          Simple and lovely blog built with react
        </p>
        <PostListContainer />
      </div>
   );
  }
}

export default Home;
