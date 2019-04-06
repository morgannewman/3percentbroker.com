import React from 'react';
import postscribe from 'postscribe';

import CTAButton from '../CTA/PrimaryButton';
// import SearchButton from "./SearchButton";
import Nav from './Nav';

export default class Hero extends React.Component {
  componentDidMount = () => {
    postscribe('#search-bar', '<script src="https://www.idxhome.com/site/listing/search/widget/114577?style=universal"></script>');
  };
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
          <div id="search-bar" className="search-bar" />
          <CTAButton />
          </div>
      </section>
    );
  }
}
