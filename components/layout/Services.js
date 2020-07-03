import React from 'react';

const Services = () => (
  <section className="py-4xl bg-paleGrey text-center ">
    <div className="max-w-320 mx-auto mb-3xl">
      <p className="surtitle">Des services</p>
      <h2>Proches de vous</h2>
      Basé à Rennes, SUGGESTION propose ses services de gestion locative et de
      conseil en gestion de patrimoine sur tout le grand ouest. Nous proposons
      également en direct un catalogue d’offre de location sur le bassin
      rennais.
    </div>

    <div className="container">
      <div className="flex md:flex-row flex-col justify-center items-center -mx-lg">
        <div className="lg:w-1/6 w-1/2 px-lg mb-3xl">
          <div className="pictogramme mb-2xl">
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

          <p className="mb-lg">
            Une sélection de biens en location pour répondre à votre recherche.
          </p>
          <a className="link">Gestion locative</a>
        </div>
        <div className="lg:w-1/6 w-1/2 px-lg mb-3xl">
          <div className="pictogramme mb-2xl">
            <svg viewBox="0 0 64 62" width="60">
              <path fill="#d8d8d8" d="M.05 33.35h25.49V61.7H.05z" />
              <path fill="#afafaf" d="M25.54 33.35h11.43V61.7H25.54z" />
              <path
                fill="#6e7274"
                d="M3.28 37.29h4.38v6.92H3.28zM10.61 37.29h4.38v6.92h-4.38zM17.93 37.29h4.38v6.92h-4.38zM3.28 50.08h4.38V57H3.28z"
              />
              <path fill="#f87300" d="M9.73 50.08h6.13v11.61H9.73z" />
              <path
                fill="#6e7274"
                d="M17.93 50.08h4.38V57h-4.38zM11.48 33.34h25.49l-5.58-9.96H6.7z"
              />
              <path fill="#afafaf" d="M25.54 33.34H.05l5.97-9.96h25.37z" />
              <path
                fill="#d8d8d8"
                d="M31.55 4.47v57.22h9.68V50.08h6.12v11.61h9.52V4.47zM39.15 57h-4.37v-6.92h4.37zm0-12.8h-4.37v-6.91h4.37zm0-12.79h-4.37V24.5h4.37zm0-13.11h-4.37v-6.91h4.37zm7.33 25.9H42.1v-6.91h4.38zm0-12.79H42.1V24.5h4.38zm0-13.11H42.1v-6.91h4.38zM53.8 57h-4.37v-6.92h4.37zm0-12.8h-4.37v-6.91h4.37zm0-12.79h-4.37V24.5h4.37zm0-13.11h-4.37v-6.91h4.37z"
              />
              <path fill="#afafaf" d="M57.03 4.47h-.16v57.22H64V4.47z" />
              <g fill="#6e7274">
                <path d="M34.78 24.5h4.38v6.92h-4.38zM42.1 24.5h4.38v6.92H42.1zM49.43 24.5h4.38v6.92h-4.38zM34.78 11.39h4.38v6.92h-4.38zM42.1 11.39h4.38v6.92H42.1zM49.43 11.39h4.38v6.92h-4.38zM34.78 37.29h4.38v6.92h-4.38zM42.1 37.29h4.38v6.92H42.1zM49.43 37.29h4.38v6.92h-4.38zM34.78 50.08h4.38V57h-4.38z" />
              </g>
              <path fill="#f87300" d="M41.23 50.09V61.7h6.12V50.09z" />
              <path fill="#6e7274" d="M49.43 50.08h4.38V57h-4.38z" />
              <path fill="#afafaf" d="M31.55.97h25.32v3.5H31.55z" />
              <path fill="#6e7274" d="M56.87.97H64v3.5h-7.13z" />
            </svg>
          </div>
          <p className="mb-lg">
            Des solutions pratiques et efficaces pour la gestion de vos biens
            immobiliers
          </p>
          <a className="link">Offre de location</a>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
