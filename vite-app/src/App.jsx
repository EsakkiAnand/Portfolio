import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        // --- Intersection Observer for Animations ---
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => observer.observe(el));

        // --- Mouse Follower Blob ---
        const blob = document.getElementById('cursor-blob');
        const handlePointerMove = (event) => {
            const { clientX, clientY } = event;
            if (blob) {
                blob.animate({
                    left: `${clientX}px`,
                    top: `${clientY}px`
                }, { duration: 3000, fill: "forwards" });
            }
        };
        document.body.addEventListener('pointermove', handlePointerMove);

        // --- 3D Tilt Effect on Glass Panels ---
        const cards = document.querySelectorAll('.glass-panel');
        const handleMouseMove = (e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -12;
            const rotateY = ((x - centerX) / centerX) * 12;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        };

        const handleMouseLeave = (e) => {
            const card = e.currentTarget;
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.5s ease';
        };

        const handleMouseEnter = (e) => {
            const card = e.currentTarget;
            card.style.transition = 'none';
        };

        cards.forEach(card => {
            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);
            card.addEventListener('mouseenter', handleMouseEnter);
        });

        return () => {
            fadeElements.forEach(el => observer.unobserve(el));
            document.body.removeEventListener('pointermove', handlePointerMove);
            cards.forEach(card => {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseleave', handleMouseLeave);
                card.removeEventListener('mouseenter', handleMouseEnter);
            });
        };
    }, []);

    return (
        <>
            {/* Professional Subtle Background */}
            <div className="bg-subtle-grid"></div>
            <div id="cursor-blob"></div>

            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Contact />
            <Footer />
            <Chatbot />
        </>
    );
}

export default App;
