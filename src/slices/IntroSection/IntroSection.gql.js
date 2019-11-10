import { graphql } from 'gatsby';

export const Queries = graphql`
  fragment IntroSectionPageFragement on PrismicPageBodyIntroSection {
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
`;
