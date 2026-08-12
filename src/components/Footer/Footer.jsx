import React from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-col">
          <h4>Home</h4>
          <ul>
            <li>Categories</li>
            <li>Devices</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Movies</h4>
          <ul>
            <li>Genres</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Shows</h4>
          <ul>
            <li>Genres</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="footer-col">
          <h4>Subscription</h4>
          <ul>
            <li>Plans</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Column 6 */}
        <div className="footer-col">
          <h4>Connect With Us</h4>
          <div className="footer-icons">
            <img src={facebook_icon} alt="facebook" />
            <img src={twitter_icon} alt="twitter" />
            <img src={youtube_icon} alt="Youtube" />
            <img src={instagram_icon} alt="Instagram" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copywrite-text">
          <span className="copyright-symbol">©</span> 2023 streamvib, All Rights Reserved
        </p>

        <ul className="footer-links">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
