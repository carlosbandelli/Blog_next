import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFile {
    alternativeText
    url
  }

  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    text
    newTab
  }
`;
