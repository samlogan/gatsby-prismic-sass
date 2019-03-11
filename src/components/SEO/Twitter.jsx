import React from 'react';
import Helmet from 'react-helmet';

const Twitter = ({ type, username, title, desc, image }) => {
  if (!username) return null;
  return (
    <Helmet>
      {username && <meta name="twitter:creator" content={username} />}
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={desc} />
    </Helmet>
  );
};

export default Twitter;
