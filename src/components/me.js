import React from "react";

export default function Me() {
    return (
        <React.Fragment>
            <div id="contactme" className="footer-blurb">
                <h1 className="page-header">Contact</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 footer-blurb-item">
                            <a href="mailto:lea.colson@gmail.com">
                                <img
                                    alt="lmwet"
                                    id="lmwet"
                                    className="img-responsive"
                                    src="/images/lmwet.png"
                                />
                            </a>
                        </div>
                        <div className="col-sm-4 footer-blurb-item">
                            <a href="mailto:lea.colson@gmail.com">
                                <p>Send me an email</p>
                            </a>
                            <a href="tel:0049015163050145">
                                <p>Or give me a call: +49 015163050145</p>
                            </a>
                        </div>
                    </div>

                    <div className="white-space"></div>
                </div>
            </div>
        </React.Fragment>
    );
}
