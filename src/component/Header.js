import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/users" exact activeClassName="active">
          Users
        </NavLink>
        <NavLink to="/contact" exact activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/admin" exact activeClassName="active">
          Admin
        </NavLink>
        <NavLink to="/login" exact activeClassName="active">
          Login
        </NavLink>
      </nav>
    </header>
  );
};
