import React from 'react';

import checkmark from '../assets/svg/green-checkmark.svg';
import CTA from './CTA';

export default class Pricing extends React.Component {
  render() {
    return (
      <section className="pricing" id="pricing">
        <h2 className="pricing-title">The Right Price for Any Seller</h2>
        <p className="pricing-intro-text">
          Working with another company may cost you{' '}
          <span className="bold">thousands</span>. Our pricing is the best in
          the industry, and we never compromise on quality.
        </p>
        <div className="pricing-category-container">
          <section className="pricing-category">
            <h3 className="pricing-category-title">Flat Rate</h3>
            <p className="pricing-category-subtitle">
              Ultimate savings without compromising on service
            </p>
            <p className="pricing-category-price">
              <span className="green">$2,495</span> +{' '}
              <span className="green">2%</span> Commission
            </p>
            <p className="pricing-category-divider">
              <span className="bold">Full service</span> includes:
            </p>
            <ul className="pricing-category-list">
              <li className="pricing-category-li">
                <img
                  className="pricing-category-li-checkmark"
                  alt=""
                  src={checkmark}
                />{' '}
                Personal Showings
              </li>
              <li className="pricing-category-li">
                <img
                  className="pricing-category-li-checkmark"
                  alt=""
                  src={checkmark}
                />{' '}
                Basic Marketing Services
              </li>
              <li className="pricing-category-li">
                <img
                  className="pricing-category-li-checkmark"
                  alt=""
                  src={checkmark}
                />{' '}
                Professional Photography
              </li>
              <li className="pricing-category-li">
                <img
                  className="pricing-category-li-checkmark"
                  alt=""
                  src={checkmark}
                />{' '}
                Targeted Facebook Advertising
              </li>
              <li className="pricing-category-li">
                <img
                  className="pricing-category-li-checkmark"
                  alt=""
                  src={checkmark}
                />{' '}
                Listings on every major real estate website (MLS, Zillow,
                Trulia, Realtor.com, Redfin, etc.)
              </li>
            </ul>
          </section>

          <section className="pricing-category">
            <h3 className="pricing-category-popular-flag">Most Popular</h3>
            <h3 className="pricing-category-title green">Premium Service</h3>
            <p className="pricing-category-subtitle">
              Sell your house faster and for more money
            </p>
            <p className="pricing-category-price">
              <span className="green">3%</span> Commission
            </p>
            <p className="pricing-category-divider">
              <span className="bold">Everything in full service,</span> plus:
            </p>
            <ul className="pricing-category-list">
              <li className="pricing-category-li">
                <img
                  className="pricing-category-li-checkmark"
                  alt=""
                  src={checkmark}
                />{' '}
                Open Houses
              </li>
              <li className="pricing-category-li">
                <img
                  className="pricing-category-li-checkmark"
                  alt=""
                  src={checkmark}
                />{' '}
                Premium Marketing Services
              </li>
              <li className="pricing-category-li">
                <img
                  className="pricing-category-li-checkmark"
                  alt=""
                  src={checkmark}
                />{' '}
                3D Tour of House on Listings
              </li>
            </ul>
          </section>
        </div>
        <CTA />
      </section>
    );
  }
}
