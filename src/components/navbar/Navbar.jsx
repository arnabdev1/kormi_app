import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

/**
 * Navbar component to render the main navigation bar of the application.
 * The component handles navigation links and user session display.
 */
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false, // State to manage whether the mobile menu is open
      user: true,  // Placeholder user state (boolean to simulate a logged-in user)
    };
  }

  /**
   * Toggles the mobile menu open/close state.
   */
  toggleMenu = () => {
    this.setState((prevState) => ({ open: !prevState.open }));
  };

  render() {
    const { open, user } = this.state;

    return (
      <nav>
        <div className="left">
          {/* Logo and navigation links */}
          <a href="/" className="logo">
            <img src="/logo.png" alt="Logo" />
          </a>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/1">Suggested</Link>
          <Link to="/list">Find a worker</Link>
        </div>

        <div className="right">
          {/* Conditional rendering for user-specific navigation */}
          {user ? (
            <div className="user">
              <img src="arnab.png" alt="User Profile" />
              <span>Arnab Dev</span>
              <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <a href="/">Sign in</a>
              <a href="/" className="register">
                Sign up
              </a>
            </>
          )}

          {/* Mobile menu toggle */}
          <div className="menuIcon">
            <img
              src="/menu.png"
              alt="Menu Icon"
              onClick={this.toggleMenu}
            />
          </div>

          {/* Mobile menu links */}
          <div className={open ? "menu active" : "menu"}>
            <Link to="/" onClick={this.toggleMenu}>
              Home
            </Link>
            <Link to="/login" onClick={this.toggleMenu}>
              Login
            </Link>
            <Link to="/register" onClick={this.toggleMenu}>
              Register
            </Link>
            <Link to="/1" onClick={this.toggleMenu}>
              <p>Suggested for you</p>
            </Link>
            <Link to="/list" onClick={this.toggleMenu}>
              Find a worker
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
