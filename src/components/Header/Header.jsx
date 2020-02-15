import React from 'react';
import { Logo, Navigation } from 'components';
import './Header.scss';

const navigationLinks = [{ to: '#', text: 'Example Link', className: '' }];

export const Header = () => (
  <header className="header">
    <div className="wrapper">
      <Logo />
      <Navigation classNamePrefix="header" links={navigationLinks} />
    </div>
  </header>
);
