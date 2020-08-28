import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class Navbar extends Component {
  state = {
    links: [
      {
        lable: "About",
        to: "#about",
        scrollDuration: 500
      },
      {
        lable: "Projects",
        to: "#project",
        scrollDuration: 800
      },
      {
        lable: "Contact",
        to: "#contact",
        scrollDuration: 1200
      }
    ],
    isNavOpen: false,
    sidenavClass: "navbar-nav mx-auto d-none d-lg-flex"
  };

  // this function is activated when the user clicked on the toggle bars
  handleNav = e => {
    let { isNavOpen, sidenavClass } = this.state;
    let toggleBtn = e.currentTarget;
    // if the navbar is closed, it will opend (d-flex)
    if (sidenavClass === "navbar-nav mx-auto d-none d-lg-flex") {
      sidenavClass = "navbar-nav mx-auto d-flex d-lg-flex";
      // adding a class that makes the icon to be in fixed position
      toggleBtn.className = "btn navbar-toggler d-lg-none p-fixed";
      // else if it's open, it will closed (d-none)
    } else {
      sidenavClass = "navbar-nav mx-auto d-none d-lg-flex";
      // remove the icon fixed position (we don't want it to be also fixed position when it closed)
      toggleBtn.className = "btn navbar-toggler d-lg-none";
    }
    // we update the state and change the isNavOpen according to the navbar state - that it show bars/close icon
    this.setState({ isNavOpen: !isNavOpen, sidenavClass });
  };

  // this function is activated when the user clicked on a nav link in the navigation and this is will closed the navbar
  handleCloseNav = (e, scrollDuration) => {
    e.preventDefault();
    let { isNavOpen, sidenavClass } = this.state;
    // getting the collapse element in the DOM
    let collapse = e.currentTarget.parentNode.parentNode.parentNode;
    // removing the show class that shows the navbar
    collapse.className = "collapse navbar-collapse";
    // closing the navbar
    sidenavClass = "navbar-nav mx-auto d-none d-lg-flex";
    // getting the toggle buttom (sibling of collapse class element)
    let toggleBtn = collapse.previousSibling;
    // remove the icon fixed position (we don't want it to be also fixed position when it closed)
    toggleBtn.className = "btn navbar-toggler d-lg-none";
    // update the state and change the toggle icon accordingly
    this.setState({ isNavOpen: !isNavOpen, sidenavClass });

    // scrolling to the section that the user choose
    this.scrollToSection(e, scrollDuration);
  };

  scrollToSection(e, scrollDuration) {
    //getting the name of the section from the attribute href
    let href = e.currentTarget.href;
    // getting only the name of the section that the user choose
    href = href.split("#")[1];
    href = "#" + href;
    $("html, body").animate(
      { scrollTop: $(href).offset().top },
      scrollDuration
    );
  }

  render() {
    const { links, isNavOpen, sidenavClass } = this.state;
    return (
      <nav className="navbar navbar-expand-lg text-center d-flex justify-content-center ">
        <button
          className="btn navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          onClick={e => this.handleNav(e)}
        >
          {/* if the navbar is open, the close icon will show, else the bars icon */}
          <i className={isNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={sidenavClass}>
            {links.map((link, index) => {
              return (
                <li className="nav-item mx-lg-3" key={index}>
                  <Link
                    className="nav-link pb-1"
                    to={link.to}
                    onClick={e => this.handleCloseNav(e, link.scrollDuration)}
                  >
                    {link.lable}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item social-link-li d-lg-none">
              <a href="https://github.com/nofarsalhove" className="nav-link">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nofar-salhove/"
                className="nav-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
