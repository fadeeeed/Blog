import React from "react";
import "./menu-bar-style.scss";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <ul className="menucontainer">
      <li className="list">
        <Link to="/">Home</Link>
      </li>
      <li className="list">
        <Link to="/programming">Programming Questions</Link>
      </li>
      <li className="list">
        <Link to="/terraform">Terraform</Link>
      </li>

      <li className="list">
        <Link to="/aws">Aws</Link>
      </li>
      <li className="list">
        <Link to="/react">React</Link>
      </li>
      <li className="list create">
        <Link to="/create">Create</Link>
      </li>
    </ul>
  );
};

export default MenuBar;
