import React, { Component } from "react";
import SectionTitle from "./section-title";

class Contact extends Component {
  state = {
    data: {},
    errors: {}
  };

  handleInput = e => {
    const inputValue = e.currentTarget.value;
    const inputField = e.currentTarget.name;
    const fieldNameForMsg = this.changeToTitleCase(inputField);
    let { data, errors } = this.state;
    if (inputField === "email") {
      let isValid = this.checkEmailValidity(inputValue);
      if (isValid) {
        delete errors[inputField];
        data[inputField] = inputValue;
      } else {
        errors[inputField] = `Email must be valid.`;
        delete data[inputField];
      }
    } else {
      if (inputValue.length < 2) {
        if (inputValue.length > 0) {
          errors[
            inputField
          ] = `${fieldNameForMsg} must contain at least 2 characters.`;
          delete data[inputField];
        } else {
          errors[inputField] = `${fieldNameForMsg} is required.`;
          delete data[inputField];
        }
      } else {
        delete errors[inputField];
        data[inputField] = inputValue;
      }
    }
    this.setState({ data, errors });
  };

  changeToTitleCase(fieldName) {
    return fieldName[0].toUpperCase() + fieldName.substr(1).toLowerCase();
  }

  checkEmailValidity(value) {
    const emailPattern = new RegExp(
      /^(?!.*\.\.)[\w.\-#!$%&'*+/=?^_`{}|~]{1,35}@[\w.-]+\.[a-zA-Z]{2,15}$/
    );
    return emailPattern.test(value);
  }

  render() {
    const { data, errors } = this.state;
    return (
      <section className="container-fluid py-5" id="contact">
        <div className="container">
          <SectionTitle title="Let's keep in touch" />

          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-duration="650"
            data-aos-delay="300"
          >
            <form
              method="POST"
              autoComplete="off"
              className="col-lg-6 text-center"
              name="contact"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={data.name}
                  placeholder="Name"
                  className="form-control"
                  onInput={e => this.handleInput(e)}
                />
                {errors.name && (
                  <span className="text-danger">{errors.name}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  placeholder="Email"
                  className="form-control"
                  onInput={e => this.handleInput(e)}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={data.subject}
                  placeholder="Subject"
                  className="form-control"
                  onInput={e => this.handleInput(e)}
                />
                {errors.subject && (
                  <span className="text-danger">{errors.subject}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  name="content"
                  id="content"
                  value={data.content}
                  rows="8"
                  placeholder="Content"
                  className="form-control"
                  data-gramm_editor="false"
                  spellCheck="false"
                  onInput={e => this.handleInput(e)}
                ></textarea>
                {errors.content && (
                  <span className="text-danger">{errors.content}</span>
                )}
              </div>
              <button
                disabled={Object.keys(data).length < 4}
                className="btn send-btn"
              >
                Send <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="social-links row justify-content-center mt-4">
            <a href="https://www.linkedin.com/in/nofar-salhove/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/nofar.salhove">
              <i className="fab fa-facebook-square"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
