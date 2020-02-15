import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = props => {
  const { children, className, to, title, target = '_blank', onClick = () => {} } = props;
  const isExternal = (to && to.indexOf('http') !== -1) || (to && to[0] === '#');
  if (isExternal) {
    return (
      <a
        href={to}
        className={className || ''}
        title={title || null}
        target={target}
        onClick={onClick}
        rel="nofollow noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <GatsbyLink to={to} className={className || ''} title={title || null} onClick={onClick}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
