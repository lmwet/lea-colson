import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="copyright">
        <div className="container">
          <p>
            All open source codes presented are on my{" "}
            <a href="https://github.com/lmwet/">Github</a>
          </p>
          <p>Mariannenplatz 5, 10997 Berlin</p>
          <a href="mailto:lea.colson@gmail.com">
            {" "}
            <span
              className="glyphicon glyphicon-envelope"
              aria-hidden="true"
            ></span>{" "}
            Write me
          </a>
          <p>
            <span
              className="
                    glyphicon glyphicon-copyright-mark"
            ></span>{" "}
            Lea Colson 2020
          </p>
        </div>
      </div>
    );
  }
}
