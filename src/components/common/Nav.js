import React from 'react';

export default class Nav extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <header className={`nav ${className || ''}`}>
        <img
          className="nav-logo"
          src={require('../../assets/white-logo.png')}
          alt=""
        />
        <nav className="nav-nav">
          <a href="#Pricing">Pricing</a>
        </nav>
      </header>
    );
  }
}
