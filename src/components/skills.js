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
            <li className="word">Node JS</li>
            <Link to="/projects">
              <li className="word2">Vue JS</li>
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
          <ul>
            <li className="experience">
              2019 until now: Lea Colson is a <em>free-lance web developper</em>{" "}
              since 2019. In January 2020 she joined a cohort at{" "}
              <a href="https://www.spiced-academy.com">Spiced Academy</a> Web
              Full-Stack Bootcamp.
            </li>
            <li className="experience">
              <em>Project coordinator</em> at{" "}
              <a href="https://www.damigra.de/">DaMigra e.V.</a>. Management of
              the local branch of MUT Project, coordination of the Berlin
              network and administrative tasks for the activities of migrant
              women supporting refugee women in their economical and political
              developpement.
            </li>
            <li className="experience">
              After her arrival in Berlin, she has been a{" "}
              <em>language teacher and interpreter</em> for German, English and
              French languages.{" "}
            </li>
            <li className="experience">
              Lmwet studied philosophy and law in Paris.
            </li>
            <li className="experience">
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
              عَرَبِيّ‎ (Arabic, basics of levantine dialect and fussha,
              reading, writing)
            </li>
          </ul>
        </div>

        {/* Skills */}

        {/* Skills */}
        <div className="languages">
          <div className="white-space"></div>

          <h3 className="cv-title" x={40}>
            More skills
          </h3>
          <div className="row">
            <div className="col-sm-4">
              <h4>Project management </h4>
              <img
                className="img-circle"
                src="/images/manitas.png"
                alt=""
                width={200}
                height={200}
              />
              <p className="friend-text">
                Working in a healthy environment is a bless. Team work relies on
                good communication and transparency.
              </p>
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
              <p className="friend-text">
                Teaching is learning. I love to learn new words and new worlds.
              </p>
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
              <p className="friend-text">
                Weekend is on! Football and music. Playing accordion as an urban
                secret garden.
              </p>
            </div>
          </div>
          <div className="white-space"></div>
          <div className="white-space"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
