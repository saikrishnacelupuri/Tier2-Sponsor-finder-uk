
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SponsorshipSearch from '@/components/SponsorshipSearch';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <SponsorshipSearch />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
