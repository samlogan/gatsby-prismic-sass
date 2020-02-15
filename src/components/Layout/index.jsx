import React from 'react';
import { Footer, Header, SEO } from 'components';
import 'typeface-titillium-web';
import 'typeface-lato';
import '../../sass/global/styles.scss';
import './styles.scss';

const Layout = props => {
  const { children, customSEO } = props;
  return (
    <>
      <Header />
      <main>
        {!customSEO && <SEO />}
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
