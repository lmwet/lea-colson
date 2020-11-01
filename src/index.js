import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./App";
import Me from "./components/me";
import Lmwet from "./components/lmwet";
import Contact from "./components/contact";
import Navtop from "./components/nav";
import Services from "./components/services";
import Projects from "./components/projects";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./scrolltotop";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <Navtop></Navtop>
    <ParallaxProvider>
      <Switch>
        <React.StrictMode>
          <Route exact path="/" component={App} />
          <Route exact path="/lmwet" component={Lmwet} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/me" component={Me} />
        </React.StrictMode>
      </Switch>
      <Contact></Contact>
    </ParallaxProvider>
  </HashRouter>,

  document.getElementById("root")
);
serviceWorker.unregister();
