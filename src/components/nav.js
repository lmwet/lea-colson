import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navtop extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-inverse navbar-fixed-top"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to="/" className="navbar-brand">
                Lmwet
              </Link>
            </div>
            {/* Navbar links */}
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <Link
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1.navbar-collapse.collapse.in"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1.navbar-collapse.collapse.in"
                    to="/projects"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1.navbar-collapse.collapse.in"
                    to="/me"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.container */}
        </nav>
        {/* Content */}
      </div>
    );
  }
}
