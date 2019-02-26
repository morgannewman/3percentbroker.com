import React from 'react';

import CTAButton from './common/CTAButton';

export default class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <header className="hero-header">
          <img
            className="hero-header-logo"
            src={require('../assets/white-logo.png')}
            alt=""
          />
          <nav className="hero-header-nav">NAV</nav>
        </header>
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
