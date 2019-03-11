import React, { Component } from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import './Header.scss';

const navigationLinks = [{ to: '#', text: 'Example Link', className: '' }];

// eslint-disable-next-line
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <Logo />
          <Navigation classNamePrefix="header" links={navigationLinks} />
        </div>
      </header>
    );
  }
}
