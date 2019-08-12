import React from 'react';
import { Link } from './Link';
import './Button.scss';

export const Button = props => {
  const { to, title, children, theme = 'primary', outline } = props;
  return (
    <Link to={to} title={title || ''} className={`button ${theme} ${outline ? 'outline' : ''}`}>
      {children}
    </Link>
  );
};
