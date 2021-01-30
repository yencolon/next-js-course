import Head from 'next/head';
import LandingLayout from 'layouts/LandingLayout';
import MainContent from '@components/MainContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingLayout>
        <MainContent />
      </LandingLayout>
    </>
  );
}
