import React from 'react';

import Facebook from '../assets/svg/facebook.svg';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-items-container">
          <div className="footer-items footer-items_left">
            <img
              className="footer-logo"
              src={require('../assets/white-logo.png')}
              alt="3PercentBroker.com Logo"
            />
            <a
              href="https://www.facebook.com/3percentbroker/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <img
                className="footer-icon"
                src={Facebook}
                target="_blank"
                alt="Facebook Logo"
              />
            </a>
            <div>
              <p>209-765-7264</p>
              <p>david@3PercentBroker.com</p>
            </div>
            <p className="uppercase bold">
              Copyright: © 2019 3%Broker.com, Inc. All rights reserved.
            </p>
          </div>
          <div className="footer-items footer-items_right">
            <address>
              <span className="uppercase bold">3PercentBroker.com</span>
              <br />
              1220 W Roseburg Ave, Unit B
              <br />
              Modesto, CA 95350
            </address>
            <p className="uppercase bold">CA BRE #02052489</p>
          </div>
        </div>
      </footer>
    );
  }
}
