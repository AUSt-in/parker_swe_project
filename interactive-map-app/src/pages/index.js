// src/pages/index.js
import Head from 'next/head';
import Map from '../components/Map';
import { mobileHomeParks } from '../data/data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Interactive Map App</title>
        <meta name="description" content="Interactive Map Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ height: '100vh', width: '100%' }}>
        <Map markers={mobileHomeParks} />
      </main>
    </div>
  );
}
