import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const Chatbot = () => {
    const [isActive, setIsActive] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Esakki Anand's AI assistant. Ask me about his skills, projects, or how to contact him!", isUser: false }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isActive]);

    const getBotResponse = (input) => {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes('skill') || lowerInput.includes('tech') || lowerInput.includes('stack')) {
            return "My core skills include Python, Java, C, Machine/Deep Learning (Pandas, Numpy, OpenCV, CNN), Full Stack (React.js), and Visual Design via Unreal Engine.";
        } else if (lowerInput.includes('project') || lowerInput.includes('work') || lowerInput.includes('portfolio')) {
            return "I've built 7+ projects! My favorites are EmpowerHer (a women's safety CV web app), FileMind AI (LLM retrieval system), and a Geospatial Boundary Surveillance IoT system.";
        } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire') || lowerInput.includes('reach')) {
            return "You can reach me via email at esakkianand852@gmail.com, or call me at +91 8838790512. Check my LinkedIn via the contact section!";
        } else if (lowerInput.includes('education') || lowerInput.includes('college') || lowerInput.includes('study') || lowerInput.includes('university') || lowerInput.includes('degree')) {
            return "I am currently pursuing my B.Tech in Computer Science and Business Systems at Francis Xavier Engineering College (2023-2027) with an 8.51 CGPA.";
        } else if (lowerInput.includes('experience') || lowerInput.includes('intern') || lowerInput.includes('job')) {
            return "I have completed 4 internships: Software Developer at Profit.co, Machine Learning Intern at IIT Ropar, Machine Learning Intern at Corizo, and AIML Inplant Training at Codebind Technologies.";
        } else if (lowerInput.includes('award') || lowerInput.includes('hackathon') || lowerInput.includes('prize')) {
            return "I have won 6+ hackathons, including the Visai Hackathon 2026 (Marvell Company), Aatral Project Expo, and Gracevity Project Expo!";
        } else if (lowerInput.includes('hi') || lowerInput.includes('hello') || lowerInput.includes('hey')) {
            return "Hello there! I'm Esakki Anand's AI assistant. You can ask me about his skills, projects, education, or contact info!";
        } else {
            return "That's an interesting question! While I'm just a simple bot, I suggest reaching out directly to Esakki via the contact form for a detailed answer.";
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const msgText = inputValue.trim();
        if (!msgText) return;

        setMessages(prev => [...prev, { text: msgText, isUser: true }]);
        setInputValue('');

        setTimeout(() => {
            setMessages(prev => [...prev, { text: getBotResponse(msgText), isUser: false }]);
        }, 600);
    };

    return (
        <div className="chatbot-container">
            {/* Chat Window */}
            <div className={`chat-window ${isActive ? 'active' : ''}`} id="chatWindow">
                <div className="chat-header">
                    <div>
                        <h3 style={{ fontSize: '1rem', margin: '0', color: 'var(--text-main)' }}>Esakki Anand AI Assistant</h3>
                        <span style={{ fontSize: '0.75rem', color: 'var(--accent-secondary)' }}>Online</span>
                    </div>
                    <button className="chat-close-btn" id="chatCloseBtn" onClick={() => setIsActive(false)}>&times;</button>
                </div>
                <div className="chat-messages" id="chatMessages">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`}>
                            {msg.text}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <form className="chat-input-area" id="chatForm" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        id="chatInput" 
                        placeholder="Type your message..." 
                        autoComplete="off" 
                        required 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" className="chat-send-btn">➤</button>
                </form>
            </div>
            {/* Floating Button */}
            <button className="chat-fab" id="chatFab" title="Chat with Esakki Anand AI Assistant" onClick={() => setIsActive(true)}>
                <MessageCircle />
            </button>
        </div>
    );
};

export default Chatbot;
