import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Cards2 from '../Cards2';
import Footer from '../Footer';



function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Cards2 />
      <Footer />
    </>
  );
}

export default Home;
