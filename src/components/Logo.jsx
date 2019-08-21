import React from 'react';
import { Link } from 'gatsby';
import { siteName } from '../../config/website';
import './Logo.scss';

export const Logo = () => (
  <Link className="logo" to="#">
    {siteName}
  </Link>
);
