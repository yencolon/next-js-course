import { footerContainer, copyrightText } from './styles';

const Footer = () => {
  return (
    <div css={footerContainer}>
      <footer>
        <div css={copyrightText}>© 2021 Yen Colon. Made with Next deploy with Vercel.</div>
      </footer>
    </div>
  );
};

export default Footer;
