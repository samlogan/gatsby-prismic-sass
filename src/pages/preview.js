import React, { useEffect } from 'react';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import { usePrismicPreview } from 'gatsby-source-prismic';

const Preview = ({ location }) => {
  const { site } = useStaticQuery(query);

  const {
    siteMetadata: { prismicRepo },
  } = site;

  const { previewData, path } = usePrismicPreview(location, {
    repositoryName: prismicRepo,
  });

  useEffect(() => {
    if (previewData && path) {
      window.__PRISMIC_PREVIEW_DATA__ = previewData;
      navigate(path);
    }
  }, [previewData, path]);

  return <div>Loading preview...</div>;
};

export default Preview;

const query = graphql`
  query repoQuery {
    site {
      siteMetadata {
        prismicRepo
      }
    }
  }
`;
