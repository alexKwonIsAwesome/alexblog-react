import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  renderLinks() {
    const { type } = this.props;
    if (type === "home") {
      return (
        <nav className="navbar navbar-light bg-faded">
          <div>
            <Link className="navbar navbar-light bg-faded">Alex Blog</Link>
            <Link to={"/post/create/"} className="btn btn-secondary navbar-toggler">
              New Post
            </Link>
          </div>
        </nav>
      );
    } else if (type === "post-detail") {
      return (
        <nav className="navbar navbar-light bg-faded">
          <div>
            <Link className="navbar navbar-light bg-faded">Alex Blog</Link>
            <button onClick={this.props.toggleEdit} className="btn btn=secondary navbar-toggler" type="button">
              Edit
            </button>
          </div>
        </nav>

      );
    } else if (type === "post-edit") {
      return (
        <p>post-edit: </p>
      );
    }
  }

  //renderSignInLinks(authenticatedUser); => show login/signup links when user is not authenticated, hide it when authenticated.

  render() {
    return (
      <div>
        {this.renderLinks()}
      </div>
    );
  }
}

export default Header;
