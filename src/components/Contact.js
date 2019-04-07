import React from "react";
import * as Sentry from '@sentry/browser';

import checkmark from '../assets/svg/checkmark.svg';
import { goFetch } from './helpers';
import Loading from './Loading';

export default class Contact extends React.Component {
  state = {
    error: null,
    state: 'open' // ('open', 'submitting', 'submitted')
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const message = this.message.value;
    const email = this.email.value;
    const name = this.name.value;

    this.setState({ error: null, state: 'submitting' }, () => {
  
      return goFetch('/contact', {
        method: 'POST',
        body: ({ message, name, email }),
      })
        .then((res) => {
          return this.setState({ error: null, state: 'submitted' });
        })
        .catch((err) => {
          Sentry.captureException(err);
          // On error, reopen form and restore input
          this.setState({
            state: 'open',
            error: 'Whoops, something went wrong. Please try again.',
          }, () => {
            this.message.value = message;
            this.email.value = email;
            this.name.value = name;
          });
        });
    })
  }

  renderOtherFormStates = () => {
    const {state} = this.state;
    
    switch (state) {
      default:
      case 'submitting':
        return (
          <div>
            <Loading />
            <p className="contact-form-submitting-text">Submitting...</p>
          </div>
        );
      case 'submitted':
        return (
          <div>
          <img src={checkmark} alt="" className="contact-form-success-icon" />
          <p className="contact-form-success-text">Thanks for submitting!<span className="contact-form-success-text__two">We usually reply within an hour or two.</span></p>
          </div>
        );
    }
  }

  render() {
    const { error } = this.state;
    const showForm = this.state.state === 'open';

    return (
      <section className="contact" id="contact">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-text">
          Have a question? We'd love to hear from you.
        </p>
        {error && <p className="contact-error" role="alert">{error}</p>}
        {showForm ? (
          <form className="contact-form" onSubmit={this.handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
        ) : (
          this.renderOtherFormStates()
        )}
      </section>
    );
  }
}
