import React from "react";
import Projectrow from "../projectrow";

export default function Row4() {
  const content = {
    sectionTitle: "PHP",
    titleLeft: "Fairyfiles",
    imageLeft: "/images/ff.png",
    altLeft: "Fairyfiles-logo",
    textLeft:
      "A website with a very userfriendly and opensource Content Management System: Processwire. written in PHP, its API is very accessible to JQuery developpers. Illustrations and design made in collaboration with Luezlez Sol.",
    // gitLeft: "https://github.com/lmwet/scratch",
    urlLeft: "https://fairyfiles.org/",
    titleRight: "Reproduktive Gerechtigkeit",
    imageRight: "/images/repro.png",
    altRight: "Reproduktive-Gerechtigkeit",

    textRight:
      "A wordpress website commissionned by the Heinrich Böhl Stiftung. A very slick design and based on its own wordpress theme. Logo also created by Lmwet.",
    urlRight: "https://repro-gerechtigkeit.de/",
  };

  return <Projectrow content={content}></Projectrow>;
}
