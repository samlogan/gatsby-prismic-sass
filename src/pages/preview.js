import React, { useEffect } from 'react';
import { navigate, useStaticQuery, graphql } from 'gatsby';
import { usePrismicPreview } from 'gatsby-source-prismic';

const Preview = ({ location }) => {
  const { allPrismicPage, site } = useStaticQuery(query);

  const pageUIDs = allPrismicPage.nodes.map(node => node.uid);

  const {
    siteMetadata: { prismicRepo },
  } = site;

  const pathResolver = () => doc => {
    const previewedUID = doc.uid;
    if (previewedUID === 'home') return '/';
    if (pageUIDs.includes(previewedUID)) {
      return previewedUID;
    }
    return '/unpublishedPreview';
  };

  const { previewData, path } = usePrismicPreview(location, {
    repositoryName: prismicRepo,
    pathResolver,
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
  query previewQuery {
    allPrismicPage {
      nodes {
        uid
      }
    }
    site {
      siteMetadata {
        prismicRepo
      }
    }
  }
`;
