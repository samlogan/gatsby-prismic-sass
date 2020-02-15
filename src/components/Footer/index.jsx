import React from 'react';
import { Logo } from 'components';
import './styles.scss';

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <Logo />
      <div className="sitemap">
        <span className="legal">© Copyright {new Date().getFullYear()}</span>
      </div>
    </div>
  </footer>
);

export default Footer;
