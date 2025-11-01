import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-left">
        <h1>
          Let’s Talk About <br />
          <span className="ai-highlight">AI & Automation</span>
        </h1>
        <p>
          Have questions or want to explore how AI can automate your RFP process?
          Reach out to our team — we’ll get back within 24 hours.
        </p>

        <div className="contact-info">
          <p><span>📧</span> xay@xyz.com</p>
          <p><span>📞</span> +91 xxxxx</p>
          <p><span>📍</span> India</p>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form">
          <h2>Send a Message</h2>
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-glow">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
