import React from 'react';
import { Link } from 'gatsby';

const Navigation = props => {
  const { classNamePrefix = 'main', links } = props;
  const className = classNamePrefix ? `${classNamePrefix}-navigation` : 'navigation';
  return (
    <nav className={className}>
      {links && links.map(link => (
        <Link key={link.text} className={`${className}-link ${link.className || ''}`} to={link.to}>
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
