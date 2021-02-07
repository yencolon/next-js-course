import LandingLayout from 'layouts/LandingLayout';
import MainContent from '@components/MainContent';
import Seo from '@components/Seo';
import { metadata } from 'config';

export default function Home() {
  return (
    <>
      <Seo title='Yen Colon' description={metadata.siteName} />
      <LandingLayout>
        <MainContent />
      </LandingLayout>
    </>
  );
}
