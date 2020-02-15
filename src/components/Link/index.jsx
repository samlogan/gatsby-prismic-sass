import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

export const Link = props => {
  const { children, className, to, title, target = '_blank' } = props;
  const isExternal = (to && to.indexOf('http') !== -1) || (to && to[0] === '#');
  if (isExternal) {
    return (
      <a href={to} className={className || ''} title={title || null} target={target} rel="nofollow noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <GatsbyLink to={to} className={className || ''} title={title || null}>
      {children}
    </GatsbyLink>
  );
};
