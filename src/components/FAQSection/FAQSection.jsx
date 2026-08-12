import React, { useState } from "react";
import "./FAQSection.css";

const faqs = [
  {
    id: "01",
    question: "What is StreamVibe?",
    answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
  },
  {
    id: "02",
    question: "How much does StreamVibe cost?",
    answer: "StreamVibe offers flexible pricing plans depending on your needs. Check our pricing page for details."
  },
  {
    id: "03",
    question: "What content is available on StreamVibe?",
    answer: "We provide a wide variety of content, including movies, TV shows, anime, and documentaries."
  },
  {
    id: "04",
    question: "How can I watch StreamVibe?",
    answer: "You can watch StreamVibe via our website, mobile apps, smart TVs, and supported devices."
  },
  {
    id: "05",
    question: "How do I sign up for StreamVibe?",
    answer: "Simply click the Sign Up button on our homepage and follow the steps."
  },
  {
    id: "06",
    question: "What is the StreamVibe free trial?",
    answer: "We offer a free trial for new users to experience our platform before subscribing."
  },
  {
    id: "07",
    question: "How do I contact StreamVibe customer support?",
    answer: "You can reach our support team via email, chat, or the help center."
  },
  {
    id: "08",
    question: "What are the StreamVibe payment methods?",
    answer: "We support major credit cards, debit cards, PayPal, and other local payment options."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <div>
          <h2>Frequently Asked Questions</h2>
          <p>
            Got questions? We’ve got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
          </p>
        </div>
        <button className="faq-btn">Ask a Question</button>
      </div>

      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div key={faq.id} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-id">{faq.id}</span>
              <span>{faq.question}</span>
              <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
