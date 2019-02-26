import React from 'react';

export default class Pricing extends React.Component {
  render() {
    return (
      <section>
        <h2>Pricing</h2>
        <section>
          <h3>Full Service - $2,495 + 2%</h3>
          <ul>
            <li>Personal Showings</li>
            <li>Free Marketing Services</li>
            <li>Professional Photography</li>
            <li>Targeted Facebook Advertising</li>
            <li>
              Listings on every major real estate website (Zillow, Trulia,
              Realtor.com, Redfin, etc.)
            </li>
            {/* Below is inactive */}
            <li>Virtual marketing tour on listings</li>
            <li>Open houses</li>
          </ul>
        </section>
        <section>
          <h3>Premium Service - 3%</h3>
          <ul>
            <li>Personal Showings</li>
            <li>Free Marketing Services</li>
            <li>Professional Photography</li>
            <li>Targeted Facebook Advertising</li>
            <li>
              Listings on every major real estate website (Zillow, Trulia,
              Realtor.com, Redfin, etc.)
            </li>
            {/* Below is active */}
            <li>Virtual marketing tour on listings</li>
            <li>Open houses</li>
          </ul>
        </section>
      </section>
    );
  }
}
