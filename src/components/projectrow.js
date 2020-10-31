import React from "react";

export default function Projectrow({ content }) {
  return (
    <div id={content.sectionTitle} className="container">
      <div className="row">
        <h2>{content.sectionTitle}</h2>
        <div className="col-md-6 portfolio-item">
          <a href={content.urlLeft}>
            <img
              id={content.altLeft}
              className="img-responsive"
              src={content.imageLeft}
              alt={content.altLeft}
            />
          </a>
          <h3>
            <a href={content.urlLeft}>{content.titleLeft}</a>
          </h3>
          <p>{content.textLeft}</p>

          <a href={content.gitLeft}>{content.gitLeft}</a>
        </div>

        <div className="col-md-6 portfolio-item">
          <a href={content.urlRight}>
            <img
              id={content.altRight}
              className="img-responsive"
              src={content.imageRight}
              alt={content.altRight}
            />
          </a>
          <h3>
            <a href={content.urlRight}>{content.titleRight}</a>
          </h3>
          <p>{content.textRight}</p>
          <a href={content.gitRight}>{content.gitRight}</a>
        </div>
      </div>
    </div>
  );
}
