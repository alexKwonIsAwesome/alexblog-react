import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-faded">
        <Link className="navbar-brand" to={"/"}>Home</Link>
        <button className="btn btn-secondary navbar-toggler" type="button">
          New Post
        </button>
      </nav>
    );
  }
}

export default Header;
