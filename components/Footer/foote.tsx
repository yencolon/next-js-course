import { footerContainer, copyrightText } from './styles';

const Footer: React.FC = () => {
  return (
    <div css={footerContainer}>
      <footer>
        <small css={copyrightText}>© 2021 Yen Colon. Made with Next deploy with Vercel.</small>
      </footer>
    </div>
  );
};

export default Footer;
