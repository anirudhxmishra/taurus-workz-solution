import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientLogo from './ClientLogo';

const Clients = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Esteemed Clients
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Taurus Workz is trusted by global enterprises, tech leaders, telecom giants,
            pharmaceutical innovators, and luxury real estate firms.
          </p>

          <ClientLogo />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
