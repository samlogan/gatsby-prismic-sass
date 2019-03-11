import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';
import 'typeface-titillium-web';
import 'typeface-lato';
import '../sass/global/styles.scss';
import './Layout.scss';

class Layout extends Component {
  render() {
    const { children, customSEO } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
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
}

export default Layout;
