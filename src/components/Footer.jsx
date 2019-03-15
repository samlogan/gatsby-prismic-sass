import React, { Component } from 'react';
import { Logo } from './Logo';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <Logo />
          <div className="sitemap">
            <span className="legal">© Copyright {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
