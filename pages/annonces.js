import Head from 'next/head';
import Link from 'next/link';
import Services from '@components/layout/Services';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suggestion • Annonces</title>
      </Head>

      <div className="relative mb-4xl h-screen bg-greyishBrownTwo flex items-center justify-center">
        <div className="w-auto text-center text-white">
          <div className="inline-block">
            <svg width="128" viewBox="0 0 128 128">
              <path
                fill="#f9b785"
                d="M126 101.5H6.13a59.93 59.93 0 11119.85 0z"
              />
              <path fill="#afafaf" d="M80.98 49.77h25.62v48.48H80.98z" />
              <path fill="#d8d8d8" d="M23.81 49.77h57.14v48.48H23.81z" />
              <path d="M40.77 58.61h9.81v15.52h-9.81zM54.19 58.61H64v15.52h-9.81zM90.3 58.99h6.99v11.05H90.3z" />
              <path
                fill="#dd6307"
                d="M49.44 49.77h57.15L94.1 23.07H38.73l10.71 26.7z"
              />
              <path
                fill="#f87300"
                d="M80.97 49.77H23.81l13.39-26.7h56.9l-13.13 26.7z"
              />
              <path d="M40.78 88a1.79 1.79 0 01-.78-3.4 25.91 25.91 0 0123.36 0 1.78 1.78 0 01-1.62 3.18 22.34 22.34 0 00-20.13 0 1.79 1.79 0 01-.83.22z" />
              <rect
                width="126.63"
                height="6.68"
                x=".68"
                y="98.25"
                fill="#ededed"
                rx="3.34"
              />
            </svg>
          </div>

          <p className="surtitle">Il n’y a pas d’offre pour le moment mais</p>
          <h1>
            Nous recherchons activement des <br /> biens à vous présenter !
          </h1>
          <p>
            Nous trouvons régulièrement des biens, <br /> indiquez-nous ce que
            vous recherchez et vous <br /> aurez ainsi la possibilité de
            bénéficier de nos <br /> futures offres en avant-première.
          </p>
          <p>
            <Link href="/contact">
              <a className="btn">Contactez-nous</a>
            </Link>
          </p>
        </div>
      </div>

      <Services />
    </div>
  );
}
