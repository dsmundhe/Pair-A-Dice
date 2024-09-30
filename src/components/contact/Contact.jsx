import React, { useState } from 'react';
import './Contact.css'
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your message has been sent!`);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <section id="contact" className="about">
        <h2>Contact Us</h2>
        <p>
          Aashvi Tekade - 7666773966<br />
          Dipak Mundhe - 8080255843
        </p>

         <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
