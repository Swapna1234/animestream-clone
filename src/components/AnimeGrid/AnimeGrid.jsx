import React from "react";
import "./AnimeGrid.css";

import poster1 from "../../assets/poster1.png";
import poster2 from "../../assets/poster2.png";
import poster3 from "../../assets/poster3.png";
import poster4 from "../../assets/poster4.png";
import poster5 from "../../assets/poster5.png";
import poster6 from "../../assets/poster6.png";
import poster7 from "../../assets/poster7.png";
import poster8 from "../../assets/poster8.png";
import poster9 from "../../assets/poster9.png";
import poster10 from "../../assets/poster10.png";
import poster11 from "../../assets/poster11.png";
import poster12 from "../../assets/poster12.png";
import poster13 from "../../assets/poster13.png";
import poster14 from "../../assets/poster14.png";
import poster15 from "../../assets/poster15.png";
import poster16 from "../../assets/poster16.png";
import poster17 from "../../assets/poster17.png";
import poster18 from "../../assets/poster18.png";
import poster19 from "../../assets/poster19.png";
import poster20 from "../../assets/poster20.png";
import poster21 from "../../assets/poster21.png";
import poster22 from "../../assets/poster22.png";
import poster23 from "../../assets/poster23.png";
import poster24 from "../../assets/poster24.png";
import poster25 from "../../assets/poster25.png";
import poster26 from "../../assets/poster26.png";
import poster27 from "../../assets/poster27.png";
import poster28 from "../../assets/poster28.png";


const AnimeGrid = () => {
  const posters = [
    poster1, poster2, poster3, poster4, poster5,
    poster6, poster7, poster8, poster9, poster10,
    poster11, poster12, poster13, poster14, poster15,
    poster16, poster17, poster18, poster19, poster20,
    poster21, poster22, poster23, poster24, poster25,
  ];

  return (
    <div className="anime-grid">
      {posters.map((poster, index) => (
        <div key={index} className="anime-card">
          <img src={poster} alt={`Anime Poster ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default AnimeGrid;
