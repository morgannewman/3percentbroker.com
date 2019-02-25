import '../styles/main.scss';

import React from 'react';

// Gatsby
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

// Components
import Hero from '../components/Hero';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>3PercentBroker.com | It's Simply a Better Deal</title>
        <link rel="canonical" href="https://3percentbroker.com/" />
      </Helmet>
      <main className="main">
        <div>Hello, world!</div>
        <Hero />
      </main>
    </>
  );
};
export default IndexPage;