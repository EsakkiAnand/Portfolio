import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section container">
            <h2 className="section-title fade-in"><span className="text-gradient">Technical Skills</span></h2>
            <div className="skills-category-grid">
                
                <div className="skill-category-card glass-panel fade-in">
                    <h3 className="category-header">Programming Languages</h3>
                    <ul className="skill-list">
                        <li>Java</li>
                        <li>Python</li>
                        <li>C</li>
                    </ul>
                </div>

                <div className="skill-category-card glass-panel fade-in" style={{ transitionDelay: '0.1s' }}>
                    <h3 className="category-header">Machine Learning & AI</h3>
                    <ul className="skill-list">
                        <li>Pandas & NumPy</li>
                        <li>Regression & Classification</li>
                        <li>Data Processing & Model Building</li>
                        <li>Deep Learning (NN, LSTM)</li>
                        <li>LLM, NLP, Computer Vision</li>
                    </ul>
                </div>

                <div className="skill-category-card glass-panel fade-in" style={{ transitionDelay: '0.2s' }}>
                    <h3 className="category-header">Web Technologies</h3>
                    <ul className="skill-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                    </ul>
                </div>

                <div className="skill-category-card glass-panel fade-in" style={{ transitionDelay: '0.3s' }}>
                    <h3 className="category-header">Backend & Databases</h3>
                    <ul className="skill-list">
                        <li>Spring Boot</li>
                        <li>Flask & Node.js</li>
                        <li>MongoDB & SQL</li>
                    </ul>
                </div>

                <div className="skill-category-card glass-panel fade-in" style={{ transitionDelay: '0.4s' }}>
                    <h3 className="category-header">Tools & Platforms</h3>
                    <ul className="skill-list">
                        <li>Git</li>
                        <li>VS Code</li>
                        <li>Vercel</li>
                        <li>Render</li>
                        <li>Docker</li>
                    </ul>
                </div>

                <div className="skill-category-card glass-panel fade-in" style={{ transitionDelay: '0.5s' }}>
                    <h3 className="category-header">Soft Skills</h3>
                    <ul className="skill-list">
                        <li>Leadership</li>
                        <li>Adaptability</li>
                        <li>Problem Solving</li>
                        <li>Resilience</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Skills;
