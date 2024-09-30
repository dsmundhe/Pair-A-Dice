import React from 'react';
import './Photo.css';

function Photo() {
    const courses = [
        {
            name: 'Photography Basics',
            description: 'Learn the fundamentals of photography, including composition, exposure, and lighting.',
            img: 'https://i.pinimg.com/564x/d7/5d/1e/d75d1e6a8c2e7090d55d8cdf184de16c.jpg',
        },
        {
            name: 'Portrait Photography',
            description: 'Master the art of portrait photography and capture stunning images of people.',
            img: 'https://i.pinimg.com/564x/a7/92/89/a7928982476d82aeecb7fc6db4634856.jpg',
        },
        {
            name: 'Landscape Photography',
            description: 'Explore techniques for capturing breathtaking landscapes in various lighting conditions.',
            img: 'https://i.pinimg.com/736x/af/a5/04/afa50445e83098ae324efca510febc83.jpg',
        },
        {
            name: 'Night Photography',
            description: 'Learn how to take stunning night photos, including astrophotography techniques.',
            img: 'https://i.pinimg.com/736x/ea/9f/2d/ea9f2d8dacf7e492dc966199d0568a95.jpg',
        },
        {
            name: 'Event Photography',
            description: 'Discover tips and techniques for capturing memorable moments at events and gatherings.',
            img: 'https://i.pinimg.com/564x/20/e9/68/20e9688379326a9a323073fb04bd74f2.jpg',
        },
        {
            name: 'Editing Techniques',
            description: 'Enhance your photos with editing techniques using software like Adobe Lightroom and Photoshop.',
            img: 'https://i.pinimg.com/564x/1c/6c/59/1c6c5944a97770bd3134b222b62093a6.jpg',
        },
        {
            name: 'Macro Photography',
            description: 'Explore the world of macro photography and learn how to capture stunning close-up images.',
            img: 'https://i.pinimg.com/564x/14/7d/27/147d27f3868696b015bd8b40cbd3745f.jpg',
        },
        {
            name: 'Street Photography',
            description: 'Learn how to capture candid moments and tell stories through street photography.',
            img: 'https://i.pinimg.com/736x/c2/f1/a4/c2f1a44482cb40f41da3f72076e22165.jpg',
        }
    ];

    return (
        <div className="photo-container">
            <h2>Photography Courses</h2>
            <div className="course-cards">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <img src={course.img} alt={course.name} className="course-image" />
                        <div className="course-details">
                            <h3 className="course-title">{course.name}</h3>
                            <p className="course-description">{course.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Photo;
