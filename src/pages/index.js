import '../styles/main.scss';

import React from 'react';
import * as Sentry from '@sentry/browser';
// Gatsby
import { Helmet } from 'react-helmet';
// Components
import Hero from '../components/Hero';
import Opener from '../components/Opener';
import Testimonials from '../components/Testimonials';
import ThreeStepPlan from '../components/ThreeStepPlan';
import About from '../components/About';
import Pricing from '../components/Pricing';
import PhoneSection from '../components/CTA/Phone';
import SavingsCalculator from '../components/SavingsCalculator';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

class IndexPage extends React.Component {
  componentDidMount() {
    Sentry.init({ dsn: 'https://f21f63d549ef45d9ba3f9b24672f2696@sentry.io/1432924' });
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>3PercentBroker.com | It's Simply a Better Deal</title>
          <link rel="canonical" href="https://3percentbroker.com/" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700"
            rel="stylesheet"
          />
        </Helmet>
        <main className="main">
          <Hero />
          <PhoneSection />
          <Opener />
          <SavingsCalculator />
          <ThreeStepPlan />
          <Testimonials />
          <About />
          <PhoneSection />
          <Pricing />
          <Contact />
          <Footer />
        </main>
      </div>
    );
  }
}

export default IndexPage;
