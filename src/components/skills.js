import React from "react";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <React.Fragment>
      {/* Dev */}

      <div className="container">
        <h3 className="cv-title" x={40}>
          Full Stack Web Developpement
        </h3>
        <Link to="/services"> See all services</Link>
        <div className="skills">
          <ul className="dev">
            <Link to="/projects">
              {" "}
              <li className="word">
                React <span>Hooks Router Redux</span>
              </li>
            </Link>
            <li className="word">Node JS </li>
            <Link to="/projects">
              <li className="word2">View JS</li>
            </Link>
            <Link to="/projects">
              <li className="word2">ProcessWire CMS</li>
            </Link>
            <li className="word">Postgres SQL</li>
            <li className="word2">Vanilla JS</li>
            <Link to="/projects">
              <li className="word">Handlebars</li>
            </Link>
            <li className="word2">JQuery</li>
          </ul>
          <div className="white-space"></div>
        </div>

        {/* Experience */}
        <div className="languages">
          <div className="white-space"></div>
          <h3 className="cv-title" x={40}>
            Professional experience
          </h3>
          <ul className="experience">
            <li>Lmwet studied philosophy and law in Paris.</li>
            <li>
              In Berlin, she has been a{" "}
              <em>language teacher and interpreter</em> for German, English and
              French languages.{" "}
            </li>
            <li>
              With a passion for social justice, she became active in various
              collective adventures and worked as a <em>project coordinator</em>{" "}
              in an NGO: <a href="https://www.damigra.de/">DaMigra e.V.</a>.
            </li>
            <li>
              She discovered coding on her own, started to free lance as a
              <em>web-designer</em> in 2018 until she joined a cohort at{" "}
              <a href="https://www.spiced-academy.com">Spiced Academy</a> in
              January 2020.
            </li>
            <li>
              Researching, learning new skills and new languages independantly
              has always been an important part of her ongoing creative
              processes. Noticeably ending up nourishing a rich professional
              life.{" "}
            </li>
          </ul>
        </div>

        {/* Languages */}
        <div className="languages">
          <div className="white-space"></div>
          <h3 className="cv-title" x={40}>
            Languages
          </h3>
          <ul className="languages">
            <li>German (fluent)</li>
            <li>English (fluent)</li>
            <li>French (mother tongue)</li>
            <li>Spanish (fluent)</li>
            <li>
              عَرَبِيّ‎ (Arabic, basics of lavantin dialect, reading, writing)
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="languages">
          <div className="white-space"></div>

          <h3 className="cv-title" x={40}>
            More skills
          </h3>
          <div className="row">
            <div className="col-sm-4">
              <h4>Project management // Team work</h4>
              <img
                className="img-circle"
                src="/images/manitas.png"
                alt=""
                width={300}
                height={200}
              />
            </div>

            <div className="col-sm-4">
              <h4>Translation & language pedagogy</h4>
              <img
                className="img-circle"
                src="/images/trad.png"
                alt=""
                width={200}
                height={200}
              />
            </div>

            <div className="col-sm-4">
              <h4>Playing accordion</h4>
              <img
                className="img-circle"
                src="/images/bb.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="white-space"></div>
          <div className="white-space"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
