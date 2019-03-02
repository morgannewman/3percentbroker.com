import React from 'react';
import debounce from 'lodash.debounce';

import LeftArrow from '../assets/svg/left-arrow.svg';
import RightArrow from '../assets/svg/right-arrow.svg';

const numToMoney = (num) =>
  num
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    .slice(0, -3);

export default class SavingsCalculator extends React.Component {
  state = {
    savings: '$15,000',
    value: '$500,000',
    outputOffset: 0,
    touched: false,
    leftOverlap: false,
    rightOverlap: false,
  };

  componentDidMount = () => {
    this.updateAfterResize = debounce(this.updateSliderText, 100);
    this.resizeListener = window.addEventListener('resize', () =>
      this.updateAfterResize()
    );
  };

  componentWillUnmount = () => {
    window.removeEventListener(this.resizeListener);
  };

  updateSliderText = (e = null) => {
    const value = this.calculateSliderValue();
    const savings = value * 0.06 - value * 0.03;

    const outputOffset = this.calculateOutputOffset();

    this.setState((state) => ({
      savings: numToMoney(savings),
      value: numToMoney(value),
      outputOffset: outputOffset + 'px',
      ...this.detectSliderTextOverlap(outputOffset),
      // Prevents debounced calls from updating touched state
      touched: e ? true : state.touched,
    }));
  };

  calculateSliderValue = () => {
    let value = this.input.value * 10;

    if (value === 50) {
      value = 500000;
    } else if (value > 50) {
      // every 5/6, increase by 25,000
      const steps = Math.round((value - 50) / (5 / 6));
      value = 500000 + 25000 * steps;
    } else if (value < 50) {
      // every 50/14, decrease by 25,000
      const steps = Math.floor((50 - value) / (50 / 14));
      value = 500000 - 25000 * steps;
    }

    return value;
  };

  calculateOutputOffset = () => {
    const sliderWidth = this.input.getBoundingClientRect().width;

    const outputTextWidth = this.output.getBoundingClientRect().width;

    // Initial styling sets width to 100%. This prevents the first tick from setting the margin negative
    const max =
      outputTextWidth > sliderWidth
        ? sliderWidth - 65
        : sliderWidth - outputTextWidth;

    const sliderPosition = this.input.value / 10;

    const textPosition = sliderPosition * max;

    return textPosition;
  };

  detectSliderTextOverlap = (textPosition) => {
    const sliderWidth = this.input.getBoundingClientRect().width;

    const outputTextWidth = this.output.getBoundingClientRect().width;

    // Initial styling sets width to 100%. This prevents the first tick from setting the margin negative
    const max =
      outputTextWidth > sliderWidth
        ? sliderWidth - 65
        : sliderWidth - outputTextWidth;

    const leftTextWidth = this.leftRangeText.getBoundingClientRect().width;
    const rightTextWidth = this.rightRangeText.getBoundingClientRect().width;

    const leftOverlap = textPosition < leftTextWidth;
    const rightOverlap = textPosition > max - rightTextWidth;

    const update = {};

    if (!(leftOverlap && rightOverlap)) {
      if (leftOverlap !== this.state.leftOverlap)
        update.leftOverlap = leftOverlap;

      if (rightOverlap !== this.state.rightOverlap)
        update.rightOverlap = rightOverlap;
    }
    return update;
  };

  render() {
    const { savings, touched, value, leftOverlap, rightOverlap } = this.state;

    return (
      <section className="savings-calculator">
        <h2 className="savings-calculator-title">
          Discover How Much You Can Save With 3PercentBroker.com
        </h2>
        <p className="savings-calculator-text">
          Our commission is half that of our major competitors. We charge 3%
          instead of 6%. You’ll save big when you sell with us.
        </p>
        <h3 className="savings-calculator-savings">
          <span>{savings}</span>
          <span>Seller Savings</span>
        </h3>
        <div className="savings-calculator-slider-container">
          {!touched && (
            <img
              className="savings-calculator-slider-arrow"
              src={LeftArrow}
              alt=""
            />
          )}
          {!touched && (
            <img
              className="savings-calculator-slider-arrow"
              src={RightArrow}
              alt=""
            />
          )}
          <label
            className={`savings-calculator-slider-range-text savings-calculator-slider-range-text_left ${leftOverlap
              ? 'hidden'
              : ''}`}
            ref={(n) => (this.leftRangeText = n)}
          >
            $150,000
          </label>
          <label
            className={`savings-calculator-slider-range-text savings-calculator-slider-range-text_right ${rightOverlap
              ? 'hidden'
              : ''}`}
            ref={(n) => (this.rightRangeText = n)}
          >
            $2,000,000
          </label>

          <output
            className={`savings-calculator-output ${!touched
              ? 'savings-calculator-output_untouched'
              : ''}`}
            ref={(output) => (this.output = output)}
            style={
              touched ? { marginLeft: this.calculateOutputOffset() + 'px' } : {}
            }
          >
            {value}
          </output>
          <input
            onInput={this.updateSliderText}
            className="savings-calculator-slider"
            ref={(input) => (this.input = input)}
            type="range"
            min="0"
            max="10"
            step="0.1"
            defaultValue="5"
          />
          {!touched && (
            <p className="savings-calculator-instructions">
              Adjust slider to match the value of your home
            </p>
          )}
        </div>
      </section>
    );
  }
}
