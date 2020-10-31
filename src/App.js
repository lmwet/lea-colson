import React from "react";
import Friends from "./components/friends";
import List from "./components/list";
import Lmwet from "./components/lmwet";
import Skills from "./components/skills";

export default function App() {
    return (
        <div id="me">
            <div id="colorlib-page">
                <div id="container-wrap">
                    <List></List>
                    <div id="colorlib-main">
                        <Lmwet></Lmwet>
                        <Skills></Skills>
                        <Friends></Friends>
                    </div>
                </div>
            </div>
        </div>
    );
}
