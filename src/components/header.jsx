import React, { Component } from "react";
import Typist from "react-typist";
// import { Link } from "react-router-dom";
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
        {/* <Link
          to="#contact"
          id="header-btn"
          onClick={e => this.handleScrollToContact(e)}
        >
          Let's Talk <i className="fas fa-arrow-right"></i>
        </Link> */}

        <section className="container d-flex align-items-center">
          <div className="row">
            <div className="main-title pl-3 pl-lg-0">
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={500} />
                <p className="tag mb-2">&lt;html&gt;</p>
              </Typist>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={1000} />
                <p className="tag ml-md-4 mb-5">&lt;body&gt;</p>
              </Typist>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={1500} />
                <span className="tag ml-md-5">&lt;h1&gt;</span>
                <h1 className="name-title pl-md-5">
                  <span className="ml-md-5">Hi,</span>
                  <br />
                  <span className="ml-md-5 mr-3">I'm Nofar Salhove</span>
                </h1>
                <span className="tag ml-md-5">&lt;&#47;h1&gt;</span>
              </Typist>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={4700} />
                <p
                  data-text="A Full Stack Web Developer"
                  className="profession ml-md-5 mb-5"
                >
                  <span className="tag">&lt;p&gt;</span>
                  <span className="mx-2 mx-md-3">
                    A Full Stack Web Developer
                  </span>
                  <span className="tag">&lt;&#47;p&gt;</span>
                </p>
              </Typist>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={7900} />
                <p className="tag mb-2 ml-md-4">&lt;&#47;body&gt;</p>
              </Typist>
              <Typist cursor={{ show: false }}>
                <Typist.Delay ms={8500} />
                <p className="tag mb-4">&lt;&#47;html&gt;</p>
              </Typist>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
