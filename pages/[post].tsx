import { getPosts } from '@api/posts';
import { IFormatedPostType } from '@shared/types/props/IPostTypes';
import LandingLayout from 'layouts/LandingLayout';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import { POST_DIR } from 'config';

export default function Post({
  mdxContent,
  frontMatter
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const content = hydrate(mdxContent, { components: {} });
  return (
    <>
      <LandingLayout>
        <header>
          <h1>{frontMatter.title}</h1>
        </header>
        <article>{content}</article>
      </LandingLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const post = await getPosts(POST_DIR);

  const paths = post.map(({ slug }) => ({
    params: {
      post: slug
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { post: routeSlug } = params as { post: string };
  const posts = await getPosts(POST_DIR);

  const { mdx, frontMatter } = posts.find(
    ({ slug: postSlug }) => postSlug === routeSlug
  ) as IFormatedPostType;

  return {
    props: {
      mdxContent: mdx,
      frontMatter
    }
  };
};
