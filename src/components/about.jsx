import React, { Component } from "react";
import me from "../assets/images/me.JPG";
import TechIcon from "./techIcon";
import SectionTitle from "./section-title";

class About extends Component {
  state = {
    techs: [
      "html5-plain",
      "css3-plain",
      "bootstrap-plain",
      "sass-original",
      "javascript-plain",
      "jquery-plain-wordmark jquery",
      "react-original",
      "angularjs-plain",
      "nodejs-plain",
      "express-original-wordmark express pt-2",
      "php-plain php pt-1",
      "mysql-plain-wordmark mysql",
      "mongodb-plain-wordmark mongo"
    ]
  };

  render() {
    const { techs } = this.state;
    return (
      <div className="container-fluid py-5" id="about">
        <div className="container">
          <SectionTitle title="About Me" />

          <div className="row mb-5">
            <div className="col-10 col-lg-5 mx-auto">
              <img
                src={me}
                alt="me"
                className="img-fluid rounded-circle"
                data-aos="fade-left"
                data-aos-duration="600"
              />
            </div>
            <div className="col-lg-7 d-flex align-items-center pt-4 pt-lg-0">
              <div
                className="px-lg-4"
                data-aos="fade-right"
                data-aos-duration="600"
              >
                <p>
                  I'm Nofar, a Full-Stack Web developer and I live in Givatayim.
                  <br />
                  I own a B.sc in Computer Science with exellence and am also a
                  Full-Stack developer course graduate.
                  <br />
                  Generally, I love building things from scratch, step by step
                  (a big puzzle enthusiast!). The same passion also applies for
                  me regarding WEB development, where tiny pieces are assembled
                  together in order to create a wider picture.
                </p>
                <p className="mb-0">
                  My knowledge spans the following technologies:
                </p>
                <div className="row align-items-center px-3 mt-2 mb-3 my-lg-0 justify-content-center">
                  {techs.map((tech, index) => {
                    return <TechIcon classes={tech} key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
