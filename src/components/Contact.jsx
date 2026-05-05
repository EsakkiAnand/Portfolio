import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message successfully logged in console! To handle actual emails, use a backend like EmailJS or Formspree.');
        console.log('Form Submitted!');
    };

    return (
        <section id="contact" className="section container">
            <h2 className="section-title fade-in"><span className="text-gradient">Get In Touch</span></h2>
            <div className="contact-container">
                <div className="contact-info fade-in">
                    <h3>Let's build something awesome together!</h3>
                    <p>If you're looking for a passionate AI/ML developer or full-stack engineer to join your team, feel
                        free to reach out.</p>

                    <div className="info-item" style={{ marginTop: '1.5rem' }}>
                        <div className="info-icon"><MapPin /></div>
                        <div className="info-details">
                            <h4>Location</h4>
                            <p>Tirunelveli, India</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon"><Mail /></div>
                        <div className="info-details">
                            <h4>Email</h4>
                            <p>esakkianand852@gmail.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon"><Phone /></div>
                        <div className="info-details">
                            <h4>Phone</h4>
                            <p>+91 8838790512</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <a href="https://github.com/EsakkiAnand" target="_blank" rel="noopener noreferrer" className="btn btn-outline"
                            style={{ padding: '0.5rem 1.5rem' }}>GitHub</a>
                        <a href="https://www.linkedin.com/in/esakki-anand-m" target="_blank" rel="noopener noreferrer"
                            className="btn btn-primary" style={{ padding: '0.5rem 1.5rem' }}>LinkedIn</a>
                    </div>
                </div>

                <form className="contact-form glass-panel fade-in" style={{ transitionDelay: '0.2s' }} onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" className="form-control" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" className="form-control" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="form-control" placeholder="Hello Esakki..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Send
                        Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
