import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TitleCards.css";

const categories = ["Action", "Adventure", "Comedy", "Drama", "Romantic", "Tragedy", "Dark Fantasy"]; 

const TitleCards = () => {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/anime?limit=25");
        const json = await response.json();
        setAnimeData(json.data || []);
      } catch (err) {
        console.error("Failed to fetch anime data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnimes();
  }, []);

  if (loading) {
    return <div style={{ color: '#fff', padding: '20px 40px', fontSize: '1.2rem' }}>Loading anime...</div>;
  }

  return (
    <div className="title-cards">
      {categories.map((category, idx) => {
        // Group logic: for visual variety without hitting rate limits, slice the single API response differently for each row
        const posters = [...animeData.slice(idx * 3), ...animeData.slice(0, idx * 3)].slice(0, 15);

        return (
          <div className="category-row" key={category}>
            <div className="category-header">
              <h2 className="category-name">{category}</h2>
            </div>
            <div className="cards-scroll-container">
              {posters.map((anime, index) => (
                <Link to={`/player/${anime.mal_id}`} className="card" key={`${anime.mal_id}-${index}`}>
                  <img src={anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url} alt={anime.title} />
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TitleCards;
