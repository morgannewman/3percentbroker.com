import React from 'react';

import CTAButton from '../CTA/PrimaryButton';
import SearchButton from './SearchButton';
import Nav from './Nav';

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
          <CTAButton />
          <SearchButton />
        </div>
      </section>
    );
  }
}