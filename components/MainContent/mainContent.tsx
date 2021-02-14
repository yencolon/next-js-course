import Link from 'next/link';
import { IPostTypesArray } from '@shared/types/props';
import { mainContentContainer, title } from './styles';
const BlogList: React.FC<IPostTypesArray> = ({ posts }) => {
  return (
    <section css={mainContentContainer}>
      <h1 css={title}> Hi, I'm Yen. </h1>
      <br></br>
      The last three years I've been working as web and mobile developer.
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>
              <a>{post.frontMatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BlogList;
