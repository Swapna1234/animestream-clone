import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const json = await res.json();
        setAnime(json.data);
      } catch (err) {
        console.error("Failed to fetch anime details:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchAnime();
  }, [id]);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="Back" onClick={()=>{navigate(-1)}}/>
      {loading ? (
        <div style={{ color: '#fff', fontSize: '1.2rem' }}>Loading trailer...</div>
      ) : anime?.trailer?.embed_url ? (
        <iframe 
          width="90%" 
          height="85%" 
          src={anime.trailer.embed_url}
          title={`${anime.title} Trailer`} 
          frameBorder="0" 
          allowFullScreen
          style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)', background: '#000' }}
        ></iframe>
      ) : (
        <video 
          width="90%" 
          height="85%" 
          controls 
          autoPlay 
          muted
          name="media"
        >
          <source src="/trailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="player-info">
        <p>{anime?.title ? `Preview • Now Playing: ${anime.title}` : 'Preview • Now Playing'}</p>
        <p>MyAnimeList ID: {id}</p>
      </div>
    </div>
  );
};

export default Player;