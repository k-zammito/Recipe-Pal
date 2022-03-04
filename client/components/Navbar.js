import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
// import { Link } from 'react-router-dom';
import Logo from '../../public/RECIPE PAL-logos_black.png';

const Navbar = ({ handleClick, isLoggedIn }) => (
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
            <Link to="/">Home</Link>
            <Link to="/recipes">Meal Plan</Link>
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
