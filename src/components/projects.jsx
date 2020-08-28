import React, { Component } from "react";
import SectionTitle from "./section-title";
import hitMeUp from "../assets/images/projects/hitMeUp.jpg";
import flashCrm from "../assets/images/projects/flashCrm.jpg";
import hiJobIL from "../assets/images/projects/hiJobsIL.jpg";
import portfolio from "../assets/images/projects/portfolio.JPG";
import CreateProjectCard from "./create-project-card";

class Projects extends Component {
  state = {
    projects: [
      {
        title: "Hit Me Up",
        image: hitMeUp,
        techs: ["Javascript", "RestApi"],
        webLink: "https://hit-me-up.netlify.app/",
        gitLink: "https://github.com/nofarsalhove/hit-me-up",
        animationDelay: 0
      },
      {
        title: "Flash CRM",
        image: flashCrm,
        techs: ["Angular", "Firebase"],
        webLink: "https://flash-crm.web.app/",
        gitLink: "https://github.com/nofarsalhove/flash-crm",
        animationDelay: 200
      },
      {
        title: "Hi-JobsIL",
        image: hiJobIL,
        techs: ["React", "Node.js", "MongoDB"],
        gitLink: "https://github.com/nofarsalhove/hi-jobs-il",
        animationDelay: 400
      },
      {
        title: "My Portfolio",
        image: portfolio,
        techs: ["React"],
        webLink: "https://www.nofarsalhove.com/",
        gitLink: "https://github.com/nofarsalhove/portfolio",
        animationDelay: 600
      }
    ]
  };
  render() {
    const { projects } = this.state;
    return (
      <section className="container-fluid py-5" id="project">
        <div className="container">
          <SectionTitle title="Projects" />

          <div className="row justify-content-center">
            {projects.map((project, index) => {
              const {
                title,
                image,
                techs,
                webLink,
                gitLink,
                animationDelay
              } = project;
              return (
                <CreateProjectCard
                  key={index}
                  title={title}
                  image={image}
                  techs={techs}
                  webLink={webLink}
                  gitLink={gitLink}
                  animationDelay={animationDelay}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
