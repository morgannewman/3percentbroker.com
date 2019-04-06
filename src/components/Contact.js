import React from "react";

export default class Contact extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const message = this.message.value;
    const email = this.email.value;
    const name = this.name.value;

    return fetch('https://a71fd72cnj.execute-api.us-west-2.amazonaws.com/dev/contact', {
      method: 'POST',
      body: JSON.stringify({ message, name, email }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(function(res) {
        console.log(res.status);
      })
      .catch(function(err) {});
  }

  render() {
    return (
      <section className="contact" id="contact">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-text">
          Have a question? We'd love to hear from you.
        </p>
        <form className="contact-form">
          <div className="contact-form-input-group">
            <label htmlFor="contact-form-name" className="contact-form-label">
              Name
            </label>
            <input
              id="contact-form-name"
              className="contact-form-text-input"
              type="text"
              ref={name => this.name = name}
              required
            />
          </div>
          <label htmlFor="contact-form-email" className="contact-form-label">
            Email Address
          </label>
          <input
            id="contact-form-email"
            className="contact-form-text-input"
            type="email"
            ref={email => this.email = email}
            required
          />
          <label htmlFor="contact-form-message" className="contact-form-label">
            Message
          </label>
          <textarea
            id="contact-form-message"
            className="contact-form-textarea"
            ref={message => this.message = message}
          />
          <button onClick={this.handleSubmit} type="submit">Submit</button>
        </form>
      </section>
    );
  }
}
