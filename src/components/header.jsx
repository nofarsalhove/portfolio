import React, { Component } from "react";
import Typist from "react-typist";
import { Link } from "react-router-dom";
import $ from "jquery";

class Header extends Component {
  state = {};

  handleScrollToContact = e => {
    e.preventDefault();
    // scrolling to the section that the user choose
    let href = e.currentTarget.href;
    href = href.split("#")[1];
    href = "#" + href;
    $("html, body").animate({ scrollTop: $(href).offset().top }, 1200);
  };

  render() {
    return (
      <React.Fragment>
        <Link
          // className="btn"
          to="#contact"
          id="header-btn"
          onClick={e => this.handleScrollToContact(e)}
        >
          Let's Talk <i className="fas fa-arrow-right"></i>
        </Link>
        <div className="container d-flex align-items-center">
          <div className="row">
            <div className="main-title">
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={500} />
                <p className="tag mb-3">&lt;html&gt;</p>
              </Typist>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={1000} />
                <p className="tag mb-5 ml-md-4">&lt;body&gt;</p>
              </Typist>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={1500} />
                <h1 className="name-title pl-md-5">
                  <span className="tag">&lt;h1&gt;</span>&nbsp; Hi, I'm Nofar
                  Salhove&nbsp;&nbsp;
                  <span className="tag">&lt;&#47;h1&gt;</span>
                </h1>
              </Typist>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={4700} />
                <p
                  data-text="A Full Stack Web Developer"
                  className="profession mb-5 ml-md-5"
                >
                  <span className="tag">&lt;p&gt;</span>
                  <span className="mx-4 mx-md-5">
                    A Full Stack Web Developer
                  </span>
                  <span className="tag">&lt;&#47;p&gt;</span>
                </p>
              </Typist>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={7900} />
                <p className="tag mb-3 ml-md-4">&lt;&#47;body&gt;</p>
              </Typist>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={8500} />
                <p className="tag mb-0">&lt;&#47;html&gt;</p>
              </Typist>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
