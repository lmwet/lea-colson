import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Friends extends Component {
    render() {
        return (
            <div className="footer-blurb">
                <div className="container">
                    <h1 className="page-header">Best friends in arts</h1>
                    <div className="row">
                        <div className="col-sm-4 footer-blurb-item">
                            <img
                                className="img-circle"
                                src="/images/juckl.jpeg"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <h3>Juckl</h3>
                            <p className="friend-text">
                                Julia Entner is a critical visual artist that
                                makes the most stunning water color paintings
                                ever seen and empowered me into drawing. Contact
                                them for color expertise, art and art-pedagogy
                                for kids and adults.
                            </p>
                            <p>
                                <a
                                    className="btn btn-primary knopf"
                                    href="mailto:J.Entner@gmx.de"
                                >
                                    Contact
                                </a>
                            </p>
                        </div>
                        <div className="col-sm-4 footer-blurb-item">
                            <img
                                className="img-circle"
                                src="/images/lou.png"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <h3>Luezley Sol</h3>
                            <p className="friend-text">
                                A web and print artist based in Brazil. Also
                                designing flyers and grafics for social media,
                                makes the most graceful, sensitive
                                illustrations. Partner-designer on the book fair
                                communication and website of{" "}
                                <a href="https://fairyfiles.org">Fairyfiles</a>.
                            </p>
                            <p>
                                <a
                                    className="btn btn-primary knopf"
                                    href="mailto:preciosoesmeraldo@gmail.com"
                                >
                                    Contact
                                </a>
                            </p>
                        </div>
                        <div className="col-sm-4 footer-blurb-item">
                            <img
                                className="img-circle"
                                src="/images/amanda.jpeg"
                                alt=""
                                width={100}
                                height={100}
                            />
                            <h3>Amanda Priebe</h3>
                            <p className="friend-text">
                                Amanda is a printmaker and mixed media artist.
                                We worked together on various{" "}
                                <Link to="/print">print design projects</Link>.
                                Currently based out of Berlin, Germany, her work
                                can be found in streets and galleries locally
                                and internationally. Visit her website and
                                contact her for illustrations.
                            </p>
                            <p>
                                <a
                                    className="btn btn-primary knopf"
                                    href="https://www.amandapriebe.com/"
                                >
                                    More
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
