import React from 'react';
import './ContactSection.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <p>If you'd like to get in touch feel free to drop an email or connect me on my number.</p>
        <div className="contact-info">
          <p><strong>Email:</strong> prasadpvsn@example.com</p>
          <p><strong>Phone:</strong> +91-9948739333</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;