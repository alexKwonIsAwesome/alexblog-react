import React from 'react';
import logo from '../logo.svg';
import PostListContainer from '../containers/PostListContainer';
import HeaderContainer from '../containers/HeaderContainer';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer type="home"/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Alexblog</h2>
        </div>
        <div>
          <p className="App-intro">
            Simple and lovely blog built with react
          </p>
        </div>
        <PostListContainer />
      </div>
   );
  }
}

export default Home;
