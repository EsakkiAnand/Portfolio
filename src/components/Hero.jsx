import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const words = ["AI/ML Enthusiast", "Tech Innovator", "Aspiring Software Developer"];

    useEffect(() => {
        let timeout;
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                setTypedText(currentWord.substring(0, charIndex - 1));
                charIndex--;
            } else {
                setTypedText(currentWord.substring(0, charIndex + 1));
                charIndex++;
            }

            let typeSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2500;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            timeout = setTimeout(type, typeSpeed);
        };

        type();

        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="section hero container" id="home">
            <div className="hero-content fade-in">
                <span className="hero-subtitle fade-in" style={{ transitionDelay: '0.1s' }}>
                    <span className="typing-text">{typedText}</span>
                    <span className="cursor">&nbsp;</span>
                </span>
                <h1 className="fade-in" style={{ transitionDelay: '0.2s' }}>
                    Hello, I'm <br /><span className="text-gradient">Esakki Anand M</span>
                </h1>
                <p className="fade-in" style={{ transitionDelay: '0.3s' }}>
                    A highly motivated undergraduate specializing in Machine Learning, Deep Learning, and Large Language Models (LLMs), with expertise in full-stack development. Passionate about building intelligent, AI-driven solutions and continuously learning through hackathons and certifications.
                </p>
                <div className="hero-actions fade-in" style={{ transitionDelay: '0.4s' }}>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    <a href="resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">View Resume</a>
                    <a href="resume.pdf" className="btn btn-outline" download="Esakki_Anand_Resume.pdf" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Download style={{ width: '18px', height: '18px' }} /> Download Resume
                    </a>
                </div>
            </div>
            <div className="hero-image fade-in" style={{ transitionDelay: '0.5s' }}>
                <div className="abstract-shape">
                    <img src="profile.png" alt="Esakki Anand M" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
