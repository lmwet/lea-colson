import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <div id="services" className="footer-blurb">
            <div className="container">
                <div className="row">
                    <h1 className="page-header">Web Developpement</h1>
                    <img
                        className="img-circle"
                        src="/images/lmwet.png"
                        alt=""
                        width={100}
                        height={100}
                    />
                    <div className="col-lg-12">
                        <h3 className="page-header">Front End Code</h3>
                        <em>Single Page Applications</em>
                        <ul>
                            <li>React </li>
                            <li>View</li>
                            <li>HTML & CSS</li>
                        </ul>
                    </div>

                    <div className="col-lg-12">
                        <h3 className="page-header">Back End Code</h3>
                        <em>
                            Safe server-side codes and user-friendly Content
                            Management Systems
                        </em>
                        <ul>
                            <li>Node JS Express Server</li>
                            <li>Postres SQL, Database management</li>
                            <li>PHP // Wordpress Themes</li>
                            <li>
                                ProcessWire Content Management System: aka
                                wordpress for developpers
                            </li>
                            <li>
                                Hosting tips for websites and teams, deployment
                                on herokuapp.com
                            </li>
                        </ul>
                    </div>
                    <div className="white-space"></div>
                </div>

                {/* Design */}
                <div className="row">
                    <h1 className="page-header">Design</h1>
                    <img
                        className="img-circle"
                        src="/images/design.png"
                        alt="design"
                        width={120}
                        height={100}
                    />
                    <div className="col-lg-12">
                        <h3 className="page-header">Adobe Photoshop</h3>
                        <em>Graphics in movement</em>
                        <ul>
                            <li>
                                Layouts for Flyers, Posters, Brochures, Fanzines
                                and Web
                            </li>
                            <li>Designs for social media communication</li>
                            <li>Whatsapp, Instagram Stickers</li>
                            <li>
                                Layouts in Arabic & Persian alphabets possible
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-12">
                        <h3 className="page-header">Adobe Illustrator </h3>
                        <em>Logos that fit</em>
                        <ul>
                            <li>Vector logo designs</li>
                            <li>Logo vectorisation</li>
                            <li>
                                Vector images in Arabic & Persian alphabets
                                possible
                            </li>
                        </ul>
                    </div>
                    <div className="white-space"></div>
                </div>

                {/* Illustration */}
                <div className="row">
                    <h1 className="page-header">Illustration</h1>
                    <img
                        className="img-circle"
                        src="/images/illus.png"
                        alt=""
                        width={170}
                        height={130}
                    />
                    <div className="col-lg-12">
                        <h3 className="page-header">
                            Hand drawings and aquarelles{" "}
                        </h3>
                        <em>Web for humans</em>
                        <ul>
                            <li>
                                Hand made illustrations for Websites, Posters,
                                Newspapers, etc. See{" "}
                                <Link to="/print">Print Design</Link>
                            </li>
                            <li>Designs for social media communication</li>
                            <li>Whatsapp, Instagram Stickers</li>
                            <li>
                                Layouts in Arabic & Persian alphabets possible
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-12">
                        <h3 className="page-header">Printworks</h3>
                        <em>Printing know-how</em>
                        <ul>
                            <li>
                                Design for your merch: postcards, bags, labels,
                                stickers, textiles, etc.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="white-space"></div>
            </div>
        </div>
    );
}
