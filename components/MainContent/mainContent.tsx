import { mainContentContainer, title } from './styles';
const MainContent: React.FC = () => {
  return (
    <section css={mainContentContainer}>
      <h1 css={title}> Hi, I'm Yen. </h1>
      <br></br>
      The last three years I've been working as web and mobile developer.
    </section>
  );
};

export default MainContent;
