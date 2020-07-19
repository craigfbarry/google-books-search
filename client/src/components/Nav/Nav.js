import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <a className="navbar-brand" href="/">
        Book Search
      </a>
      <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ">
              <li className="nav-item nav-link btn">
                  <Link to="/" className={location.pathname === "/Home" ? "nav-link active" : "nav-link"}>
                      Search
                  </Link>
              </li>
              <li className="nav-item nav-link btn">
                  <Link to="/Saved" className={location.pathname === "/Saved" ? "nav-link active" : "nav-link"}>
                      Saved
                  </Link>

              </li>
          </ul>
      </div>
    </nav>
  );
}

export default Nav;