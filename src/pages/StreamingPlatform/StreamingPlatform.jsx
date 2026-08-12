import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DeviceSection from "../../components/DeviceSection/DeviceSection";
import Footer from "../../components/Footer/Footer";

const StreamingPlatform = () => {
  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ paddingTop: '140px', flex: 1, paddingBottom: '50px' }}>
        <DeviceSection />
      </div>
      <Footer />
    </div>
  );
};

export default StreamingPlatform;
