import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img
          src="https://cdn.pixabay.com/photo/2015/05/03/17/49/design-751452__340.png"
          alt="logo"
          height="50px"
          width="auto"
        />
      </Link>
      <ul className="nav-links">
        <li className="nav-item">
          <span>
            <Link to="/">Home</Link>
          </span>
        </li>
        <li className="nav-item">
          <span>
            <Link to="/add">Create Student</Link>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
