import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FAQSection from "../../components/FAQSection/FAQSection";
import Footer from "../../components/Footer/Footer";

const QA = () => {
  return (
    <div style={{ background: '#0f0f0f', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ paddingTop: '140px', flex: 1, paddingBottom: '50px' }}>
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default QA;
