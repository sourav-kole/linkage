import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div class="ui-frame">
      <header>
        <nav>
          <Link to={"home"}>Linkage</Link>
        </nav>
      </header>
      <article>
        <Outlet />
      </article>
      <footer>
        <Link to={"about"}>Copyright@2023</Link>
      </footer>
    </div>
  );
};

export default Layout;
