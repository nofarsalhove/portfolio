import React, { Component } from "react";

class CreateProjectCard extends Component {
  state = {};

  render() {
    const {
      title,
      image,
      techs,
      webLink,
      gitLink,
      animationDelay
    } = this.props;
    return (
      <div
        className="project-container col-10 col-md-10 col-lg-5 mb-4 px-0 mx-sm-2 "
        data-aos="zoom-in"
        data-aos-delay={animationDelay}
      >
        <section className="project-description text-white py-3 text-center">
          <h2 className="card-title">{title}</h2>
          <div className="techs card-text">
            {techs.map((tech, index) => {
              if (index === techs.length - 1) {
                return <span key={index}> {tech}</span>;
              }
              return <span key={index}> {tech} |</span>;
            })}
          </div>
          <nav className="project-links">
            <a href={gitLink} className="nav-link git-icon">
              <i className="fab fa-github"></i>
            </a>
            {webLink && (
              <a href={webLink} className="nav-link glob-icon ml-3">
                <i className="fas fa-globe "></i>
              </a>
            )}
          </nav>
        </section>

        <img src={image} className="img-fluid" alt={title} />
      </div>
    );
  }
}

export default CreateProjectCard;
