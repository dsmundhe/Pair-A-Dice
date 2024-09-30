import React from 'react';
import './WebDev.css'; // Import CSS for styling

const courses = [
    {
        id: 1,
        title: "React for Beginners",
        description: "Learn the basics of React, a popular JavaScript library for building user interfaces.",
        image: "https://i.pinimg.com/564x/a2/6b/c8/a26bc8ee8887491dd2f3f30f09399683.jpg", // Replace with your actual image URLs
    },
    {
        id: 2,
        title: "JavaScript Essentials",
        description: "Master the core concepts of JavaScript, the programming language of the web.",
        image: "https://i.pinimg.com/564x/40/99/f9/4099f9bfa687d53d07973e8a08805970.jpg",
    },
    {
        id: 3,
        title: "HTML & CSS Fundamentals",
        description: "Understand the foundations of web development with HTML and CSS.",
        image: "https://i.pinimg.com/564x/42/3b/97/423b97b41c8b420d28e84f9b07a530ec.jpg",
    },
    {
        id: 4,
        title: "Node.js for Backend Development",
        description: "Dive into server-side development using Node.js and Express.js.",
        image:'https://i.pinimg.com/736x/94/60/e0/9460e064dd2a118606cda8e1d6ae5881.jpg'
    },
    {
        id: 5,
        title: "Bootstrap Basics",
        description: "Create responsive websites quickly using Bootstrap framework.",
        image: "https://i.pinimg.com/564x/e9/48/45/e94845f3ac98de51b7c63e507206d296.jpg",
    },
    {
        id: 6,
        title: "Vue.js for Beginners",
        description: "Explore Vue.js and its ecosystem for building interactive web applications.",
        image: "https://i.pinimg.com/736x/1c/e5/32/1ce532ec9efbc1d669a07aacf3220600.jpg",
    },
    {
        id: 7,
        title: "Web Development with PHP",
        description: "Learn server-side programming using PHP and MySQL.",
        image: "https://i.pinimg.com/564x/1c/26/d2/1c26d280d5b3780836c03b32821c8152.jpg",
    },
    {
        id: 8,
        title: "Advanced CSS Techniques",
        description: "Enhance your web designs with advanced CSS techniques and animations.",
        image: "https://i.pinimg.com/564x/c7/ff/2c/c7ff2c8415cbf92fd9e4c72fa7b5a1f3.jpg",
    },
];

function WebDev() {
    return (
        <div className="webdev-container">
            <h2>Web Development Courses</h2>
            <div className="course-container">
                {courses.map(course => (
                    <div className="course-item" key={course.id}>
                        <img src={course.image} alt={course.title} className="course-image" />
                        <div className="course-info">
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-description">{course.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WebDev;
