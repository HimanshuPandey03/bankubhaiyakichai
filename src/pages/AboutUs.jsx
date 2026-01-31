import './AboutUs.css';
import himanshuImg from '../assets/team/himanshu.jpg';
import member1 from '../assets/team/team_member_1.jpg';
import member2 from '../assets/team/team_member_2.jpg';
import member3 from '../assets/team/team_member_3.jpg';
import member4 from '../assets/team/team_member_4.jpg';
import member8 from '../assets/team/team_member_8.jpg';
import member6 from '../assets/team/team_member_6.jpg';
import member5 from '../assets/team/team_member_5.jpg';
import member7 from '../assets/team/team_member_7.jpg';

const teamMembers = [
    { id: 1, name: 'Himanshu Pandey', role: 'Owner & Founder', qualification: 'Currently pursuing Master’s MCA', image: himanshuImg },
    { id: 2, name: 'Veenit Chauhan', role: 'Co-Founder', qualification: 'Bachelor’s degree in Information Technology', image: member1 },
    { id: 3, name: 'Vaibhavi Phadtare', qualification: 'Bachelor’s degree in Computer Science', image: member2 },
    { id: 4, name: 'Mansi Pandey', qualification: 'Currently pursuing Master’s Political Science', image: member3 },
    { id: 5, name: 'Krisha Jetani', qualification: 'Bachelor’s degree in Information Technology', image: member4 },
    { id: 6, name: 'Khushi Pathak', qualification: 'B-Tech in Electronics Communication and Telecommunication', image: member8 },
    { id: 7, name: 'Mithilesh Chaurasiya', qualification: 'Bachelor’s degree in Information Technology', image: member6 },
    { id: 8, name: 'Diya Waghmode', qualification: 'B-Tech in Computer Engineering', image: member5 },
    { id: 9, name: 'Ritik Soni', qualification: 'Electronics Engineer', image: member7 },
];

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Us</h1>
                <p>We are a family dedicated to serving the best Chai and Snacks in town.</p>
            </div>

            <h2 className="team-title">Meet Our Team</h2>
            <div className="team-grid">
                {teamMembers.map((member) => (
                    <div key={member.id} className="team-card">
                        <div className="team-img-placeholder">
                            <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="team-info-overlay">
                            <h3>{member.name}</h3>
                            <p className="role">{member.role}</p>
                            <div className="qualification-box">
                                <p className="qual-label">Qualification:</p>
                                <p className="qual-text">{member.qualification}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default AboutUs;
