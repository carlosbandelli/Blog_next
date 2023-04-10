import { request } from 'graphql-request';
import config from '../src/config';
import { GRAPHQL_QUERY } from '../src/graphql/queries';
import { PostStrapi } from '../src/shared-types/post-strapi';
import { SettingsStrapi } from '../src/shared-types/settings-strapi';

export type LoadPostsVariables = {
  categorySlug?: string;
  postSlug?: string;
  postSearch?: string;
  authorSlug?: string;
  tagSlug?: string;
  sort?: string;
  start?: number;
  limit?: number;
};

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
};

export const loadPosts = async (
  variables: LoadPostsVariables = {},
): Promise<StrapiPostAndSettings> => {
  const defaultVariables: LoadPostsVariables = {
    sort: 'createdAt:desc',
    start: 0,
    limit: 10,
  };

  const data = await request(config.graphqlURL, GRAPHQL_QUERY, {
    ...defaultVariables,
    ...variables,
  });

  return data;
};
