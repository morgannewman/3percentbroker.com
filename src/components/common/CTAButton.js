import React from 'react';

import { FaPhone as PhoneIcon } from 'react-icons/fa';

export default function CTA() {
  return (
    <button className="cta-button">
      <PhoneIcon className="cta-phone" /> Call Now
    </button>
  );
}
