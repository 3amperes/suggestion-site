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
          <p className="mb-lg">
            Une sélection de biens en location pour répondre à votre recherche.
          </p>
          <a className="link">Gestion locative</a>
        </div>
        <div className="lg:w-1/6 w-1/2 px-lg mb-3xl">
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
