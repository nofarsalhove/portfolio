import React, { Component } from "react";
import "./App.css";
import "../src/styles/app.scss";
import { Link } from "react-router-dom";
import $ from "jquery";

import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

class App extends Component {
  state = {
    visibility: "hidden",
    opacity: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollBtn);
  }

  // this function is activated when the user scrolls the screen
  handleScrollBtn = () => {
    let { visibility, opacity } = this.state;
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      visibility = "visible";
      opacity = 1;
    } else {
      visibility = "hidden";
      opacity = 0;
    }
    this.setState({ visibility, opacity });
  };

  // scrolling the screen to the top
  handleScrollToTop = e => {
    e.preventDefault();
    let href = e.currentTarget.href;
    href = href.split("#")[1];
    href = "#" + href;
    $("html, body").animate({ scrollTop: $(href).offset().top }, 600);
  };

  render() {
    const { visibility, opacity } = this.state;
    return (
      <React.Fragment>
        <div className="App" id="top">
          <nav className="w-100">
            <div className="social-link d-none d-lg-block">
              <a href="https://github.com/nofarsalhove" className="nav-link">
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nofar-salhove/"
                className="nav-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            <Navbar />
          </nav>

          <header className="text-white">
            <Header />
          </header>

          <main>
            <About />
            <Projects />
          </main>

          <footer>
            <Contact />
            <Link to="#top" onClick={e => this.handleScrollToTop(e)}>
              <i
                className="fas fa-arrow-up"
                id="to-top-btn"
                style={{
                  visibility,
                  opacity
                }}
              ></i>
            </Link>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

AOS.init({
  once: true
});

export default App;
