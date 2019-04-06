import React from "react";

export default class Nav extends React.Component {
  componentDidMount = () => {
  };

  scrollToPricing = () => {
    const pricing = document.querySelector("#pricing");
    pricing.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  render() {
    const { className } = this.props;
    return (
      <header className={`nav ${className || ""}`}>
        <a href="/">
          <img
            className="nav-logo"
            src={require("../../assets/white-logo.png")}
            alt="3PercentBroker.com Logo"
          />
        </a>
        <nav className="nav-nav">
          <button onClick={this.scrollToPricing} className="nav-link">
            Pricing
          </button>
          <a href="#" className="nav-link nav-link_search">
            <span className="nav-link_search-text">Property Search</span>
          </a>
        </nav>
      </header>
    );
  }
}
