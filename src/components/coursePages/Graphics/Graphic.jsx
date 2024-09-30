import React from 'react';
import './Graphic.css';

function Graphic() {
    const courses = [
        {
            name: 'Adobe Photoshop Basics',
            description: 'Learn the essentials of Adobe Photoshop, including tools and techniques for photo editing and manipulation.',
            img: 'https://i.pinimg.com/564x/f1/36/11/f13611d37f25f9a9187536cab09aaf92.jpg',
        },
        {
            name: 'Adobe Illustrator Fundamentals',
            description: 'Discover vector graphics design with Adobe Illustrator, focusing on creating logos and illustrations.',
            img: 'https://i.pinimg.com/564x/ab/29/6d/ab296d29daece6e8b39471a9cd204203.jpg',
        },
        {
            name: 'Graphic Design Theory',
            description: 'Understand the principles of graphic design, including color theory, typography, and composition.',
            img: 'https://i.pinimg.com/564x/98/44/8e/98448eeb41b7fedbb894704a02bb7e4b.jpg',
        },
        {
            name: 'Creating Stunning Flyers',
            description: 'Learn how to design effective flyers for events and promotions using various design software.',
            img: 'https://i.pinimg.com/736x/9a/e4/ba/9ae4ba4a33afdcecb287b113a476d4d8.jpg',
        },
        {
            name: 'Web Design Essentials',
            description: 'Explore the basics of web design, focusing on layout, user experience, and responsive design.',
            img: 'https://i.pinimg.com/736x/59/08/84/590884c56c9699a1e00169ba639e2a35.jpg',
        },
        {
            name: 'Branding and Identity Design',
            description: 'Master branding concepts and create a strong visual identity for your business or projects.',
            img: 'https://i.pinimg.com/736x/df/6c/78/df6c78092547fa37ae39da848d7bd352.jpg',
        },
        {
            name: 'Infographic Design',
            description: 'Learn how to create visually appealing infographics to communicate complex information effectively.',
            img: 'https://i.pinimg.com/564x/61/3d/d9/613dd9784e005e070d217917712573e5.jpg',
        },
        {
            name: 'Typography in Design',
            description: 'Delve into typography, learning how to choose and combine fonts for effective communication.',
            img: 'https://i.pinimg.com/564x/7f/a2/a0/7fa2a0d24783138c47973310b65986d0.jpg',
        }
    ];

    return (
        <div className="graphic-design-container">
            <h2>Graphic Design Courses</h2>
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

export default Graphic;
