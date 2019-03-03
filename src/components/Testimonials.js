import React from 'react';
import Carousel from 'nuka-carousel';

import Left from '../assets/svg/left-slider-arrow.svg';
import Right from '../assets/svg/right-slider-arrow.svg';

const testimonials = [
  {
    name: 'Fabio',
    subtitle: 'Sold home in Modesto, CA',
    text:
      "I would highly recommend David at 3PercentBroker.com to anyone that is purchasing or selling a property. I have nothing but good things to say about him. I had never purchased a house before and had no clue where to start, but David was extremely helpful and would take time out of his day to walk me through and I'm sure I will be doing business with them again.",
    image: require('../assets/fabio.png'),
  },
  {
    name: 'The Torres Family',
    subtitle: 'Sold home in Modesto, CA',
    text:
      "We worked with David at 3PercentBroker.com. David is great to work; he is reliable, honest, and trustworthy. He sold our home within a few days, and he found us the beautiful home that we live in now. We could not have done it without David's help. We are so blessed.",
    image: require('../assets/torres.png'),
  },
  {
    name: 'Dallas and Andrew',
    subtitle: 'Sold home in Modesto, CA',
    text: [
      "I can't express how happy we are with David Newman at 3PercentBroker.com. Buying and selling real estate is stressful enough, but David made the whole process a breeze. He is extremely knowledgeable in his field and knew exactly how to market our home to get it sold quickly.",
      'Our transaction was seamless because David was there walking us through every little detail and explaining the ins-and-outs of every step. He was always a quick text or phone call away and promptly took care of all matters as they arose. Thank you so much for taking care of our family David!',
    ],
    image: require('../assets/andrewdallas.png'),
  },
];

export default class Testimonials extends React.Component {
  render() {
    return (
      <section className="testimonials">
        <h2 className="testimonials-title">Ladidadidah some Tagline</h2>
        <Carousel
          autoplay
          pauseOnHover
          wrapAround
          autoplayInterval={5000}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              className="testimonials-slider-button testimonials-left-button"
              onClick={previousSlide}
            >
              <img src={Left} alt="" />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              className="testimonials-slider-button testimonials-right-button"
              onClick={nextSlide}
            >
              <img src={Right} alt="" />
            </button>
          )}
        >
          {testimonials.map((i) => (
            <div className="testimonials-container">
              <img
                className="testimonials-img"
                src={i.image}
                alt={i.name + ' testimonial image'}
              />
              <div className="testimonials-text-container">
                <h3 className="testimonials-text-title">{i.name}</h3>
                <h4 className="testimonials-text-subtitle">{i.subtitle}</h4>
                {Array.isArray(i.text) ? (
                  i.text.map((j, idx) => (
                    <p
                      className={`testimonials-text ${idx === 0
                        ? 'bottom-margin'
                        : ''}`}
                    >
                      "{j}"
                    </p>
                  ))
                ) : (
                  <p className="testimonials-text">"{i.text}"</p>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    );
  }
}
