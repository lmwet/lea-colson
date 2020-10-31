import React from "react";
import Projectrow from "./projectrow";
import { Parallax } from "react-scroll-parallax";
// import { Link } from "react-router-dom";

export default function Lmwet() {
  const content = {
    sectionTitle: "",
    titleLeft: "",
    imageLeft: "/images/lmwet.png",
    altLeft: "lmwet",
    textLeft: "",
    urlLeft: "https://github.com/lmwet/",
    // titleRight: "",
    // imageRight: "",
    // altRight: "",
    // textRight: "",
    // urlRight: "",
  };

  return (
    <React.Fragment>
      {/* Seagull */}
      <Parallax className="lmwet" x={[-50, 70]} tagOuter="figure">
        <Projectrow content={content}></Projectrow>
      </Parallax>
    </React.Fragment>
  );
}
