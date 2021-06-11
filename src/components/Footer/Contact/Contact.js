import React from "react";
import style from "./Contact.module.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", subject: "", message: "" };
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  getMailtoUrl(to, name, subject, body) {
    let bodyNew = body;
    if (typeof name !== "undefined") {
      bodyNew = bodyNew + "\n\nFrom " + name + "\n";
    }

    bodyNew = bodyNew + "\n Sent from Ben's Website";

    var args = [];
    if (typeof subject !== "undefined") {
      args.push("subject=" + encodeURIComponent(subject));
    }
    if (typeof bodyNew !== "undefined") {
      args.push("body=" + encodeURIComponent(bodyNew));
    }

    var url = "mailto:" + encodeURIComponent(to);
    if (args.length > 0) {
      url += "?" + args.join("&");
    }
    return url;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = this.getMailtoUrl(
      "wbmcintyre@outlook.com",
      this.state.name,
      this.state.subject,
      this.state.message
    );
  };

  render() {
    return (
      <section className={style.contact} id="contact">
        <h2 className={style.contact__title}>Contact</h2>
        <p className={style.contact__paragraph}>
          Feel free to send an e-mail to{" "}
          <a
            className={style.contact__link}
            href="mailto:wbmcintyre@outlook.com"
          >
            wbmcintyre@outlook.com
          </a>
        </p>
        <form className={style.contact__form} onSubmit={this.handleSubmit}>
          <div className={style.contact__formSection}>
            <input
              className={style.contact__formInput}
              onChange={this.handleChange}
              id="name"
              type="text"
              required
              name="name"
            ></input>
            <label htmlFor="name" className={style.contact__formLabel}>
              Name
            </label>
          </div>
          <div className={style.contact__formSection}>
            <input
              className={style.contact__formInput}
              onChange={this.handleChange}
              type="text"
              required
              name="subject"
            ></input>
            <label htmlFor="name" className={style.contact__formLabel}>
              Subject
            </label>
          </div>
          <div className={style.contact__formSection}>
            <textarea
              className={style.contact__formMessage}
              onChange={this.handleChange}
              required
              name="message"
            ></textarea>
            <label htmlFor="name" className={style.contact__formLabel}>
              Your Message
            </label>
          </div>
          <button className={style.contact__formSubmitButton} type="submit">
            Send
          </button>
        </form>
      </section>
    );
  }
}

export default Contact;
