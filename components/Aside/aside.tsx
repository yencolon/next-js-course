import Avatar from '@components/Avatar';
import { Email, GitHub, LinkedId, Pin } from '@shared/Icons';
import { metadata } from 'config';
import { container, infoContainer, contactInfoContainer } from './styles';
const Aside = () => {
  return (
    <section css={container}>
      <Avatar />
      <section css={infoContainer}>
        <h2>Yen Colon</h2>
        <h3>Software Developer / Sometimes Photographer</h3>
        <p>A long journey.</p>
      </section>
      <section css={contactInfoContainer}>
        <ul>
          <li>
            <Pin /> Puero La Cruz
          </li>
          <li>
            <a href="mailto:yenjcc@gmail.com">
              <Email /> yenjcc@gmail.com
            </a>
          </li>
          <li>
            <a  aria-label="To Yen's Linkedin" href={metadata.author.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <LinkedId /> linkedin
            </a>
          </li>
          <li>
            <a aria-label="To Yen's Github" href={metadata.author.githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHub />
              github
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Aside;
