import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Mentorship',
    description: 'One-on-one guidance from experienced mentors to help you achieve your career goals.'
  },
  {
    id: 2,
    title: 'Courses',
    description: 'A variety of courses designed to enhance your skills and knowledge in different fields.',
    link: '/course' // Add link for courses
  },
  {
    id: 3,
    title: 'Text Resources',
    description: 'Access to comprehensive text materials and resources to support your learning journey.'
  },
  // Add more services as needed
];

function Service() {
  return (
    <div className="services-container">
      <h1 className='ser'>Our Services</h1>
      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-card">
            {service.link ? ( // Check if there is a link
              <Link to={service.link} className="service-link">
                <h2>{service.title}</h2>
              </Link>
            ) : (
              <h2>{service.title}</h2>
            )}
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
