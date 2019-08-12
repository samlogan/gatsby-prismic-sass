import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import 'typeface-titillium-web';
import 'typeface-lato';
import '../sass/global/styles.scss';
import './Layout.scss';

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const Layout = props => {
  const { children, customSEO } = props;
  return (
    <StaticQuery
      query={query}
      render={data => (
        <>
          <Header />
          <main>
            {!customSEO && <SEO />}
            {children}
          </main>
          <Footer />
        </>
      )}
    />
  );
}
