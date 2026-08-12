import React, { useState } from "react";
import "./PricingPlans.css";

const plans = [
  {
    title: "Basic Plan",
    description:
      "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    priceMonthly: "9.99",
    priceYearly: "99.99",
  },
  {
    title: "Standard Plan",
    description:
      "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
    priceMonthly: "12.99",
    priceYearly: "129.99",
  },
  {
    title: "Premium Plan",
    description:
      "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
    priceMonthly: "14.99",
    priceYearly: "149.99",
  },
];

const PricingPlans = () => {
  const [billing, setBilling] = useState("monthly"); // 'monthly' or 'yearly'

  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Choose the plan that’s right for you</h2>
      <p className="pricing-subtitle">
        Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences.
        Get ready for non-stop entertainment!
      </p>

      {/* Toggle Button */}
      <div className="billing-toggle">
        <button
          className={billing === "monthly" ? "active" : ""}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          className={billing === "yearly" ? "active" : ""}
          onClick={() => setBilling("yearly")}
        >
          Yearly
        </button>
      </div>

      {/* Plans */}
      <div className="plans-grid">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
            <h2>
              ${billing === "monthly" ? plan.priceMonthly : plan.priceYearly}
              <span> /{billing}</span>
            </h2>
            <div className="plan-buttons">
              <button className="btn-outline">Start Free Trial</button>
              <button className="btn-primary">Choose Plan</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
