import { InferGetStaticPropsType } from 'next';
import LandingLayout from 'layouts/LandingLayout';
import Seo from '@components/Seo';
import { metadata, POST_DIR} from 'config';
import { getPosts } from '@api/posts';
import BlogList from '@components/BlogList';

export default function Home({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo title="Yen Colon" description={metadata.siteName} />
      <LandingLayout>
        <BlogList posts={posts}/>
      </LandingLayout>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts(POST_DIR);
  const allMdx = posts.map(({ slug, frontMatter }) => ({
    slug,
    frontMatter
  }));
  return {
    props: {
      posts: allMdx
    }
  };
};
