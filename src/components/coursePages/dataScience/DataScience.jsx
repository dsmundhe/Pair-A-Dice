import React from 'react';
import './DataScience.css';

function DataScience() {
    const courses = [
        {
            name: 'Introduction to Data Science',
            description: 'Learn the basics of data science, including data analysis and visualization techniques.',
            img:'https://i.pinimg.com/564x/93/6b/cd/936bcd5d03c2dde6786e21f617790034.jpg',
        },
        {
            name: 'Data Analysis with Python',
            description: 'Explore data analysis techniques using Python and libraries like Pandas and NumPy.',
            img: 'https://i.pinimg.com/736x/0f/bc/7c/0fbc7c345732e1f9141e530721cdfb50.jpg',
        },
        {
            name: 'Machine Learning Fundamentals',
            description: 'Understand the fundamental concepts of machine learning and its applications in data science.',
            img: 'https://i.pinimg.com/564x/fc/37/8a/fc378abedfd0935747a1de6515b41ca5.jpg',
        },
        {
            name: 'Data Visualization',
            description: 'Learn how to effectively visualize data using tools like Matplotlib and Seaborn.',
            img: 'https://i.pinimg.com/564x/e7/ab/99/e7ab99f68b3e8f3bec6e11acd7ceabed.jpg',
        },
        {
            name: 'Statistical Analysis',
            description: 'Dive into statistical concepts and methods used in data analysis.',
            img:'https://i.pinimg.com/564x/e7/ab/99/e7ab99f68b3e8f3bec6e11acd7ceabed.jpg'
        },
        {
            name: 'Deep Learning with TensorFlow',
            description: 'Explore deep learning techniques using TensorFlow and Keras for advanced data modeling.',
            img: 'https://i.pinimg.com/564x/04/93/b8/0493b8f3b9e81303a06e96b85612d63d.jpg',
        },
        {
            name: 'Big Data Technologies',
            description: 'Understand big data frameworks and tools like Hadoop and Spark for large-scale data processing.',
            img: 'https://i.pinimg.com/564x/be/c3/46/bec3468eb5dd8e2069e365bc9aee646b.jpg',
        },
        {
            name: 'Data Science Project',
            description: 'Work on a real-world data science project to apply the skills learned in previous courses.',
            img: ' https://i.pinimg.com/564x/82/1a/2a/821a2a60610bd7dafec93e0dd1cfb587.jpg',
        }
    ];

    return (
        <div className="data-science-container">
            <h2>Data Science Courses</h2>
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

export default DataScience;
