import Head from 'next/head';
import LandingLayout from 'layouts/LandingLayout';
import MainContent from '@components/MainContent';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Yen Colon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingLayout>
        a
      </LandingLayout>
    </>
  );
}
