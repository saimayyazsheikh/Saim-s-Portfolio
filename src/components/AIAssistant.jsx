import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { GoogleGenAI } from '@google/genai';
import './AIAssistant.css';

const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for Muhammad Saim Ayyaz's portfolio website. 
Your goal is to answer visitor questions about Saim's experience, education, projects, skills, and contact information. 
Keep your answers concise, professional, and engaging. Use formatting like bolding for emphasis. 
Do not hallucinate information. If you don't know the answer, politely say so and direct the user to contact Saim via email at saimisatwork@gmail.com.

Here is all the information you know about Saim:
- **Name**: Muhammad Saim Ayyaz
- **Role**: Full Stack Website & App Developer · AI Automation Expert
- **Education**: BS Information Technology, Air University, Islamabad (Graduated 2026, CGPA 2.82)
- **Email**: saimisatwork@gmail.com
- **Phone**: 0310 7867246
- **Location**: Islamabad, Pakistan
- **Skills**:
  - Languages: C++, Python, JavaScript, Dart, HTML5, CSS3
  - Frameworks/Libs: React, Node.js, Express.js, Flask, .NET, Flutter
  - Cloud/DB: MongoDB, Firebase, AWS, Cloudflare
  - Tools/DevOps: Docker, Git/GitHub, Jenkins, CI/CD, Github Actions
  - Core Concepts: OOP, DSA, DBMS, Computer Networks, REST APIs, Security & Auth, IoT, Agile, SysAdmin
- **Experience**:
  - Front-end AI Engineering Intern @ FlyRank AI (June 2026 - Present, Remote)
  - Full-Stack Developer @ SafeTradeHub (Final Year Project, Spring 2025 - Spring 2026, Air University)
  - Secretary General & Leadership Roles @ AUCIS (Air University Computing and Innovation Society) (Oct 2022 - April 2025)
  - Microsoft Learn Student Ambassador @ Air University (Oct 2023 - Jan 2025)
  - Web Development And DevOps Intern @ CyberSoft Vantage (July 2024 - Sept 2024)
- **Projects**:
  - SafeTradeHub: Secure C2C escrow marketplace. Python, Flask, React, Firebase, Cloud Vision API.
  - EduSense: AI-powered desktop app for student engagement analysis. Python, Computer Vision, Deep Learning.
  - DairyPro App: Dairy operations management app. React Native, Node.js, Firebase.
  - Ayyaz Dairy Farm Management System: React, JavaScript, Tailwind CSS, Firebase.
  - Pill Tracer: Pharmacy inventory platform. JavaScript, React, Node.js, MongoDB.
- **Certifications**: Migrating to the AWS Cloud, Data Analytics Job Simulation (Deloitte), Software Development Job Simulation (Datacom), IELTS (6.5).
- **Honors**: Millennium Fellowship, AUCIS General Secretary, TechConnect/TechFest Participation.
- **Goal**: Seeking a full-time role as a Full Stack or AI Engineer. Open to SWE / Full-Stack / AI Automation roles, freelance projects, and applied research collaborations.
`;

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Saim's AI assistant. Feel free to ask me anything about his experience, projects, or skills!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Store the chat session ref so we maintain history
  const chatSessionRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    // Initialize the AI SDK
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey: apiKey });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: SYSTEM_INSTRUCTION
          }
        });
      } else {
        console.warn("VITE_GEMINI_API_KEY is not defined in environment variables.");
      }
    } catch (error) {
      console.error("Failed to initialize Google Gen AI:", error);
    }
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    try {
      if (!chatSessionRef.current) {
        throw new Error("Chat session is not initialized. Check API key.");
      }

      const response = await chatSessionRef.current.sendMessage({ message: userMsg });
      
      setMessages(prev => [...prev, { role: 'assistant', content: response.text }]);
    } catch (error) {
      console.error("Error sending message to AI:", error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I'm having trouble connecting right now. Please feel free to email Saim directly at saimisatwork@gmail.com." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="ai-assistant-container">
      {isOpen && (
        <div className="ai-assistant-window glass">
          <div className="ai-assistant-header">
            <div className="ai-assistant-title">
              <Bot size={20} />
              <span>Saim's AI Assistant</span>
            </div>
            <button className="ai-close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>
          
          <div className="ai-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`ai-message ${msg.role}`}>
                {msg.role === 'assistant' ? (
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
            ))}
            {isTyping && (
              <div className="ai-typing">
                <div className="ai-typing-dot"></div>
                <div className="ai-typing-dot"></div>
                <div className="ai-typing-dot"></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="ai-input-area">
            <form className="ai-input-form" onSubmit={handleSend}>
              <input
                type="text"
                className="ai-input"
                placeholder="Ask about Saim's skills or projects..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
              />
              <button 
                type="submit" 
                className="ai-send-btn" 
                disabled={!input.trim() || isTyping}
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
      
      {!isOpen && (
        <button 
          className="ai-assistant-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
