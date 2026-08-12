import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const MoviesShows = () => {
  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ paddingTop: '140px', flex: 1, paddingBottom: '50px' }}>
        <h1 style={{ padding: '0 40px', marginBottom: '20px', color: '#fff' }}>Popular on AnimeStream</h1>
        <TitleCards />
      </div>
      <Footer />
    </div>
  );
};

export default MoviesShows;
