import React from "react";

export default class PhoneSection extends React.Component {
  render() {
    return (
      <section className="phone-cta">
        <h3 className="phone-cta-title">Always Available by Phone</h3>
        <a href="tel:+12097657264" className="phone-cta-button">
          209-765-7264
        </a>
      </section>
    );
  }
}
