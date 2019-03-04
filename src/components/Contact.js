import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <section className="contact">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-text">
          Have a question? We'd love to hear from you. We'll get back to you as
          soon as possible.
        </p>
        <form className="contact-form">
          <label className="contact-form-label">
            Name
            <input className="contact-form-text-input" type="text" />
          </label>
          <label className="contact-form-label">
            Email Address
            <input className="contact-form-text-input" type="text" />
          </label>
          <label className="contact-form-label">
            Message
            <textarea className="contact-form-textarea" />
          </label>
          <button role="submit">Submit</button>
        </form>
      </section>
    );
  }
}
