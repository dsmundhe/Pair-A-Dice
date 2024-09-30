import React from 'react';
import './Ml.css';

function Ml() {
    const courses = [
        {
            name: 'Introduction to Machine Learning',
            description: 'Get started with the fundamentals of machine learning, including algorithms and data preprocessing.',
            img: 'https://i.pinimg.com/564x/d3/f8/e3/d3f8e34732393f1614114c1fddfbd989.jpg',
        },
        {
            name: 'Deep Learning with TensorFlow',
            description: 'Learn to build deep learning models using TensorFlow and Keras for various applications.',
            img: 'https://i.pinimg.com/564x/04/93/b8/0493b8f3b9e81303a06e96b85612d63d.jpg',
        },
        {
            name: 'Natural Language Processing',
            description: 'Explore techniques for processing and analyzing human language data using machine learning.',
            img: 'https://i.pinimg.com/736x/07/d9/0c/07d90c1865d1b2df01a7fe8e4d8c1298.jpg',
        },
        {
            name: 'Data Visualization with Python',
            description: 'Learn how to visualize data effectively using libraries like Matplotlib and Seaborn in Python.',
            img: 'https://i.pinimg.com/564x/5e/1d/e8/5e1de82524efa4fca768e56fcf2d0911.jpg',
        },
        {
            name: 'Reinforcement Learning',
            description: 'Understand reinforcement learning concepts and develop algorithms for autonomous decision-making.',
            img: 'https://i.pinimg.com/564x/92/2f/d2/922fd273c7beddc65972c69736e84ba7.jpg',
        },
        {
            name: 'Computer Vision Basics',
            description: 'Discover the fundamentals of computer vision and how to apply machine learning techniques.',
            img: 'https://i.pinimg.com/736x/90/91/88/9091887717926865c300df07f6455ce7.jpg',
        },
        {
            name: 'Machine Learning Model Deployment',
            description: 'Learn how to deploy machine learning models into production using various tools and platforms.',
            img: 'https://i.pinimg.com/564x/b6/d6/7e/b6d67e3ea0f6f53949f872dc49e54c88.jpg',
        },
        {
            name: 'Ethics in AI',
            description: 'Explore the ethical considerations and challenges in artificial intelligence and machine learning.',
            img: 'https://i.pinimg.com/564x/2f/bd/88/2fbd88fa115bcc90916cf43e7e3ed56b.jpg',
        }
    ];

    return (
        <div className="ml-container">
            <h2>Machine Learning Courses</h2>
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

export default Ml;
