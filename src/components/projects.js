import React from "react";
import Row2 from "./webProjects/row2";
import Row3 from "./webProjects/row3";
import Row4 from "./webProjects/row4";
import Row5 from "./webProjects/row5";

export default function Project() {
  return (
    <React.Fragment>
      <div id="projects" className="container">
        <Row2></Row2>
        <Row3></Row3>
        <Row4></Row4>
        <Row5></Row5>
      </div>
    </React.Fragment>
  );
}
