import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
        </a>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {/* <Link to="/1">Deal of the day</Link>
        <Link to="/list">All</Link> */}
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="arnab.png" alt="" />
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
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/1">Deal of the day</Link>
          <Link to="/list">All</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
