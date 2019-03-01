import React from 'react';

import CTA from './CTA';

import checkmark from '../assets/svg/green-checkmark.svg';

export default class Opener extends React.Component {
  render() {
    return (
      <section className="opener">
        <h2 className="opener-title">Do You Need Real Estate Services?</h2>
        <div className="opener-lists">
          <ul className="opener-selling-list">
            <li className="opener-li">
              <img
                className="opener-li-checkmark"
                alt=""
                src={checkmark}
              />{' '}
              Thinking of selling?
            </li>
            <li className="opener-li">
              <img
                className="opener-li-checkmark"
                alt=""
                src={checkmark}
              />{' '}
              Tired of high commissions?
            </li>
            <li className="opener-li">
              <img
                className="opener-li-checkmark"
                alt=""
                src={checkmark}
              />{' '}
              Want local expert services for less?
            </li>
          </ul>
          <ul className="opener-buying-list">
            <li className="opener-li">
              <img
                className="opener-li-checkmark"
                alt=""
                src={checkmark}
              />{' '}
              Looking for your dream home?
            </li>
            <li className="opener-li">
              <img
                className="opener-li-checkmark"
                alt=""
                src={checkmark}
              />{' '}
              Need advice about financing?
            </li>
            <li className="opener-li">
              <img
                className="opener-li-checkmark"
                alt=""
                src={checkmark}
              />{' '}
              Want to save money on closing costs?
            </li>
          </ul>
        </div>
        <p className="opener-text">
          3PercentBroker.com's customers get better service for less.
        </p>
        <CTA />
      </section>
    );
  }
}
