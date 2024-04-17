import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Etusivu 🏠</Link>
          <Link to="/profile">Profile 🦩️(～￣▽￣)～</Link>
          <Link to="/upload">Upload 🌱</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <footer>Copyright 2024</footer>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
