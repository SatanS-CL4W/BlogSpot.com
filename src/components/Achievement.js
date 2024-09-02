import React, { useEffect } from 'react';

const Achievements = () => {

    useEffect(() => {
        document.title = "Acievement";
    }, []);
    const achievements = [
        {
            title: 'Top Performer Award',
            description: 'Received the Top Performer Award for outstanding performance in the Q1 2024.',
            date: 'March 2024'
        },
        {
            title: 'Completed Cisco Cybersecurity Virtual Internship',
            description: 'Successfully completed a virtual internship organized by Cisco in the field of cybersecurity.',
            date: 'July 2024'
        },
        {
            title: 'Published Research Paper',
            description: 'Co-authored and published a research paper on "Advanced Microservices Architecture" in the International Journal of Computer Science.',
            date: 'June 2024'
        },
        {
            title: 'Hotel Rating System Project',
            description: 'Developed a hotel rating system using microservices architecture, implemented using Spring Boot and REST APIs.',
            date: 'August 2024'
        }
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Achievements</h2>
            <ul style={styles.list}>
                {achievements.map((achievement, index) => (
                    <li key={index} style={styles.listItem}>
                        <h3 style={styles.title}>{achievement.title}</h3>
                        <p style={styles.description}>{achievement.description}</p>
                        <span style={styles.date}>{achievement.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f7f7f7',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333'
    },
    list: {
        listStyleType: 'none',
        padding: 0
    },
    listItem: {
        marginBottom: '15px',
        padding: '10px',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: '5px'
    },
    description: {
        marginBottom: '5px',
        color: '#555'
    },
    date: {
        fontSize: '14px',
        color: '#999'
    }
};

export default Achievements;
