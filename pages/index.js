import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Suggestion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Suggestion with next</h1>

      <p>
        <Link href="/rents">go to rents page</Link>
      </p>
    </div>
  );
}
