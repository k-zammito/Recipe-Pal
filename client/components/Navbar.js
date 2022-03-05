import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
// import { Link } from 'react-router-dom';
import Logo from '../../public/RECIPE PAL-logos_white.png';

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
          <div>
            <span style={{ marginRight: 20 }}>Welcome, {userName}</span>
            <Link to="/">Home</Link>
            <Link to="/recipes">My Recipes</Link>
            <Link to="/shoppinglist">Shopping List</Link>
            <a href="#" onClick={handleClick}>
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
