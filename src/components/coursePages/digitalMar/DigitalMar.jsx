import React from 'react';
import './DigitalMar.css';

function DigitalMar() {
    const courses = [
        {
            name: 'SEO Basics',
            description: 'Learn the fundamentals of Search Engine Optimization and how to optimize your website for search engines.',
            img: 'https://i.pinimg.com/736x/03/0a/8d/030a8d612a9558f98c106a384afe4f7f.jpg',
        },
        {
            name: 'Content Marketing',
            description: 'Discover effective content marketing strategies to engage and attract your target audience.',
            img: 'https://i.pinimg.com/564x/c0/9a/96/c09a9659d7a91c06d8fca9ff4959b192.jpg',
        },
        {
            name: 'Social Media Marketing',
            description: 'Explore techniques for promoting your brand on social media platforms like Facebook, Instagram, and Twitter.',
            img: 'https://i.pinimg.com/564x/cb/0c/b0/cb0cb091aef392a8725dfe3b48fc7e9d.jpg',
        },
        {
            name: 'Email Marketing',
            description: 'Master email marketing strategies to increase conversions and engage your audience effectively.',
            img: 'https://i.pinimg.com/564x/29/e4/1d/29e41d68f707c0361a5bbf3e1b3b699b.jpg',
        },
        {
            name: 'PPC Advertising',
            description: 'Learn how to create and manage effective pay-per-click advertising campaigns to drive traffic to your site.',
            img: 'https://i.pinimg.com/564x/b6/dc/08/b6dc087f26802781d7b69f624dc68b1c.jpg',
        },
        {
            name: 'Analytics and Reporting',
            description: 'Understand how to use analytics tools to measure the effectiveness of your digital marketing campaigns.',
            img: 'https://i.pinimg.com/736x/ce/85/98/ce8598f7db1cc33d0ac4832930877297.jpg',
        },
        {
            name: 'Influencer Marketing',
            description: 'Discover how to leverage influencers to promote your brand and products effectively.',
            img: 'https://i.pinimg.com/564x/56/45/7c/56457c24c0d2ae1a4a4f3f9b3775df9e.jpg',
        },
        {
            name: 'Digital Marketing Strategy',
            description: 'Create comprehensive digital marketing strategies to enhance your brand’s online presence.',
            img: 'https://i.pinimg.com/736x/3a/39/aa/3a39aa803a4dedb83aa6744598078d4a.jpg',
        }
    ];

    return (
        <div className="digital-marketing-container">
            <h2>Digital Marketing Courses</h2>
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

export default DigitalMar;
