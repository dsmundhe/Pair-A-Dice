import React from "react";
import './GetSkills.css'; // Assuming the same CSS file is used
import Course from "../course/Course";
import Contact from "../contact/Contact";
import About from "../About/About";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const sponsors = [
  { id: 1, name: 'TCS', logo: 'https://i.pinimg.com/originals/fd/04/cb/fd04cb98be3fe155442df3e2c7e25bcf.gif' },
  { id: 2, name: 'WIPRO', logo: 'https://i.pinimg.com/564x/38/72/e6/3872e643fe1374d42bbe8e31199dc64a.jpg' },
  { id: 3, name: 'IBM', logo: 'https://i.pinimg.com/originals/9f/50/5b/9f505b1553d51b73878014cc02b9e88d.gif' },
  { id: 4, name: 'JSW', logo: 'https://i.pinimg.com/564x/f4/f4/b0/f4f4b07942a88cb4c5aed355351ae86e.jpg' },
  // Add more sponsors as needed
];

const GetSkills = () => {
  const showAlert = (courseName) => {
    alert("You clicked on " + courseName);
  };

  const handleMouseMove = (event) => {
    const box = event.currentTarget;
    const { width, height, left, top } = box.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    const xPercent = (x / width) * 100;
    const yPercent = (y / height) * 100;

    // Invert the tilt effect
    const tiltX = (yPercent - 50) * -0.2; // Adjust the tilt amount
    const tiltY = (xPercent - 50) * 0.2; // Adjust the tilt amount

    box.style.transform = `perspective(300px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = (event) => {
    const box = event.currentTarget;
    box.style.transform = 'perspective(300px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div>
      <section className="hero">
        <h1>Welcome to <span>GetSkills</span></h1>
        <p>Your gateway to learning new skills, unlocking potential, and building a brighter future.</p>
        <div className="btns">
          <Link to='/signup'><button type='button'><span></span>Sign up</button></Link>
          <Link to='/login'><button type='button'><span></span>Login</button></Link>
        </div>
      </section>

      <div className="sponsors">
        <h2>Our Sponsors</h2>
        <div className="sponsor-list">
          {sponsors.map(sponsor => (
            <div key={sponsor.id} className="sponsor-card" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <img src={sponsor.logo} alt={sponsor.name} />
              <p>{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GetSkills;
