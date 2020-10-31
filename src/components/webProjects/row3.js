import React from "react";
import Projectrow from "../projectrow";

export default function Row3() {
  const content = {
    sectionTitle: "View & Handlebars",
    titleLeft: "Sketch Scratch",
    imageLeft: "/images/boom.png",
    altLeft: "Scratch",
    textLeft:
      "A single page app in View JS for my friends to upload and comment our hand-made drawings.",
    gitLeft: "https://github.com/lmwet/scratch",
    urlLeft: "http://scratzch.herokuapp.com/",
    titleRight: "A Petition App for East River Park",
    imageRight: "/images/EastRiverPark.png",
    altRight: "",
    textRight:
      "A petition app in handlebars and node. Create an account, signe the petition with canvas, add your infos to a profile, unsigne the petition and check how many of us want the park to remain.",
    gitRight: "https://github.com/lmwet/east-river-petition",
    urlRight: "http://petition-east-river-park-lmwet.herokuapp.com/",
  };

  return <Projectrow content={content}></Projectrow>;
}
