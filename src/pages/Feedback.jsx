import './Feedback.css';
import { useState } from 'react';

const Feedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        frequency: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    //const handleRating = (ratingValue) => {
    //setFormData({ ...formData, rating: ratingValue });
    //};

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, mobile, frequency, message } = formData;

        // Use literal star emoji as requested
        const whatsappMessage = `*New Feedback*\n\n*Name:* ${name}\n*Mobile:* ${mobile}\n*Frequency:* ${frequency}\n*Message:* ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/918104913374?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');

        setFormData({
            name: '',
            mobile: '',
            frequency: '',
            message: ''
        });
    };

    return (
        <div className="contact-container">
            <h1 className="page-title">Feedback Form</h1>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Visit Our Tapri</h2>
                    <p>
                        Come over for a fresh cup of chai and some gup-shup!
                        We are open from morning to late night.
                    </p>

                    <div className="info-item">
                        <h3>Address</h3>
                        <p>513, Magic square, Dwarkadhish Road, <br />Near Gurudwara, Malad East,<br />Maharashtra 400097</p>
                    </div>

                    <div className="info-item">
                        <h3>Timings</h3>
                        <p>Everyday: 6:00 AM - 11:00 PM</p>
                    </div>

                    <div className="info-item">
                        <h3>Phone</h3>
                        <p>+91 81049 13374</p>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h2>We Value Your Feedback</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Banku..."
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input
                                type="tel"
                                id="mobile"
                                placeholder="9876543210"
                                pattern="[0-9]{10}"
                                required
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="frequency">How often do you drink our chai?</label>
                            <select
                                id="frequency"
                                required
                                value={formData.frequency}
                                onChange={handleChange}
                            >
                                <option value="" disabled>Select an option</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Occasional">Occasionally</option>
                                <option value="First Time">First Time</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Any other suggestions?</label>
                            <textarea
                                id="message"
                                rows="3"
                                placeholder="Tell us more..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>





                        <button type="submit" className="btn btn-primary submit-btn">Send via WhatsApp</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
