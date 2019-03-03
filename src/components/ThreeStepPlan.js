import React from 'react';

import CTA from './CTA';
import Call from '../assets/svg/call.svg';
import Money from '../assets/svg/money.svg';
import Plan from '../assets/svg/plan.svg';
import Quote from '../assets/svg/quote-bubble.svg';

export default class ThreeStepPlan extends React.Component {
  render() {
    return (
      <section className="plan">
        <div className="plan-quote-container">
          <img className="plan-quote-bubble" src={Quote} alt="" />
          <h2 className="plan-quote-title">
            "Our transaction was seamless because David was there walking us
            through every little detail, explaining the ins-and-outs of every
            step."
          </h2>
          <p className="plan-quote-text">Dallas and Andrew</p>
          <p className="plan-quote-text">Clients in Modesto, CA</p>
        </div>
        <ol className="plan-list">
          <li className="plan-li">
            <img className="plan-li-icon" src={Call} alt="" />
            <h3 className="plan-li-title">Schedule a Call</h3>
            <p className="plan-li-text">
              We’ll answer questions and set up a meeting.
            </p>
          </li>
          <li className="plan-li">
            <img className="plan-li-icon" src={Plan} alt="" />
            <h3 className="plan-li-title">Develop a Personalized Plan</h3>
            <p className="plan-li-text">
              We’ll plan how to get you the most out of buying or selling your
              home.
            </p>
          </li>
          <li className="plan-li">
            <img className="plan-li-icon" src={Money} alt="" />
            <h3 className="plan-li-title">Save Money</h3>
            <p className="plan-li-text">
              You’ll get excellent service from us while also saving money.
            </p>
          </li>
        </ol>
        <CTA />
      </section>
    );
  }
}
