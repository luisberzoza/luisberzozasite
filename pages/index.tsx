import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
// import { slide as Menu } from 'react-burger-menu';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Luis Berzoza</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Banner with heading */}
      {/* portfolio */}
      {/* About */}
      {/* Contact info */}
    </div>
  )
}

export default Home
