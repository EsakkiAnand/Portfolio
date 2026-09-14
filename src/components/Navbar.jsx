import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('portfolio-theme') || 'dark');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Init theme
        if (theme === 'light') {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    
    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container nav-container">
                <a href="#" className="logo">
                    <span className="text-gradient">Esakki Anand's Portfolio</span>
                </a>
                
                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="navLinks">
                    <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
                    <li><a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
                    <li><a href="#journey" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Journey</a></li>
                    <li><a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
                </ul>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button 
                        id="themeToggle" 
                        className="theme-toggle-btn" 
                        title={theme === 'light' ? "Switch to Dark Theme" : "Switch to Light Theme"}
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? <Sun /> : <Moon />}
                    </button>
                    <button 
                        className="mobile-menu-btn" 
                        id="mobileMenuBtn"
                        onClick={toggleMobileMenu}
                    >
                        <Menu />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
