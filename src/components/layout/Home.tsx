import React from 'react';
import Header from './Header';
import HeroHome from './HeroHome';
import FeaturesHome from './Features';
import FeaturesBlocks from './FeaturesBlocks';
import Newsletter from './Newsletter';
import Banner from './Banner';
import Carousel from "../carousel/Carousel";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <Carousel />
        <FeaturesBlocks />
        <Newsletter />

      </main>

      <Banner />

    </div>
  );
}

export default Home;
