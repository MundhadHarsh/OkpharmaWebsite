import React from "react";

const FAQ = () => {
  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>What systems does this integrate with?</h4>
          <p>Our software integrates with all major healthcare systems including EHR, EMR, and billing systems.</p>
        </div>
        <div className="faq-item">
          <h4>Is there mobile access?</h4>
          <p>Yes, you can access the software from any mobile device.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
