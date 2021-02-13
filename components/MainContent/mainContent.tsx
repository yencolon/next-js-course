
import { IPostTypesArray } from '@shared/types/props';
import { mainContentContainer, title } from './styles';
const MainContent: React.FC<IPostTypesArray> = ({ posts }) => {
  return (
    <section css={mainContentContainer}>
      <h1 css={title}> Hi, I'm Yen. </h1>
      <br></br>
      The last three years I've been working as web and mobile developer.
      <ul>
        {
          posts.map((post) => (
            <li key={post.slug}>{post.slug}</li>
          ))
        }
      </ul>
    </section>
  );
};

export default MainContent;
