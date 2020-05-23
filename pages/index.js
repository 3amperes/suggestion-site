import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Suggestion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Suggestion • page d&apos;accueil</h1>

      <ul>
        <li>
          <Link href="/rents">
            <a>go to rents page</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
