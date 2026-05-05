import React from 'react';

const About = () => {
    return (
        <section id="about" className="section container">
            <h2 className="section-title fade-in"><span className="text-gradient">About Me</span></h2>
            <div className="about-content">
                <div className="about-text fade-in">
                    <p>I am a motivated Computer Science and Business Systems undergraduate based in Tirunelveli, India. My primary focus and deep expertise lie in Machine Learning, Deep Learning, and Large Language Models (LLMs), supported by strong skills in full-stack web development.</p>
                    <p>I am experienced in building AI-driven solutions, data processing pipelines, and scalable APIs. My technical foundation is backed by hands-on ML internships and certifications from AWS, DeepLearning.AI, IBM, and NPTEL.</p>
                    <p>My goal is to leverage my problem-solving abilities and hackathon achievements (including 1st Prize at VISAI Hackathon 2026, Aatral Project Expo, and Gracevity Project Expo) to excel in an AI/ML Engineer role, while continuing to build versatile full-stack applications.</p>
                    <div style={{ marginTop: '2rem' }}>
                        <a href="#projects" className="btn btn-outline">View My Work</a>
                    </div>
                </div>
                <div className="about-stats fade-in" style={{ transitionDelay: '0.2s' }}>
                    <div className="stat-card glass-panel">
                        <div className="stat-number">4+</div>
                        <div className="stat-text">Internships</div>
                    </div>
                    <div className="stat-card glass-panel">
                        <div className="stat-number">7+</div>
                        <div className="stat-text">Projects Built</div>
                    </div>
                    <div className="stat-card glass-panel">
                        <div className="stat-number">6+</div>
                        <div className="stat-text">Hackathon Wins</div>
                    </div>
                    <div className="stat-card glass-panel">
                        <div className="stat-number">8.5</div>
                        <div className="stat-text">CGPA</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
