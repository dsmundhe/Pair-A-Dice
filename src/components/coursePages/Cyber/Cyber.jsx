import React from 'react';
import './Cyber.css';

function Cyber() {
    const courses = [
        {
            name: 'Introduction to Cybersecurity',
            description: 'Understand the fundamentals of cybersecurity and learn how to protect networks and systems.',
            img: 'https://i.pinimg.com/564x/36/76/63/367663917860cc3f3c345775fc0e6994.jpg',
        },
        {
            name: 'Network Security',
            description: 'Explore the concepts of network security, including firewalls, VPNs, and intrusion detection systems.',
            img: 'https://i.pinimg.com/564x/46/c2/03/46c203c5e51df489730bd1f8ed356773.jpg',
        },
        {
            name: 'Ethical Hacking',
            description: 'Learn ethical hacking techniques to identify vulnerabilities and protect against cyber attacks.',
            img: 'https://i.pinimg.com/564x/e7/cb/f5/e7cbf5a9f46ac2713170bcc05cdc2461.jpg',
        },
        {
            name: 'Cryptography',
            description: 'Discover the principles of cryptography and its applications in securing communications.',
            img: 'https://i.pinimg.com/564x/ac/ca/3e/acca3e5143e7ec4fa701ee7e9f4a7782.jpg',
        },
        {
            name: 'Incident Response',
            description: 'Learn how to effectively respond to and manage cybersecurity incidents and breaches.',
            img: 'https://i.pinimg.com/736x/55/fc/cb/55fccb6c11ba497f556baceaccbc1e92.jpg',
        },
        {
            name: 'Cybersecurity Compliance',
            description: 'Understand the importance of compliance in cybersecurity and learn about relevant regulations.',
            img: 'https://i.pinimg.com/564x/36/76/63/367663917860cc3f3c345775fc0e6994.jpg',
        },
        {
            name: 'Malware Analysis',
            description: 'Dive into malware analysis techniques to identify and mitigate malicious software threats.',
            img: 'https://i.pinimg.com/564x/25/d8/11/25d811a5e2f877e428e837140ec2a779.jpg',
        },
        {
            name: 'Cybersecurity Awareness',
            description: 'Gain insights into cybersecurity awareness and learn how to safeguard personal information.',
            img: 'https://i.pinimg.com/564x/39/0e/40/390e40944597382c91e0bdc264cc5690.jpg',
        }
    ];

    return (
        <div className="cyber-container">
            <h2>Cybersecurity Courses</h2>
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

export default Cyber;
