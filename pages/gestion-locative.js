import Head from 'next/head';
import Link from 'next/link';
import Hero from '@components/layout/Hero';
import Image from '@components/Image';
import Services from '@components/layout/Services';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suggestion • Gestion Locative</title>
      </Head>

      <Hero
        surTitle="Notre solution"
        title="Gestion locative"
        imgPath="gestion-locative/intro@2x.jpg"
      />

      {/* Section One */}
      <section className="mb-4xl">
        <div className="container">
          <div className="flex md:flex-row flex-col items-start -mx-lg">
            <div className="xl:w-1/4 lg:ml-3col md:w-1/3 w-full px-lg">
              <p className="surtitle">Définition</p>
              <h2>La gestion locative, c’est quoi ?</h2>
            </div>
            <div className="xl:w-1/4 md:w-1/3 w-full px-lg">
              <p>
                Une solution pour vous dégager du temps, pour vous soulager de
                certaines responsabilités tout en gardant un œil sur votre
                investissement.
              </p>
              <p>
                Même si cette activité peut être suivie par le propriétaire
                directement, son cadre juridique et légal la rend très
                chronophage et fait peser de lourdes responsabilités sur le
                bailleur.
              </p>
            </div>
            <div className="xl:w-1/4 md:w-1/3 w-full px-lg">
              La plupart des investisseurs sollicite donc les services d’une
              agence immobilière et d’un gestionnaire de biens pour se libérer
              des nombreuses contraintes. Sous couvert d’un mandat de gestion,
              le propriétaire délègue au gestionnaire immobilier la gestion de
              son bien et lui permet donc d’agir sur divers aspects de son
              investissement locatif:
            </div>
          </div>
        </div>
      </section>

      <section className="py-4xl bg-paleGrey  ">
        <div className="max-w-320 mx-auto mb-3xl text-center">
          <h2>Le mandat de gestion</h2>
          Grâce à lui, le propriétaire délègue au gestionnaire immobilier la
          gestion de son bien et lui permet donc d’agir sur divers aspects de
          son investissement locatif :
        </div>

        <div className="container">
          <div className="xl:mx-3col">
            <div className="flex flex-wrap lg:flex-row flex-col justify-center items-center -mx-lg">
              <div className="flex lg:flex-row flex-col items-center md:w-1/2 px-lg mb-3xl">
                <div className="w-auto">
                  <div className="pictogramme rounded-full lg:mx-lg">
                    <svg viewBox="0 0 36 66" width="50">
                      <path
                        fill="#d8d8d8"
                        d="M19.6 24.47A10.14 10.14 0 0015.8 44v18.47L19.6 65l3.48-2.22.27-18.78a10.13 10.13 0 00-3.75-19.53zm0 3.48a2.54 2.54 0 11-2.53 2.53A2.53 2.53 0 0119.6 28z"
                      />
                      <path
                        fill="#afafaf"
                        d="M19.6 26.05a8.19 8.19 0 00-6.39 13.3H26a8.19 8.19 0 00-6.39-13.3zm0 6.91a2.05 2.05 0 112-2.05 2.05 2.05 0 01-2 2.09zM20.55 44.73h1v17.42h-1zM18.65 44.73h1v17.42h-1z"
                      />
                      <path
                        fill="#6e7274"
                        d="M29.73 34.6c0 4.14-2.53 7.87-6.38 9.4l-.27 18.77L19.6 65l-3.8-2.53V44a10.14 10.14 0 1113.93-9.4z"
                        opacity=".66"
                      />
                      <path
                        fill="#d8d8d8"
                        d="M13.94 25.15a5.07 5.07 0 010-.68c0-.34.03-.67.09-1-.34.06-.67.13-1 .23a7 7 0 00.02 1.8 6.94 6.94 0 002.06 4 2.53 2.53 0 01.33-1.03 5.94 5.94 0 01-1.5-3.32zM4.59 58.59l.86.42 7.62-15.66-.85-.42zm5.92-16.49L2.89 57.76l.57.28 7.62-15.66z"
                      />
                      <path
                        fill="#d8d8d8"
                        d="M25 29.2c-.14-.3-.3-.6-.46-.9A10.09 10.09 0 0014 23.44a5.8 5.8 0 00-.09 1c-.02.23-.02.45 0 .68a8.19 8.19 0 015.53 15.32L8 34.88a8.16 8.16 0 015-9.43 6.37 6.37 0 01-.02-1.8 10.13 10.13 0 00-4.73 16.52L.18 56.8l2.31 3.94 4.1-.47 8.47-16.76A10.13 10.13 0 0025 29.2zM2.89 57.76l7.62-15.66.57.28L3.46 58zM5.45 59l-.86-.42 7.63-15.66.85.42z"
                      />
                      <path
                        fill="#d8d8d8"
                        d="M15.41 28.45a5.94 5.94 0 01-1.47-3.3 7.6 7.6 0 00-.92.3 6.94 6.94 0 002.38 4.28c.03-.2.1-.39.18-.57.06-.12.13-.24.22-.34a4.89 4.89 0 01-.39-.37z"
                      />
                      <g fill="#afafaf">
                        <path d="M23.32 36.66a8.13 8.13 0 01-3.85 3.81L8 34.88a8.16 8.16 0 015-9.43 6.94 6.94 0 002.06 4 2.54 2.54 0 004.94 1 2.53 2.53 0 00-4.61-2 5.94 5.94 0 01-1.47-3.3 8.19 8.19 0 019.4 11.51zM13.07 43.35L5.45 59.01l-.86-.42 7.63-15.66zM11.08 42.38L3.46 58.04l-.57-.28 7.62-15.66z" />
                        <path d="M20 30.48a2.44 2.44 0 01-.55.94 2.54 2.54 0 01-4.39-1.94l.32.28A2 2 0 0019 31.37a2 2 0 00.42-.91 2 2 0 00-3.63-1.61 4.89 4.89 0 01-.39-.4 2.53 2.53 0 014.61 2z" />
                      </g>
                      <path
                        fill="#f87300"
                        d="M23.59 18.55c-.08.3-.27.57-.53.74a6 6 0 00-9.15 5.15c-.02.23-.02.45 0 .68a5.94 5.94 0 001.86 3.7 6 6 0 003.63 1.61 2 2 0 01-.42.91 6.85 6.85 0 01-3.93-1.89 6.94 6.94 0 014.84-11.97 7.05 7.05 0 013.7 1.07zM26.88 24.47c0 .9-.17 1.77-.5 2.6-.25-.23-.5-.44-.78-.64a6.15 6.15 0 00.16-3.43l1 .26c.08.4.12.8.12 1.21z"
                      />
                      <path
                        fill="#f4f8fa"
                        d="M35.81 6.12l-4.47 18a.31.31 0 01-.38.23l-4.18-1-1-.26L16 20.61a.31.31 0 01-.14-.54 5.94 5.94 0 015.1-1.53c.1.01.2.09.23.19a1.26 1.26 0 001.88.6c.26-.17.45-.44.53-.74a1.27 1.27 0 00-2.24-1.05.31.31 0 01-.29.1 7 7 0 00-6.54 2.46.3.3 0 01-.32.11l-2.29-.57a.31.31 0 01-.23-.38l4.46-18a.31.31 0 01.37-.26l19.05 4.74c.17.04.28.2.24.38z"
                      />
                      <path
                        fill="#f87300"
                        d="M21.73 8.02l7.78 1.93-1.28 5.16-9.99-2.48 2.81-1.87z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3>La location de votre bien</h3>
                  <p>
                    De L’étude locative à l’installation de votre locataire.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-center md:w-1/2 px-lg mb-3xl">
                <div className="w-auto">
                  <div className="pictogramme rounded-full lg:mx-lg">
                    <svg viewBox="0 0 48 66" width="50">
                      <defs />
                      <g fill="none">
                        <circle cx="15.84" cy="25.1" r="4.62" fill="#d8d8d8" />
                        <path
                          fill="#afafaf"
                          d="M20.42 25.1c0 1.75-1 3.36-2.56 4.14A4.63 4.63 0 0012.41 22a4.63 4.63 0 018 3.15z"
                        />
                        <path
                          fill="#d8d8d8"
                          d="M3.13 63.9V46.73a12.71 12.71 0 1125.42 0V63.9z"
                        />
                        <path
                          fill="#afafaf"
                          d="M43.27 47.89v17.18H17.84V47.89a12.72 12.72 0 0125.43 0z"
                        />
                        <path
                          fill="#afafaf"
                          d="M24 .83c.28 0 .5.22.5.5V63.9h-1V1.32c0-.28.22-.5.5-.5z"
                        />
                        <path
                          fill="#6e7274"
                          d="M24 0c.28 0 .5.22.5.5v23.56h-1V.5c0-.28.22-.5.5-.5z"
                        />
                        <path
                          fill="#d8d8d8"
                          d="M44.63 48.4v15.5H21.29V48.4a11.67 11.67 0 0123.34 0z"
                        />
                        <circle cx="32.96" cy="30.66" r="4.24" fill="#d8d8d8" />
                        <path
                          fill="#afafaf"
                          d="M37.21 30.66c0 1.63-.94 3.12-2.41 3.83a4.25 4.25 0 00-5-6.66 4.25 4.25 0 017.41 2.83z"
                        />
                        <path
                          fill="#f87300"
                          d="M47.94 19.15H.06C.18 9.47 10.85 1.65 24 1.65s23.82 7.82 23.94 17.5z"
                        />
                        <path
                          fill="#fff"
                          d="M33.74 19.15H14.26c0-9.68 4.39-17.5 9.74-17.5s9.69 7.82 9.74 17.5z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3>La gestion du locataire</h3>
                  <p>
                    L’appel et l’encaissement des loyers, le contrôle des
                    obligations du locataire, régler les litiges et impayés du
                    locataire et gérer son départ.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-center md:w-1/2 px-lg mb-3xl">
                <div className="w-auto">
                  <div className="pictogramme rounded-full lg:mx-lg">
                    <svg viewBox="0 0 54 64" width="50">
                      <g fill="none">
                        <path
                          fill="#d8d8d8"
                          d="M45.34 11.06v23.57H42.8V11.06z"
                        />
                        <path
                          fill="#afafaf"
                          d="M45.34 11.05v2.93H42.8v-2.93zM39.77 32.9h8.61v5.14h-8.61z"
                        />
                        <path
                          fill="#f87300"
                          d="M42.18 12l.3-6a.34.34 0 01.33-.32h2.53c.18 0 .33.14.34.32l.3 6a.34.34 0 01-.34.35h-3.13a.33.33 0 01-.33-.35z"
                        />
                        <g fill="#d8d8d8">
                          <path d="M11.35 24.49v30.42H5.1V24.49c1.99.88 4.26.88 6.25 0zM29.66 7.78v49.36a1 1 0 01-1 1h-5.18a1 1 0 01-1-1V7.78z" />
                          <rect
                            width="10.64"
                            height="26.33"
                            x="38.76"
                            y="37.38"
                            rx=".33"
                          />
                        </g>
                        <rect
                          width="1.86"
                          height="20.51"
                          x="41.25"
                          y="40.29"
                          fill="#afafaf"
                          rx=".93"
                        />
                        <rect
                          width="1.86"
                          height="20.51"
                          x="45.05"
                          y="40.29"
                          fill="#afafaf"
                          rx=".93"
                        />
                        <path
                          fill="#f87300"
                          d="M39.28 5.77V8c0 .19-.15.34-.34.34H14.88a.34.34 0 01-.33-.34V.47c0-.18.15-.33.33-.34h16.75c.12 0 .22.07.28.17a11.31 11.31 0 007.1 5.15c.15.03.26.16.27.32zM.48 56.73A7.75 7.75 0 1111.8 63.6a.34.34 0 01-.49-.3V57a.34.34 0 00-.16-.29L8.4 55a.3.3 0 00-.34 0l-2.75 1.63a.34.34 0 00-.16.29v6.38a.34.34 0 01-.49.3 7.74 7.74 0 01-4.18-6.87z"
                        />
                        <path fill="#afafaf" d="M22.48 8.3h7.18v2.24h-7.18z" />
                        <path
                          fill="#f87300"
                          d="M16 17.4a7.74 7.74 0 01-10.9 7.09 7.87 7.87 0 01-3.84-3.69 7.76 7.76 0 013.39-10.27.33.33 0 01.49.3v6.34c0 .12.07.23.17.29l.64.38 2.11 1.26c.1.06.23.06.34 0l2.1-1.26.64-.38c.1-.06.17-.17.17-.29v-6.34a.33.33 0 01.49-.3A7.73 7.73 0 0116 17.4z"
                        />
                        <path
                          fill="#afafaf"
                          d="M11.35 24.49v2.39c-2.04.6-4.21.6-6.25 0v-2.39c1.99.88 4.26.88 6.25 0zM53.52 18.79h-2V3.93c0-1-.8-1.8-1.8-1.8H46v-2h3.75c2.1 0 3.8 1.7 3.8 3.8z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3>La gestion de votre bien</h3>
                  <p>
                    Gérer l’entretien, les travaux, les sinistres, gérer le
                    dossier technique, les archives, les pré-états des lieux et
                    états des lieux.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-center md:w-1/2 px-lg mb-3xl">
                <div className="w-auto">
                  <div className="pictogramme rounded-full lg:mx-lg">
                    <svg viewBox="0 0 64 56" width="50">
                      <defs />
                      <g fill="none">
                        <path fill="#d8d8d8" d="M.5 53.22h19.88v2.27H.5z" />
                        <path
                          fill="#b3b3b3"
                          d="M20.89 56H0v-3.29h20.89zM1 55h18.88v-1.28H1z"
                        />
                        <path fill="#d8d8d8" d="M.5 50.95h19.88v2.27H.5z" />
                        <path
                          fill="#b3b3b3"
                          d="M20.89 53.72H0v-3.27h20.89zM1 52.71h18.88v-1.26H1z"
                        />
                        <path fill="#d8d8d8" d="M.5 48.69h19.88v2.27H.5z" />
                        <path
                          fill="#b3b3b3"
                          d="M20.89 51.45H0v-3.27h20.89zM1 50.45h18.88v-1.26H1z"
                        />
                        <path fill="#d8d8d8" d="M.5 46.42h19.88v2.27H.5z" />
                        <path
                          fill="#b3b3b3"
                          d="M20.89 49.19H0v-3.27h20.89zM1 48.18h18.88v-1.26H1z"
                        />
                        <path fill="#d8d8d8" d="M.5 44.15h19.88v2.27H.5z" />
                        <path
                          fill="#b3b3b3"
                          d="M20.89 46.92H0v-3.27h20.89zM1 45.92h18.88v-1.26H1z"
                        />
                        <path fill="#d8d8d8" d="M.5 41.89h19.88v2.27H.5z" />
                        <path
                          fill="#b3b3b3"
                          d="M20.89 44.66H0v-3.28h20.89zM1 43.65h18.88v-1.26H1z"
                        />
                        <path
                          fill="#d8d8d8"
                          d="M.82 39.62h19.57v2.27H.5v-2a.31.31 0 01.32-.27z"
                        />
                        <path
                          fill="#b3b3b3"
                          d="M20.89 42.39H0v-2.46c0-.45.37-.82.82-.82h20.07zM1 41.38h18.88v-1.26H1z"
                        />
                        <path
                          fill="#afafaf"
                          d="M8.2 39.56h8.04v15.93H8.2z"
                          opacity=".6"
                        />
                        <path
                          fill="#d8d8d8"
                          d="M13.46 53.22h19.88v2.27H13.46z"
                        />
                        <path
                          fill="#b3b3b3"
                          d="M33.84 56H13v-3.29h20.84zM14 55h18.84v-1.28H14z"
                        />
                        <path
                          fill="#d8d8d8"
                          d="M13.46 50.95h19.88v2.27H13.46z"
                        />
                        <path
                          fill="#b3b3b3"
                          d="M33.84 53.72H13v-3.27h20.84zM14 52.71h18.84v-1.26H14z"
                        />
                        <path
                          fill="#d8d8d8"
                          d="M13.46 48.69h19.88v2.27H13.46z"
                        />
                        <path
                          fill="#b3b3b3"
                          d="M33.84 51.45H13v-3.27h20.84zm-19.84-1h18.84v-1.26H14z"
                        />
                        <path
                          fill="#d8d8d8"
                          d="M13.46 46.42h19.88v2.27H13.46z"
                        />
                        <path
                          fill="#b3b3b3"
                          d="M33.84 49.19H13v-3.27h20.84zM14 48.18h18.84v-1.26H14z"
                        />
                        <path
                          fill="#d8d8d8"
                          d="M13.46 44.15h19.88v2.27H13.46z"
                        />
                        <path
                          fill="#b3b3b3"
                          d="M33.84 46.92H13v-3.27h20.84zm-19.84-1h18.84v-1.26H14z"
                        />
                        <path
                          fill="#d8d8d8"
                          d="M13.46 41.89h19.88v2.27H13.46z"
                        />
                        <path
                          fill="#b3b3b3"
                          d="M33.84 44.66H13v-3.28h20.84zM14 43.65h18.84v-1.26H14z"
                        />
                        <path
                          fill="#d8d8d8"
                          d="M13.46 39.62h19.88v2.27H13.46z"
                        />
                        <path
                          fill="#b3b3b3"
                          d="M33.84 42.39H13v-3.28h20.84zM14 41.38h18.84v-1.26H14z"
                        />
                        <path
                          fill="#d8d8d8"
                          d="M13.46 37.29h19.88v2.27H13.46z"
                        />
                        <path
                          fill="#b3b3b3"
                          d="M33.84 40.06H13v-3.27h20.84zM14 39.05h18.84v-1.26H14z"
                        />
                        <path
                          fill="#d8d8d8"
                          d="M13.77 35H33a.31.31 0 01.31.31v2H13.46v-2a.31.31 0 01.31-.31z"
                        />
                        <path
                          fill="#b3b3b3"
                          d="M33.84 37.79H13v-2.46c0-.45.37-.81.82-.81H33c.45 0 .81.36.81.81zm-19.84-1h18.84v-1.26H14z"
                        />
                        <path
                          fill="#afafaf"
                          d="M21.55 35.02h11.79v20.46H21.55z"
                          opacity=".6"
                        />
                        <rect
                          width="37.01"
                          height="55.98"
                          x="26.99"
                          y=".01"
                          fill="#d8d8d8"
                          rx=".62"
                        />
                        <g fill="#afafaf">
                          <circle cx="34.1" cy="22.28" r="2.7" />
                          <circle cx="41.67" cy="22.28" r="2.7" />
                          <circle cx="49.25" cy="22.28" r="2.7" />
                        </g>
                        <circle cx="56.82" cy="22.28" r="2.7" fill="#f87300" />
                        <circle cx="34.1" cy="29.1" r="2.7" fill="#6e7274" />
                        <circle cx="41.67" cy="29.1" r="2.7" fill="#6e7274" />
                        <circle cx="49.25" cy="29.1" r="2.7" fill="#6e7274" />
                        <circle cx="56.82" cy="29.1" r="2.7" fill="#f87300" />
                        <circle cx="34.1" cy="35.93" r="2.7" fill="#6e7274" />
                        <circle cx="41.67" cy="35.93" r="2.7" fill="#6e7274" />
                        <circle cx="49.25" cy="35.93" r="2.7" fill="#6e7274" />
                        <circle cx="56.82" cy="35.93" r="2.7" fill="#f87300" />
                        <circle cx="34.1" cy="42.75" r="2.7" fill="#6e7274" />
                        <circle cx="41.67" cy="42.75" r="2.7" fill="#6e7274" />
                        <circle cx="49.25" cy="42.75" r="2.7" fill="#6e7274" />
                        <circle cx="56.82" cy="42.75" r="2.7" fill="#f87300" />
                        <circle cx="34.1" cy="49.58" r="2.7" fill="#6e7274" />
                        <circle cx="41.67" cy="49.58" r="2.7" fill="#6e7274" />
                        <circle cx="49.25" cy="49.58" r="2.7" fill="#6e7274" />
                        <circle cx="56.82" cy="49.58" r="2.7" fill="#f87300" />
                        <path
                          fill="#afafaf"
                          d="M31.47 5.66h28.05v9.44H31.47z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3>La gestion de compte</h3>
                  <p>
                    Régler les factures, les charges Effectuer les
                    régularisations de charges, solder les comptes des
                    locataires sortants Vous aider dans la déclaration de vos
                    revenus fonciers
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-center md:w-1/2 px-lg mb-3xl">
                <div className="w-auto">
                  <div className="pictogramme rounded-full lg:mx-lg">
                    <svg viewBox="0 0 50 64" width="50">
                      <defs />
                      <g fill="none">
                        <path
                          fill="#afafaf"
                          d="M44 41.87H6V19a19 19 0 0138 0zm-32.35-5.6h26.72V19a13.37 13.37 0 00-26.74 0z"
                        />
                        <path fill="#d8d8d8" d="M.07 28.06h49.87V64H.07z" />
                        <path
                          fill="#afafaf"
                          d="M47.82 28.06h2.11V64h-2.11zM.07 28.06h2.11V64H.07z"
                        />
                        <path fill="#f87300" d="M16.23 37.07h17.55V64H16.23z" />
                        <circle cx="30.28" cy="51.22" r="1" fill="#6e7274" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3>La gestion du risque</h3>
                  <p>
                    Possibilité de garantir les loyers impayés, les dégradations
                    immobilières et possibilité de bénéficier d’une protection
                    juridique
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col items-center md:w-1/2 px-lg mb-3xl">
                <div className="w-auto">
                  <div className="pictogramme rounded-full lg:mx-lg">
                    <svg viewBox="0 0 139 56" width="50">
                      <defs />
                      <path fill="#e87a00" d="M115 56H0V0h139l-24 31z" />
                    </svg>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3>Et plus encore</h3>
                  <p>
                    <Link href="/contact">
                      <a>
                        Contactez-nous pour une présentation détaillée de nos
                        services.
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-4xl">
        <div className="container">
          <div className="flex md:flex-row flex-col items-center -mx-lg">
            <div className="xl:w-1/3 lg:ml-2col md:w-1/2 w-full px-lg md:mb-0 mb-xl">
              <div style={{ height: 474 }} className="image-wrapper">
                <Image
                  path="homepage/section-one@2x.jpg"
                  className="object-none h-full w-full"
                />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 xl:ml-3col lg:ml-1col px-lg">
              <div className="md:max-w-320">
                <p className="surtitle">La garantie d’obtenir</p>
                <h2>
                  Les + <span className="uppercase">suggestion</span>
                </h2>
                <ul className="list">
                  <li>
                    Un gestionnaire unique et dédié, mettant votre satisfaction
                    au premier plan.
                  </li>
                  <li>
                    Un espace privé pour obtenir en un clic les informations sur
                    votre gestion
                  </li>
                </ul>
                <p>
                  <strong>Vous êtes propriétaire investisseur</strong> et vous
                  souhaitez un devis personnalisé ou simplement plus
                  d’information sur notre offre de gestion locative ?
                </p>

                <Link href="/contact">
                  <a className="link">Contactez-nous </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
    </div>
  );
}
