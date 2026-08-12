import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import AnimeGrid from "../../components/AnimeGrid/AnimeGrid";
import rectangle from "../../assets/Rectangle.png";
import vector2 from "../../assets/Vector 2.png";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import CTASection from "../../components/CTASection/CTASection";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
    <div className="home">
      <Navbar />

      <div className="anime-section">
        <AnimeGrid />

        <div className="overlay">
          <img src={rectangle} alt="rectangle" className="bg-rectangle" />
          <img src={vector2} alt="vector" className="center-vector" />
        </div>
        <div className="hero-text">
          <h1>The Best Streaming Experience</h1>
          <p>
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <button className="watch-btn" onClick={() => navigate('/movies-shows')}>▶ Start Watching Now</button>
        </div>
      </div>
      
      <div id="popular" style={{ paddingTop: '60px', paddingBottom: '60px', background: '#0f0f0f' }}>
        <h1 className="main-header" style={{ paddingLeft: '40px', color: '#fff', marginBottom: '20px' }}>Popular on AnimeStream</h1>
        <TitleCards/>
      </div>
    </div>
    <CTASection/>
    <Footer/>
    </div>
  );
};

export default Home;
