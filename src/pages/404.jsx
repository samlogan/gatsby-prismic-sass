import React from 'react';
import { Link } from 'gatsby';
import { Layout } from 'components';
import FourOhFourImage from 'images/404.svg';
import './404.scss';

const FourOhFour = ({ location }) => (
  <Layout location={location}>
    <div className="wrapper not-found-wrap">
      <img className="not-found-image" src={FourOhFourImage} alt="Opps this page has gone missing" />
      <div className="not-found-text">
        <h2>404 Not found</h2>
        <Link className="button" to="/">
          Go back home
        </Link>
      </div>
    </div>
  </Layout>
);

export default FourOhFour;
