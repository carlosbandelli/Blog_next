import { PostGrid } from '../../components/PostGrid';
import { PostStrapi } from '../../shared-types/post-strapi';
import { SettingsStrapi } from '../../shared-types/settings-strapi';
import { BaseTemplate } from '../Base';

export type PostsTemplateProps = {
  settings: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ settings, posts = [] }: PostsTemplateProps) => {
  return (
    // eslint-disable-next-line react/no-children-prop
    <BaseTemplate settings={settings} children={''}>
      <PostGrid posts={posts} />
    </BaseTemplate>
  );
};
