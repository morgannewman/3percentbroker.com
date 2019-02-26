import '../styles/main.scss';

import React from 'react';

// Gatsby
import { Helmet } from 'react-helmet';

// Components
import Hero from '../components/Hero';
import Opener from '../components/Opener';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import Testimonials from '../components/Testimonials';
import ThreeStepPlan from '../components/ThreeStepPlan';
import About from '../components/About';
import Closing from '../components/Closing';
import Pricing from '../components/Pricing';

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>3PercentBroker.com | It's Simply a Better Deal</title>
        <link rel="canonical" href="https://3percentbroker.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />
      </Helmet>
      <main className="main">
        <Hero />
        <Opener />
        <WhoWeWorkWith />
        <Testimonials />
        <ThreeStepPlan />
        <About />
        <Closing />
        <Pricing />
      </main>
    </div>
  );
};
export default IndexPage;
