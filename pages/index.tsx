import { InferGetStaticPropsType } from 'next';
import LandingLayout from 'layouts/LandingLayout';
import MainContent from '@components/MainContent';
import Seo from '@components/Seo';
import { metadata } from 'config';
import { getPosts } from 'api/posts';

export default function Home({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo title="Yen Colon" description={metadata.siteName} />
      <LandingLayout>
        <MainContent posts={posts}/>
      </LandingLayout>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await getPosts('./posts');
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
