import React from 'react';

import { MdSearch as SearchIcon } from 'react-icons/md';

export default class Nav extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <header className={`nav ${className || ''}`}>
        <a href="/">
          <img
            className="nav-logo"
            src={require('../../assets/white-logo.png')}
            alt="3PercentBroker.com Logo"
          />
        </a>
        <nav className="nav-nav">
          <a className="nav-link" href="#Pricing">
            Pricing
          </a>
          <button className="nav-link nav-link_search">
            <span className="nav-link_search-text">Property Search</span>{' '}
            <SearchIcon className="nav-link_search-icon" />
          </button>
          <button className="nav-link">(209) 765-7264</button>
        </nav>
      </header>
    );
  }
}
