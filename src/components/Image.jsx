import React from 'react';
import Img from 'gatsby-image';
import './Image.scss';

export const Image = props => {
  const { image, className = '' } = props;
  if (!image) return <div className={`gatsby-image placeholder ${className}`} />;
  if (image.localFile && image.localFile.childImageSharp && image.localFile.childImageSharp.fluid) {
    return <Img className={`gatsby-image ${className}`} fluid={image.localFile.childImageSharp.fluid} />;
  }
  if (image.url) {
    return <img className={`gatsby-image ${className}`} src={image.url} alt={image.alt || ''} />;
  }
  return <div className={`gatsby-image placeholder ${className}`} />;
};
