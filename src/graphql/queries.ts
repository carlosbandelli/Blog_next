import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_SETTINGS {
    setting {
      data {
        id
        attributes {
          blogName
          blogDescription

          logo {
            data {
              attributes {
                ...image
              }
            }
          }
          menuLink {
            ...menuLink
          }
          footer_text
        }
      }
    }

    posts {
      data {
        id
        attributes {
          title
          slug
          content
          tags {
            data {
              attributes {
                displayName
                slug
                posts {
                  data {
                    attributes {
                      title
                      categories {
                        data {
                          attributes {
                            slug
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          categories {
            data {
              id
              attributes {
                slug
              }
            }
          }
          slug
          author {
            __typename
            data {
              id
              attributes {
                slug
                displayName
              }
            }
          }
        }
      }
    }
  }

  query GET_POSTS {
    posts {
      data {
        id
        attributes {
          title
          slug
          content
          tags {
            data {
              attributes {
                displayName
                slug
                posts {
                  data {
                    attributes {
                      title
                      categories {
                        data {
                          attributes {
                            slug
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          categories {
            data {
              id
              attributes {
                slug
              }
            }
          }
          slug
          author {
            __typename
            data {
              id
              attributes {
                slug
                displayName
              }
            }
          }
        }
      }
    }
  }

  query GET_POST($id: ID) {
    post(id: $id) {
      data {
        attributes {
          title
        }
      }
    }
  }

  query GET_POSTS_BY_AUTHOR($slug: StringFilterInput) {
    posts(filters: { author: { slug: $slug } }) {
      data {
        attributes {
          title
          slug
          author {
            data {
              attributes {
                slug
              }
            }
          }
        }
      }
    }
  }

  query GET_POSTS_BY_CATEGORIES($slug: StringFilterInput) {
    posts(filters: { categories: { slug: $slug } }) {
      data {
        attributes {
          categories {
            data {
              attributes {
                slug
              }
            }
          }
        }
      }
    }
  }

  query GET_POSTS_BY_TAGS($slug: StringFilterInput) {
    posts(filters: { tags: { slug: $slug } }) {
      data {
        attributes {
          tags {
            data {
              attributes {
                slug
              }
            }
          }
        }
      }
    }
  }

  query GET_POST_BY_SLUG($slug: StringFilterInput) {
    posts(filters: { slug: $slug }) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;
