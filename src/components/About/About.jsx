import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are <span>Lokesh Chaudhary</span> and <span>Kshitij Hatwar</span>, students of the ETC Department at <span>GHRCE Nagpur</span>. 
            This webpage is our project for the Web Development Minor, designed to showcase our skills and earn 5 marks in the TAE-2 assessment.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
