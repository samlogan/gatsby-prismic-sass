import React from 'react';
import { graphql } from 'gatsby';
import { mergePrismicPreviewData } from 'gatsby-source-prismic';
import { Layout, Slice } from 'components';

const IS_BROWSER = typeof window !== 'undefined';

export const Page = ({ location, data: staticData }) => {
  const previewData = IS_BROWSER && window.__PRISMIC_PREVIEW_DATA__;
  const data = mergePrismicPreviewData({ staticData, previewData });
  const { page } = data;
  const { data: pageData } = page;
  const {
    body: sliceData,
    meta_title: metaTitle,
    meta_description: metaDesc,
    open_graph_image: ogImage,
    schema,
  } = pageData;
  const seo = {
    title: metaTitle.text,
    desc: metaDesc.text,
    banner: ogImage && ogImage.localFile && ogImage.localFile.childImageSharp.fixed.src,
    schema: schema.text,
  };
  return (
    <Layout location={location} seo={seo}>
      {sliceData.map(slice => (
        <Slice key={slice.id} data={slice} />
      ))}
    </Layout>
  );
};

export default Page;

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    page: prismicPage(uid: { eq: $uid }) {
      id
      uid
      data {
        meta_title {
          text
        }
        meta_description {
          text
        }
        open_graph_image {
          url
        }
        schema {
          text
        }
        body {
          ... on PrismicPageBodyIntroSection {
            slice_type
            id
            primary {
              title {
                text
              }
              subtitle {
                html
              }
            }
          }
        }
      }
    }
  }
`;
