import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import chaiImg from '../assets/chai.png';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1 className="hero-title">Banku Bhaiya Ki <span className="highlight">Chai</span></h1>
                        <p className="hero-subtitle">Taste the tradition in every sip.</p>
                        <div className="hero-buttons">
                            <Link to="/menu" className="btn btn-primary">View Menu</Link>
                            <Link to="/feedback" className="btn btn-secondary">Visit Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro / Highlights Section */}
            <section className="highlights-section">
                <div className="container">
                    <div className="highlight-grid">
                        <div className="highlight-text">
                            <h2>More Than Just Chai</h2>
                            <p>
                                At Banku Bhaiya Ki Chai, we serve emotions in a cup.
                                Whether it's our signature Masala Chai or the perfect companion snacks
                                like <strong>Vada Pav, Samosa, and Bun Maska</strong>, we ensure quality and hygiene.
                            </p>
                            <Link to="/about" className="btn btn-outline">Meet Our Team</Link>
                        </div>
                        <div className="highlight-image">
                            <img src={chaiImg} alt="Special Masala Chai" className="feature-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Menu Preview */}
            <section className="preview-section">
                <div className="container">
                    <h2 className="section-title">Public Favorites</h2>
                    <div className="preview-cards">
                        <div className="preview-card">
                            <h3>Special Chai</h3>
                            <p>Kadak, Masaledar, and full of love.</p>
                        </div>
                        <div className="preview-card">
                            <h3>Vada Pav</h3>
                            <p>Mumbai's heartbeat, served hot.</p>
                        </div>
                        <div className="preview-card">
                            <h3>Bun Maska</h3>
                            <p>Soft bun loaded with butter.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
