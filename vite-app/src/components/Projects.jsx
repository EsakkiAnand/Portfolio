import React from 'react';
import { Ship, ShieldCheck, Home, Brain, Thermometer } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <h2 className="section-title fade-in"><span className="text-gradient">Featured Projects</span></h2>
            <div className="projects-grid">
                {/* Project 1 */}
                <div className="project-card glass-panel fade-in">
                    <div className="project-image" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)' }}>
                        <Ship size={64} />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">Geospatial Boundary Surveillance for Coastal Fishermen</h3>
                        <div className="project-tags">
                            <span className="tag">IoT</span>
                            <span className="tag">Python</span>
                        </div>
                        <p className="project-desc">A surveillance system designed for coastal fishermen to alert them before
                            crossing international boundary lines via real-time tracking.</p>
                        <a href="#" className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem' }}>View
                            Details</a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-card glass-panel fade-in" style={{ transitionDelay: '0.1s' }}>
                    <div className="project-image" style={{ background: 'linear-gradient(135deg, #1e293b, #0f172a)' }}>
                        <ShieldCheck size={64} />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">EmpowerHer</h3>
                        <div className="project-tags">
                            <span className="tag">Machine Learning</span>
                            <span className="tag">OpenCV</span>
                            <span className="tag">Web App</span>
                        </div>
                        <p className="project-desc">A women's safety web application integrated with instant SOS alerts, live
                            tracking, and advanced computer vision techniques.</p>
                        <a href="#" className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem' }}>View
                            Details</a>
                    </div>
                </div>

                {/* Project New */}
                <div className="project-card glass-panel fade-in" style={{ transitionDelay: '0.2s' }}>
                    <div className="project-image"
                        style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), #0f172a)' }}>
                        <Home size={64} />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">Smart Home Anomaly Detection</h3>
                        <div className="project-tags">
                            <span className="tag">Machine Learning</span>
                            <span className="tag">Anomaly Detection</span>
                            <span className="tag">IoT</span>
                        </div>
                        <p className="project-desc">An intelligent security system utilizing machine learning to accurately detect and flag unusual patterns or anomalous behavior in smart home environments.</p>
                        <a href="#" className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem' }}>View
                            Details</a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="project-card glass-panel fade-in" style={{ transitionDelay: '0.3s' }}>
                    <div className="project-image"
                        style={{ background: 'linear-gradient(135deg, #0f172a, rgba(6, 182, 212, 0.2))' }}>
                        <Brain size={64} />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">FileMind AI</h3>
                        <div className="project-tags">
                            <span className="tag">React.js</span>
                            <span className="tag">Python</span>
                            <span className="tag">LLM</span>
                        </div>
                        <p className="project-desc">An intelligent file management search system leveraging Large Language
                            Models to contextualize and retrieve data intuitively.</p>
                        <a href="https://github.com/EsakkiAnand/Filemind-AI" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem' }}>View on GitHub</a>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="project-card glass-panel fade-in" style={{ transitionDelay: '0.4s' }}>
                    <div className="project-image"
                        style={{ background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.2), #0f172a)' }}>
                        <Thermometer size={64} />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">Smart Thermal Analysis</h3>
                        <div className="project-tags">
                            <span className="tag">Deep Learning</span>
                            <span className="tag">CNN</span>
                        </div>
                        <p className="project-desc">Predictive models assessing thermal constraints and output variance in
                            semiconductor chips to ensure long-term hardware reliability.</p>
                        <a href="#" className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem' }}>View
                            Details</a>
                    </div>
                </div>
                {/* Project 5 */}
                <div className="project-card glass-panel fade-in" style={{ transitionDelay: '0.5s' }}>
                    <div className="project-image"
                        style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), #0f172a)' }}>
                        <Brain size={64} />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">LesionAware-XAI</h3>
                        <div className="project-tags">
                            <span className="tag">Deep Learning</span>
                            <span className="tag">CNN</span>
                            <span className="tag">XAI</span>
                        </div>
                        <p className="project-desc">Validating explainability of a CNN model for apple-leaf disease classification using Grad-CAM and Intersection over Union (IoU).</p>
                        <a href="https://github.com/EsakkiAnand/LesionAware-XAI" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem' }}>View on GitHub</a>
                    </div>
                </div>

                {/* Project 6 */}
                <div className="project-card glass-panel fade-in" style={{ transitionDelay: '0.6s' }}>
                    <div className="project-image"
                        style={{ background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.2), #0f172a)' }}>
                        <Home size={64} />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">Food Delivery Web Application</h3>
                        <div className="project-tags">
                            <span className="tag">MERN Stack</span>
                            <span className="tag">Full Stack</span>
                        </div>
                        <p className="project-desc">Built a full-stack MERN application featuring user authentication, dynamic menu management, and a robust ordering system.</p>
                        <a href="#" className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem' }}>View Details</a>
                    </div>
                </div>

                {/* Project 7 */}
                <div className="project-card glass-panel fade-in" style={{ transitionDelay: '0.7s' }}>
                    <div className="project-image"
                        style={{ background: 'linear-gradient(135deg, #0f172a, rgba(6, 182, 212, 0.2))' }}>
                        <Ship size={64} />
                    </div>
                    <div className="project-content">
                        <h3 className="project-title">CRUD-Based Game Dashboard</h3>
                        <div className="project-tags">
                            <span className="tag">Spring Boot</span>
                            <span className="tag">React.js</span>
                            <span className="tag">MySQL</span>
                        </div>
                        <p className="project-desc">Developed a comprehensive full-stack game dashboard application to manage game states and user interactions effectively.</p>
                        <a href="#" className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem' }}>View Details</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
