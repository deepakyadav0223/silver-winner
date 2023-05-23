import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navb">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/India">
                  India
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Usa">
                  USA
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/China">
                  China
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Japan">
                  Japan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Nor">
                  Norway
                </Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set title here....",
};