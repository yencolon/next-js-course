import { ILandingProps } from '@shared/types/props';
import Header from '@components/Header';
import Aside from '@components/Aside';
import { container } from './styles';
import Footer from '@components/Footer';

const LandingLayout: React.FC<ILandingProps> = (props) => {
  return (
    <>
      <Header />
      <section css={container}>
        <Aside /> {props.children}
      </section>
      <Footer />
    </>
  );
};

export default LandingLayout;
