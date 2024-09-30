import React from 'react';
import './MobileDev.css';

function MobileDev() {
    const courses = [
        {
            name: 'Introduction to Mobile Development',
            description: 'Learn the fundamentals of mobile app development for Android and iOS platforms.',
            img: ' https://i.pinimg.com/564x/fe/54/24/fe5424e495a024c8d529bb931ee31282.jpg',
        },
        {
            name: 'React Native for Beginners',
            description: 'Create stunning mobile applications using React Native and JavaScript.',
            img: 'https://i.pinimg.com/564x/f9/5d/d6/f95dd6eb1ffb12521e9de0e2cc9b0d7e.jpg',
        },
        {
            name: 'Flutter Development',
            description: 'Master Flutter to build natively compiled applications for mobile, web, and desktop from a single codebase.',
            img: 'https://i.pinimg.com/564x/0a/e7/d4/0ae7d43348ae18e660f16bc3df853381.jpg',
        },
        {
            name: 'Kotlin for Android Development',
            description: 'Dive into Kotlin and learn how to build modern Android applications.',
            img: 'https://i.pinimg.com/564x/a5/4a/0c/a54a0cfa411e21aa69a90b7238cdab3b.jpg',
        },
        {
            name: 'iOS Development with Swift',
            description: 'Get started with iOS development using Swift and Xcode.',
            img: 'https://i.pinimg.com/564x/24/38/7c/24387c901ca2fff4516461177e884b0a.jpg',
        },
        {
            name: 'Cross-Platform Development',
            description: 'Learn how to develop cross-platform apps that run on both Android and iOS seamlessly.',
            img: 'https://i.pinimg.com/564x/97/3a/cc/973acc91dd18167dda3f2392820eb4c1.jpg',
        },
        {
            name: 'Mobile App UI/UX Design',
            description: 'Understand the principles of UI/UX design specifically for mobile applications.',
            img: 'https://i.pinimg.com/736x/14/13/c0/1413c017e1527cba4c679c8559ae4f6b.jpg',
        },
        {
            name: 'Backend Development for Mobile Apps',
            description: 'Explore how to create robust backends for mobile applications using Node.js and Firebase.',
            img: 'https://i.pinimg.com/564x/c0/3d/84/c03d84be41b1340927b581b7f49896f2.jpg',
        }
    ];

    return (
        <div className="mobile-dev-container">
            <h2>Mobile Development Courses</h2>
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

export default MobileDev;
