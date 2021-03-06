import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
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
          <>
            <div className="nav-links">
              <span style={{ marginRight: 25, fontStyle: 'italic' }}>
                Welcome, {userName}
              </span>
              <span>
                <Link to="/">Create Recipes</Link>
              </span>
              <span>
                <Link to="/recipes">My Recipes</Link>
              </span>
              <span>
                <Link to="/shoppinglist">Shopping List</Link>
              </span>
              <span>
                <a
                  href="#"
                  onClick={handleClick}
                  className="nav-logout"
                  style={{ alignSelf: 'center' }}
                >
                  Logout
                </a>
              </span>
            </div>
          </>
        ) : (
          <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
    </div>
  </div>
);

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
