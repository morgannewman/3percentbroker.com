import React from 'react';

import PrimaryButton from './PrimaryButton';

export default class CTA extends React.Component {
  render() {
    return (
      <div className="cta">
        <PrimaryButton />
        <p>
          Not ready? <button className="cta-email-button">
            Send an email
          </button>{' '}
          instead.
        </p>
      </div>
    );
  }
}
