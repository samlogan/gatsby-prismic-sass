import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components';
import * as Slices from '../slices';

export const Slice = ({ data, openSignUpModal }) => {
  const { slice_type: sliceType } = data;
  // Convert slice type from snake_case to TitleCase
  if (!sliceType) return null;
  const sliceName = sliceType.split('_')
    .map(item => item.charAt(0).toUpperCase() + item.substring(1))
    .join('');
  const CustomSlice = Slices[sliceName];
  return <CustomSlice data={data} openSignUpModal={openSignUpModal} />;
};

class Page extends Component {
  render() {
    const {
      data: { page },
      location,
    } = this.props;
    return (
      <Layout location={location} openSignUpModal={this.openSignUpModal}>
        {page.data.body.map(slice => (
          <Slice key={slice.id} data={slice} openSignUpModal={this.openSignUpModal} />
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
