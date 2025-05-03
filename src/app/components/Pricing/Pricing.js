import React from "react";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <h2>Pricing Plans</h2>
        <div className="pricing-table">
          <div className="pricing-item">
            <h3>Basic Plan</h3>
            <p>$49/month</p>
            <ul>
              <li>Basic Inventory Tracking</li>
              <li>Email Support</li>
            </ul>
            <button className="cta-button-pricing">Choose Basic</button>
          </div>
          <div className="pricing-item">
            <h3>Pro Plan</h3>
            <p>$99/month</p>
            <ul>
              <li>Advanced Inventory Management</li>
              <li>Mobile Access</li>
              <li>24/7 Support</li>
            </ul>
            <button className="cta-button-pricing">Choose Pro</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
