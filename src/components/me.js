import React from "react";
import { Parallax } from "react-scroll-parallax";

export default function Me() {
  return (
    <React.Fragment>
      <div id="contactme" className="footer-blurb">
        <h1 className="page-header">Contact</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 footer-blurb-item">
              <Parallax className="white-blob" x={[-135, 75]} tagOuter="figure">
                <a href="mailto:lea.colson@posteo.net">
                  <img
                    alt="lmwet"
                    id="lmwet"
                    className="img-responsive"
                    src="/images/lmwet.png"
                  />
                </a>
              </Parallax>
            </div>

            <Parallax className="white-blob" x={[-25, 55]} tagOuter="figure">
              <div id="black-blob" className="col-sm-4 footer-blurb-item">
                <a href="/images/CV_Colson_2020.pdf" download="CV_Lea_Colson">
                  <p id="download"> Download my CV</p>
                </a>
              </div>
            </Parallax>

            <Parallax className="white-blob" x={[175, -55]} tagOuter="figure">
              <div id="white-blob" className="col-sm-4 footer-blurb-item">
                <a href="mailto:lea.colson@posteo.net">
                  <span>Send me an email</span>
                </a>
              </div>
            </Parallax>
          </div>
          <Parallax className="white-blob" x={[175, -55]} tagOuter="figure">
            <div id="black-blob" className="col-sm-4 footer-blurb-item">
              <a href="tel:004915163050145">
                <p id="download">Or give me a call</p>
                <p id="download">+49 15163050145</p>
              </a>
            </div>
          </Parallax>

          <div className="white-space"></div>
          <div className="white-space"></div>
          <div className="white-space"></div>
          <div className="white-space"></div>
          <div className="white-space"></div>
          <div className="white-space"></div>
          <div className="white-space"></div>
          <div className="white-space"></div>
          <div className="white-space"></div>
          <div className="white-space"></div>
          <div className="white-space"></div>
          <div className="white-space"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
