import React from 'react';

import CTAButton from './common/CTAButton';
import Nav from './common/Nav';

export default class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <Nav />
        <div className="hero-content">
          <h1 className="hero-title">
            Traditional Real Estate Services, On Sale
          </h1>
          <ul className="hero-list">
            <li>Save Thousands</li>
            <li>Eliminate Confusion</li>
            <li>Get Expert Service</li>
          </ul>
          <CTAButton size="lg">Call Now</CTAButton>
        </div>
      </section>
    );
  }
}
