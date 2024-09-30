import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Course.css';

function Course() {
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

    const courses = [
        {
            name: 'Web Development',
            description: 'Learn the basics of web development, including HTML, CSS, and JavaScript for building modern websites.',
            img: 'https://i.pinimg.com/564x/5d/88/29/5d8829bed99e9097145dd9ca97ec3c9f.jpg',
            link: '/webdev' // Add a unique link for the course
        },
        {
            name: 'Data Science',
            description: 'Discover data analysis and visualization techniques using Python and machine learning tools for effective insights.',
            img: 'https://i.pinimg.com/564x/9c/35/56/9c3556990395207448e2eb4f7c5f6158.jpg',
            link: '/ds'
        },
        {
            name: 'Graphic Design',
            description: 'Enhance your design skills with Adobe tools, focusing on creating stunning graphics for various media.',
            img: 'https://img.freepik.com/free-vector/flat-design-graphic-designer-template_23-2150511816.jpg',
            link: '/gd'
        },
        {
            name: 'Digital Marketing',
            description: 'Master the art of digital marketing with SEO strategies, social media management, and effective content creation.',
            img: 'https://i.pinimg.com/564x/a6/14/b9/a614b9633dd00283d34d19ce27ea084a.jpg',
            link: '/dm'
        },
        {
            name: 'Machine Learning',
            description: 'Dive into machine learning concepts, algorithms, and applications using popular frameworks and hands-on projects.',
            img: 'https://i.pinimg.com/736x/22/de/ab/22deabb717df62f86bf9348e4f690842.jpg',
            link: '/ml'
        },
        {
            name: 'Photography',
            description: 'Learn essential photography techniques and editing skills to capture and enhance stunning images effectively.',
            img: 'https://i.pinimg.com/564x/d7/5d/1e/d75d1e6a8c2e7090d55d8cdf184de16c.jpg',
            link: '/ph'
        },
        {
            name: 'Mobile App Development',
            description: 'Create dynamic mobile apps for Android and iOS using modern frameworks and best practices in design.',
            img: 'https://i.pinimg.com/736x/b2/2d/6d/b22d6d3a2d69a820c8d8d14ec7a73944.jpg',
            link: '/md'
        },
        {
            name: 'Cybersecurity',
            description: 'Understand cybersecurity principles and techniques to protect networks and systems against potential threats.',
            img: 'https://i.pinimg.com/564x/9b/44/20/9b44204581637299fdfcfe54993a9190.jpg',
            link: '/cyber'
        }
    ];

    return (
        <div>
            <section id="courses" className="courses">
                <h2>Available Courses</h2>
                <div className="course-container">
                    {courses.map((course, index) => (
                        <div className="course-item" key={index}>
                            <div
                                className="course-box"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img src={course.img} alt={course.name} className="course-image" />
                                <div className="course-description">
                                    <p>{course.description}</p>
                                </div>
                                {/* Link to the course details page */}
                                <Link to={course.link} className="course-link">
                                    {course.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Course;
