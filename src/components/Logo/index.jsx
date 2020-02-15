import React from 'react';
import { Link } from 'components';
import { siteName } from '../../../config/website';
import './styles.scss';

const Logo = () => (
  <Link className="logo" to="#">
    {siteName}
  </Link>
);

export default Logo;
