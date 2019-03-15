import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
import * as Slices from '../slices';

export const Slice = ({ data }) => {
  const { slice_type: sliceType } = data;
  // Convert slice type from snake_case to TitleCase
  if (!sliceType) return null;
  const sliceName = sliceType.split('_')
    .map(item => item.charAt(0).toUpperCase() + item.substring(1))
    .join('');
  const CustomSlice = Slices[sliceName];
  return <CustomSlice data={data} />;
};

class Page extends Component {
  render() {
    const {
      data: { page },
      location,
    } = this.props;
    const { data } = page;
    const { body: sliceData, metaTitle, metaDesc, ogImage, schema } = data;
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
  }
}

export default Page;

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    page: prismicPage(uid: { eq: $uid }) {
      id
      uid
      data {
        metaTitle: meta_title {
          text
        }
        metaDesc: meta_description {
          text
        }
        ogImage: open_graph_image {
          url
          localFile {
            childImageSharp {
              fixed(width: 1200, height: 680, quality: 90) {
                src
              }
            }
          }
        }
        schema {
          text
        }
        body {
          ... on PrismicPageBodyIntroSection {
            slice_type
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
