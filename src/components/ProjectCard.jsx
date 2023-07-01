import React from "react";
import Button from "./Button";

function ProjectCard(props) {
  return (
    <article className="projects__card">
      <img
        src={require("../img/" + props.image)}
        alt=""
        className="projects__img"
      />

      <div className="projects__modal">
        <div>
          <span className="projects__subtitle">{props.subtitle}</span>
          <h3 className="projects__title">{props.title}</h3>
          <Button
            href={props.url}
            className="projects__button button button__small"
            icon="ri-link"
            target="_blank"
            type="button"
          />
          <a
            href={props.url}
            // target="_blank"
            className="projects__button button button__small"
          >
            <i className="ri-link"></i>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
