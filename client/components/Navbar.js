import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
// import { Link } from 'react-router-dom';
import Logo from '../../public/RECIPE PAL-logos_white.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Navbar = ({ handleClick, isLoggedIn, userName }) => (
  <div className="navbar">
    <div className="navbar-wrap">
      <div className="navbar-img">
        <Link className="react-link" to="/home">
          <img src={Logo} className="navbar-logo" />
        </Link>
      </div>
      <nav>
        {isLoggedIn ? (
          <div className="nav-links">
            <span style={{ marginRight: 25, fontStyle: 'italic' }}>
              Welcome, {userName}
            </span>
            <Link to="/">Create Recipes</Link>
            <Link to="/recipes">My Recipes</Link>
            <Link to="/shoppinglist">Shopping List</Link>
            <a
              href="#"
              onClick={handleClick}
              className="nav-logout"
              style={{ alignSelf: 'center' }}
            >
              {/* <ExitToAppIcon className="nav-icon" /> */}
              Logout
            </a>
          </div>
        ) : (
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
    </div>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    userName: state.auth.username,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
