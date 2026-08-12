import React from "react";
import "./DeviceSection.css";
import smartphone from "../../assets/smartphone.png";
import tablet from "../../assets/tablet.png";
import smarttv from "../../assets/smarttv.png";
import laptop from "../../assets/laptop.png";
import gamingconsole from "../../assets/gamingconsole.png";
import vrheadphones from "../../assets/vrheadphones.png";

const DeviceSection = () => {
  const devices = [
    {
      icon: smartphone,
      title: "Smartphones",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store."
    },
    {
      icon: tablet,
      title: "Tablet",
      desc: "StreamVibe is optimized for both Android and iOS tablets. Download our app from the Google Play Store or the Apple App Store."
    },
    {
      icon: smarttv,
      title: "Smart TV",
      desc: "StreamVibe is optimized for Smart TVs, giving you the big screen experience with ease."
    },
    {
      icon: laptop,
      title: "Laptops",
      desc: "StreamVibe works seamlessly on laptops. Enjoy streaming via your favorite browser."
    },
    {
      icon: gamingconsole,
      title: "Gaming Consoles",
      desc: "StreamVibe is available for popular gaming consoles, so you can enjoy streaming between games."
    },
    {
      icon: vrheadphones,
      title: "VR Headsets",
      desc: "StreamVibe supports VR headsets for an immersive entertainment experience."
    }
  ];

  return (
    <section className="devices-section">
      <h2>We Provide you streaming experience across various devices.</h2>
      <p className="devices-subtitle">
        With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. 
        Our platform is designed to be compatible with a wide range of devices, ensuring that 
        you never miss a moment of entertainment.
      </p>

      <div className="devices-grid">
        {devices.map((device, index) => (
          <div className="device-card" key={index}>
            <img src={device.icon} alt={device.title} className="device-icon" />
            <h3>{device.title}</h3>
            <p>{device.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeviceSection;
