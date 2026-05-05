import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const Journey = () => {
    return (
        <section id="journey" className="section container">
            <h2 className="section-title fade-in"><span className="text-gradient">My Journey</span></h2>

            <div className="journey-container">
                {/* Education Section */}
                <div className="journey-category fade-in">
                    <h3 className="category-title"><GraduationCap /> Education</h3>
                    <div className="premium-timeline">
                        <div className="pt-item">
                            <div className="pt-dot"></div>
                            <div className="pt-content glass-panel">
                                <span className="pt-date">2022 - 2023</span>
                                <h4 className="pt-title">Higher Secondary Certificate (HSC)</h4>
                                <p className="pt-org">Little Flower Matric Hr. Sec. School</p>
                                <p className="pt-desc">Score: 88.1%</p>
                            </div>
                        </div>
                        <div className="pt-item">
                            <div className="pt-dot"></div>
                            <div className="pt-content glass-panel">
                                <span className="pt-date">2023 - 2027</span>
                                <h4 className="pt-title">B.Tech Computer Science and Business Systems</h4>
                                <p className="pt-org">Francis Xavier Engineering College</p>
                                <p className="pt-desc">CGPA: 8.51</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Internships Section */}
                <div className="journey-category fade-in" style={{ transitionDelay: '0.2s' }}>
                    <h3 className="category-title"><Briefcase /> Internships</h3>
                    <div className="premium-timeline">
                        <div className="pt-item">
                            <div className="pt-dot"></div>
                            <div className="pt-content glass-panel">
                                <span className="pt-date">May 2024 - June 2024</span>
                                <h4 className="pt-title">Machine Learning Intern</h4>
                                <p className="pt-org">Corizo-Bangalore (Online)</p>
                            </div>
                        </div>
                        <div className="pt-item">
                            <div className="pt-dot"></div>
                            <div className="pt-content glass-panel">
                                <span className="pt-date">July 2024</span>
                                <h4 className="pt-title">AI/ML Inplant Training</h4>
                                <p className="pt-org">Codebind Technologies, Coimbatore</p>
                            </div>
                        </div>
                        <div className="pt-item">
                            <div className="pt-dot"></div>
                            <div className="pt-content glass-panel">
                                <span className="pt-date">June 2025 - Dec 2025</span>
                                <h4 className="pt-title">Google Student Ambassador</h4>
                                <p className="pt-org">Google (Online)</p>
                            </div>
                        </div>
                        <div className="pt-item">
                            <div className="pt-dot"></div>
                            <div className="pt-content glass-panel">
                                <span className="pt-date">Dec 2025</span>
                                <h4 className="pt-title">Full Stack Intern</h4>
                                <p className="pt-org">Online (1 Month)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
