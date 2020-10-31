import React from "react";
import Projectrow from "../projectrow";

export default function Row5() {
  const content = {
    sectionTitle: "HTML CSS JS",
    titleLeft: "The Irksome Institute",
    imageLeft: "/images/ii.png",
    altLeft: "the-irksome-institute",
    textLeft:
      "An entirely hand-coded responsive website presenting the work of a young publishing collective. Logo and design by Lmwet.",
    urlLeft: "https://theirksome.de/",
    titleRight: "",
    // imageRight: "",
    // altRight: "",
    // textRight: "",
    // urlRight: "",
  };

  return (
    <React.Fragment>
      <Projectrow content={content}></Projectrow>
      <div className="white-space"></div>
      <div className="white-space"></div>
    </React.Fragment>
  );
}
