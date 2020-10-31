import React from "react";
import Projectrow from "../projectrow";

export default function Row2() {
  const content = {
    sectionTitle: "React",
    titleLeft: "Mews",
    imageLeft: "/images/mewsPF.png",
    altLeft: "Mews",
    textLeft:
      "A music web app in React and node JS using the open Spotify API. Long hours of musical research. Presenting artists and lists of tracks for the user to listen, publish and play back their personalized playlists, and add new tracks to a communitarian radio-mix.",
    gitLeft: "https://github.com/lmwet/mews",
    urlLeft: "https://m-e-w-s.herokuapp.com/",
    titleRight: "MushRoom",
    imageRight: "/images/MushRoomPF.png",
    altRight: "MushRoom",
    textRight:
      "A fantasy social network to plot and represent your cause, written in React + Redux, using web sockets for instant chat and wall publications. Create an account, search for allies, make friends, write on their walls, update your infos, plot, reset your password and of course, delete your account.",
    gitRight: "https://github.com/lmwet/mushroom",
    urlRight: "https://mushrooom.herokuapp.com/welcome",
  };

  return <Projectrow content={content}></Projectrow>;
}
