import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <a href="#" className="logo">
        <img
          src="https://cdn.pixabay.com/photo/2015/05/03/17/49/design-751452__340.png"
          alt="logo"
          height="50px"
          width="auto"
        />
      </a>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#">
            <Link to="/">Home</Link>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <Link to="/add">Create Student</Link>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
