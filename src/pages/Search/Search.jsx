import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Search.css";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }

    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=24`);
        const json = await response.json();
        setResults(json.data || []);
      } catch (err) {
        console.error("Failed to fetch search results:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchResults();
  }, [query]);

  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ paddingTop: '140px', flex: 1, paddingBottom: '50px' }}>
        <h1 style={{ padding: '0 40px', marginBottom: '20px', color: '#fff' }}>
          Search Results for "{query}"
        </h1>
        
        {loading ? (
          <p style={{ color: '#aaa', padding: '0 40px' }}>Searching...</p>
        ) : results.length > 0 ? (
          <div className="search-grid">
            {results.map((anime) => (
              <Link to={`/player/${anime.mal_id}`} className="search-card" key={anime.mal_id}>
                <img src={anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url} alt={anime.title} />
                <div className="search-card-title">{anime.title}</div>
              </Link>
            ))}
          </div>
        ) : (
          <p style={{ color: '#aaa', padding: '0 40px' }}>No results found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
