import React from 'react';

/**
 * Adds a loading animation to the center of the page.
 * Positioning can be overidden by changing the className prop.
 * @param {string} className
 */
export default function Loading({ className }) {
  return (
    <div className={className ? className : 'loading-ripples-container'}>
      <div className="loading-ripples-container">
        <div className="loading-ripples">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}