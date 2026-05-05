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
                
                <ul 
                    className="nav-links" 
                    id="navLinks"
                    style={{
                        display: mobileMenuOpen || window.innerWidth > 768 ? 'flex' : 'none',
                        flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
                        position: window.innerWidth <= 768 ? 'absolute' : 'static',
                        top: window.innerWidth <= 768 ? '100%' : 'auto',
                        left: window.innerWidth <= 768 ? '0' : 'auto',
                        width: window.innerWidth <= 768 ? '100%' : 'auto',
                        background: window.innerWidth <= 768 
                            ? (theme === 'light' ? 'rgba(255, 255, 255, 0.98)' : 'rgba(15, 23, 42, 0.98)')
                            : 'transparent',
                        backdropFilter: window.innerWidth <= 768 ? 'blur(16px)' : 'none',
                        padding: window.innerWidth <= 768 ? '2rem' : '0',
                        gap: window.innerWidth <= 768 ? '2rem' : '2.5rem',
                        borderBottom: window.innerWidth <= 768 
                            ? (theme === 'light' ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.08)')
                            : 'none'
                    }}
                >
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
