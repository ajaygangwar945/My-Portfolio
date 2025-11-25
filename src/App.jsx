import { useState, useEffect, useRef } from 'react';
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code,
    Cpu,
    Trophy,
    User,
    Terminal,
    ChevronDown,
    Send,
    Menu,
    X,
    Sun,
    Moon,
    Sparkles,
    MessageCircle,
    Loader2,
    Bot,
    Briefcase,
    GraduationCap,
    BookOpen,
    Mic,
    Twitter,
    Globe
} from 'lucide-react';

/* =============================================================================
  🎨 USER CONTENT CONFIGURATION
  Edit this section to update your portfolio data without touching the code logic!
  =============================================================================
*/
const PORTFOLIO_DATA = {
    personal: {
        name: "Ajay Gangwar",
        role: "Computer Science Student & Full Stack Developer",
        about: "I am a passionate CSE undergrad with a knack for building scalable web applications and solving algorithmic problems. I love turning coffee into code and complex problems into simple solutions.",
        email: "ajaygangwar945@gmail.com",
        github: "https://github.com/ajaygangwar945",
        linkedin: "https://www.linkedin.com/in/ajaygangwar945/",
        resumeLink: "/resume.pdf"
    },
    skills: [
        "Java", "Python", "C++", "React.js", "Node.js", "MongoDB", "SQL", "Git", "Docker", "AWS"
    ],
    stats: [
        { label: "Projects Completed", value: "15+" },
        { label: "LeetCode Solved", value: "500+" },
        { label: "Hackathons Won", value: "3" },
        { label: "Years Coding", value: "4" }
    ],
    projects: [
        {
            title: "AI-Powered Task Manager",
            description: "A smart todo list that prioritizes tasks using Natural Language Processing. Built with React and Python.",
            tags: ["React", "Python", "NLP", "FastAPI"],
            github: "#",
            demo: "#"
        },
        {
            title: "Blockchain Voting System",
            description: "Secure decentralized voting application ensuring transparency and anonymity using Ethereum smart contracts.",
            tags: ["Solidity", "Web3.js", "React", "Ethereum"],
            github: "#",
            demo: "#"
        },
        {
            title: "Real-time Chat App",
            description: "A WebSocket-based messaging platform allowing instant communication with end-to-end encryption.",
            tags: ["Node.js", "Socket.io", "React", "Redis"],
            github: "#",
            demo: "#"
        }
    ],
    achievements: [
        {
            title: "1st Place - National Hackathon 2024",
            organization: "Tech University",
            description: "Built a disaster relief coordination platform in 24 hours.",
            icon: <Trophy size={20} />
        },
        {
            title: "Google Cloud Certified Associate",
            organization: "Google Cloud",
            description: "Demonstrated proficiency in deploying and managing cloud solutions.",
            icon: <Cpu size={20} />
        },
        {
            title: "5 Star Coder",
            organization: "HackerRank",
            description: "Achieved top rank in Problem Solving and Data Structures.",
            icon: <Code size={20} />
        }
    ],
    education: [
        {
            degree: "Bachelor of Technology in Computer Science",
            school: "Tech University",
            year: "2021 - 2025",
            description: "Specializing in Artificial Intelligence and Machine Learning. CGPA: 9.0/10"
        },
        {
            degree: "Higher Secondary Education",
            school: "City High School",
            year: "2019 - 2021",
            description: "Major in Science (Physics, Chemistry, Mathematics)."
        }
    ],
    experience: [
        {
            role: "Full Stack Developer Intern",
            company: "Tech Solutions Inc.",
            year: "Summer 2024",
            description: "Developed and maintained web applications using React and Node.js. Improved site performance by 20%."
        },
        {
            role: "Open Source Contributor",
            company: "GitHub",
            year: "2023 - Present",
            description: "Contributed to various open source projects including bug fixes and feature additions."
        }
    ],
    openSource: [
        {
            title: "React Library Contrib",
            description: "Fixed critical bug in popular React component library.",
            link: "https://github.com/example/repo"
        },
        {
            title: "Node.js Tool",
            description: "Created a CLI tool for developer productivity.",
            link: "https://github.com/example/tool"
        }
    ],
    blogs: [
        {
            title: "Understanding React Hooks",
            date: "Oct 2024",
            description: "A deep dive into useEffect and useMemo.",
            link: "#"
        },
        {
            title: "The Future of Web Development",
            date: "Sep 2024",
            description: "Exploring WebAssembly and Edge Computing.",
            link: "#"
        }
    ],
    talks: [
        {
            title: "Building Scalable Apps",
            event: "TechConf 2024",
            date: "Nov 2024",
            link: "#"
        }
    ],
    podcasts: [
        {
            title: "Ep 1: Journey into Tech",
            show: "The Dev Podcast",
            link: "#"
        }
    ],
    social: {
        twitter: "https://twitter.com/username",
        twitterHandle: "@username",
        github: "https://github.com/username"
    }
};

/* =============================================================================
  🧠 GEMINI API INTEGRATION
  IMPORTANT: For local development, you must get a free API Key from 
  https://aistudio.google.com/app/apikey and paste it below.
  =============================================================================
*/
const GeminiService = {
    generateContent: async (prompt) => {
        // 🔑 API Key is now securely loaded from .env file
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        // NOTE: If apiKey is empty, AI features will return a placeholder message.
        if (!apiKey) return "AI features require an API Key. Please add VITE_GEMINI_API_KEY to your .env file.";

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });

            const data = await response.json();
            return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
        } catch (error) {
            console.error("Gemini API Error:", error);
            return "Error connecting to AI service.";
        }
    }
};

/* =============================================================================
  🚀 COMPONENT LOGIC
  =============================================================================
*/

const ContactForm = ({ isDark }) => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        const encode = (data) => {
            return Object.keys(data)
                .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        };

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData }),
            });
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`w-full max-w-lg mx-auto text-left space-y-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
            data-netlify="true"
            name="contact"
        >
            <input type="hidden" name="form-name" value="contact" />

            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-cyan-500 outline-none transition-all ${isDark ? 'bg-slate-900 border-slate-700 focus:border-cyan-500' : 'bg-white border-slate-200 focus:border-cyan-500'
                        }`}
                    placeholder="Your Name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-cyan-500 outline-none transition-all ${isDark ? 'bg-slate-900 border-slate-700 focus:border-cyan-500' : 'bg-white border-slate-200 focus:border-cyan-500'
                        }`}
                    placeholder="your@email.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                    name="message"
                    id="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-cyan-500 outline-none transition-all ${isDark ? 'bg-slate-900 border-slate-700 focus:border-cyan-500' : 'bg-white border-slate-200 focus:border-cyan-500'
                        }`}
                    placeholder="How can I help you?"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className={`w-full py-3 rounded-lg font-bold transition-all shadow-lg flex justify-center items-center gap-2 ${isDark
                        ? 'bg-cyan-600 text-white hover:bg-cyan-500 shadow-cyan-900/20 disabled:opacity-50'
                        : 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-cyan-600/20 disabled:opacity-50'
                    }`}
            >
                {status === "submitting" ? (
                    <Loader2 className="animate-spin" size={20} />
                ) : status === "success" ? (
                    "Message Sent!"
                ) : (
                    <>
                        <Send size={20} /> Send Message
                    </>
                )}
            </button>

            {status === "error" && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
            )}
        </form>
    );
};

const NavLink = ({ href, children, mobile, onClick, isDark }) => (
    <a
        href={href}
        onClick={onClick}
        className={`${mobile ? 'block py-2 text-lg' : ''} ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'} transition-colors font-medium cursor-pointer`}
    >
        {children}
    </a>
);

const SectionTitle = ({ title, subtitle, isDark }) => (
    <div className="mb-12 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
            <span className={isDark ? "text-cyan-400" : "text-cyan-600"}>&lt;</span> {title} <span className={isDark ? "text-cyan-400" : "text-cyan-600"}>/&gt;</span>
        </h2>
        <p className={`max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{subtitle}</p>
    </div>
);

const ProjectCard = ({ project, isDark }) => (
    <div className={`group rounded-xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isDark
        ? 'bg-slate-800 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
        : 'bg-white border-slate-200 hover:border-cyan-500/50 hover:shadow-cyan-500/10 shadow-sm'
        }`}>
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-lg transition-colors ${isDark ? 'bg-slate-700/50 group-hover:bg-cyan-500/20' : 'bg-slate-100 group-hover:bg-cyan-50'}`}>
                <Code className={isDark ? "text-cyan-400" : "text-cyan-600"} size={24} />
            </div>
            <div className="flex gap-3">
                <a href={project.github} className={`${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-900'} transition-colors`}>
                    <Github size={20} />
                </a>
                <a href={project.demo} className={`${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-900'} transition-colors`}>
                    <ExternalLink size={20} />
                </a>
            </div>
        </div>
        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>{project.title}</h3>
        <p className={`mb-4 h-20 overflow-hidden text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, i) => (
                <span key={i} className={`px-3 py-1 text-xs font-medium rounded-full border ${isDark
                    ? 'bg-slate-700/50 text-cyan-300 border-slate-600'
                    : 'bg-cyan-50 text-cyan-700 border-cyan-100'
                    }`}>
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

const AchievementCard = ({ item, isDark }) => (
    <div className={`flex gap-4 items-start p-4 rounded-lg transition-colors border-l-2 border-transparent hover:border-cyan-400 ${isDark ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'
        }`}>
        <div className={`mt-1 p-2 rounded-full border shrink-0 ${isDark
            ? 'bg-slate-800 text-cyan-400 border-slate-700'
            : 'bg-white text-cyan-600 border-slate-200'
            }`}>
            {item.icon}
        </div>
        <div>
            <h4 className={`text-lg font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item.title}</h4>
            <p className={`text-sm mb-1 ${isDark ? 'text-cyan-500' : 'text-cyan-600'}`}>{item.organization}</p>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.description}</p>
        </div>
    </div>
);

const TimelineItem = ({ item, isLast, isDark }) => (
    <div className="relative pl-8 pb-8">
        {!isLast && (
            <div className={`absolute left-[11px] top-2 bottom-0 w-0.5 ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`}></div>
        )}
        <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-4 ${isDark ? 'bg-slate-900 border-cyan-500' : 'bg-white border-cyan-600'}`}></div>
        <div className={`p-6 rounded-xl border transition-all hover:-translate-y-1 ${isDark
            ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50'
            : 'bg-white border-slate-200 hover:border-cyan-500/50 shadow-sm'
            }`}>
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    {item.role || item.degree}
                </h4>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${isDark ? 'bg-slate-700 text-cyan-300' : 'bg-cyan-50 text-cyan-700'}`}>
                    {item.year}
                </span>
            </div>
            <h5 className={`text-lg font-medium mb-3 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                {item.company || item.school}
            </h5>
            <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {item.description}
            </p>
        </div>
    </div>
);

const TimelineSection = ({ title, items, isDark }) => (
    <div className="max-w-3xl mx-auto">
        <SectionTitle title={title} isDark={isDark} />
        <div className="mt-8">
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    item={item}
                    isLast={index === items.length - 1}
                    isDark={isDark}
                />
            ))}
        </div>
    </div>
);

const GridCard = ({ item, type, isDark }) => (
    <div className={`group p-6 rounded-xl border transition-all hover:-translate-y-1 hover:shadow-lg ${isDark
        ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50'
        : 'bg-white border-slate-200 hover:border-cyan-500/50 shadow-sm'
        }`}>
        <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-700/50 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                {type === 'blog' && <BookOpen size={24} />}
                {type === 'talk' && <Mic size={24} />}
                {type === 'podcast' && <Briefcase size={24} />}
            </div>
            {item.link && (
                <a href={item.link} className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`}>
                    <ExternalLink size={20} />
                </a>
            )}
        </div>
        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
            {item.title}
        </h3>
        {item.description && (
            <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {item.description}
            </p>
        )}
        <div className={`text-xs font-medium ${isDark ? 'text-cyan-500' : 'text-cyan-600'}`}>
            {item.date || item.event || item.show}
        </div>
    </div>
);

const SocialSection = ({ data, isDark }) => (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className={`p-6 rounded-xl border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
            <div className="flex items-center gap-3 mb-6">
                <Twitter className="text-[#1DA1F2]" size={24} />
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Latest Tweets</h3>
            </div>
            <div className="space-y-4">
                <p className={`italic ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    "Just shipped a new feature! 🚀 #coding #react"
                </p>
                <a href={data.twitter} className="text-sm text-[#1DA1F2] hover:underline">
                    View on Twitter
                </a>
            </div>
        </div>
        <div className={`p-6 rounded-xl border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
            <div className="flex items-center gap-3 mb-6">
                <Github className={isDark ? "text-white" : "text-slate-900"} size={24} />
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>GitHub Activity</h3>
            </div>
            <div className="space-y-4">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-300"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-700"></div>
                    <div className="w-3 h-3 rounded-sm bg-slate-700"></div>
                </div>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    500+ contributions in the last year
                </p>
                <a href={data.github} className={`text-sm hover:underline ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    View Profile
                </a>
            </div>
        </div>
    </div>
);

const ChatBot = ({ isDark, isOpen, setIsOpen }) => {
    const [messages, setMessages] = useState([
        { role: 'model', text: "Hi! I'm Alex's AI Assistant. Ask me anything about his skills, projects, or experience!" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setInput("");
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        // Sanitize data (remove icons/React elements) before sending to AI to prevent crashes
        const cleanData = JSON.parse(JSON.stringify(PORTFOLIO_DATA, (key, value) => {
            if (key === 'icon') return undefined;
            return value;
        }));

        const prompt = `
      You are an AI assistant for a portfolio website of ${PORTFOLIO_DATA.personal.name}.
      Here is the portfolio data: ${JSON.stringify(cleanData)}.
      
      User Question: "${userMessage}"
      
      Instructions:
      1. Answer purely based on the portfolio data provided.
      2. If the user asks something not in the data, say you don't know but suggest they contact Alex.
      3. Be concise, friendly, and professional.
      4. Keep answers under 3 sentences if possible.
    `;

        const reply = await GeminiService.generateContent(prompt);

        setMessages(prev => [...prev, { role: 'model', text: reply }]);
        setIsLoading(false);
    };

    if (!isOpen) return (
        <button
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform ${isDark ? 'bg-cyan-500 text-slate-900' : 'bg-cyan-600 text-white'
                }`}
        >
            <MessageCircle size={28} />
        </button>
    );

    return (
        <div className={`fixed bottom-6 right-6 w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col z-50 border overflow-hidden ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
            }`}>
            {/* Header */}
            <div className={`p-4 flex justify-between items-center border-b ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-100'
                }`}>
                <div className="flex items-center gap-2">
                    <Bot className={isDark ? "text-cyan-400" : "text-cyan-600"} size={20} />
                    <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Alex&apos;s AI Assistant</h3>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-500">
                    <X size={20} />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                            ? (isDark ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-cyan-600 text-white rounded-br-none')
                            : (isDark ? 'bg-slate-700 text-slate-200 rounded-bl-none' : 'bg-slate-100 text-slate-800 rounded-bl-none')
                            }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className={`p-3 rounded-2xl rounded-bl-none ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                            <Loader2 className="animate-spin text-cyan-500" size={16} />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className={`p-4 border-t ${isDark ? 'border-slate-700' : 'border-slate-100'}`}>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask about my projects..."
                        className={`flex-1 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 ${isDark ? 'bg-slate-900 text-white placeholder-slate-500' : 'bg-slate-50 text-slate-900 placeholder-slate-400'
                            }`}
                    />
                    <button
                        onClick={handleSend}
                        disabled={isLoading || !input.trim()}
                        className={`p-2 rounded-lg transition-colors ${isDark
                            ? 'bg-cyan-500 text-slate-900 hover:bg-cyan-400 disabled:opacity-50'
                            : 'bg-cyan-600 text-white hover:bg-cyan-700 disabled:opacity-50'
                            }`}
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProjectGenerator = ({ isDark }) => {
    const [suggestion, setSuggestion] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const generateProject = async () => {
        setLoading(true);
        setShowModal(true);
        setSuggestion(null);

        const skills = PORTFOLIO_DATA.skills.join(", ");
        const prompt = `
      Create a unique, advanced coding project idea for a Computer Science portfolio.
      
      The student has these skills: ${skills}.
      
      The project should:
      1. Combine at least 3 of these skills.
      2. Solve a real-world problem.
      3. Have a creative name.
      4. Include a brief feature list.
      
      Format the response as JSON: { "title": "Project Name", "description": "Short description", "stack": ["Tech1", "Tech2"], "features": ["Feature 1", "Feature 2"] }
    `;

        try {
            const result = await GeminiService.generateContent(prompt);
            // Clean up markdown code blocks if Gemini sends them
            const cleanJson = result.replace(/```json/g, '').replace(/```/g, '').trim();
            const projectData = JSON.parse(cleanJson);
            setSuggestion(projectData);
        } catch (e) {
            setSuggestion({
                title: "AI Project Suggestion",
                description: "Could not parse AI response perfectly, but here is a raw idea: " + e.message,
                stack: ["React", "AI"],
                features: ["Try again"]
            });
        }
        setLoading(false);
    };

    return (
        <>
            <button
                onClick={generateProject}
                className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${isDark
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 shadow-lg shadow-purple-500/20'
                    : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:opacity-90 shadow-lg shadow-purple-600/20'
                    }`}
            >
                <Sparkles size={16} />
                <span>Generate AI Project Idea</span>
            </button>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className={`w-full max-w-lg rounded-2xl p-6 relative shadow-2xl ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white'
                        }`}>
                        <button
                            onClick={() => setShowModal(false)}
                            className={`absolute top-4 right-4 ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-800'}`}
                        >
                            <X size={24} />
                        </button>

                        <h3 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                            <Sparkles className="text-purple-500" />
                            Next Big Idea
                        </h3>

                        {loading ? (
                            <div className="py-12 flex flex-col items-center justify-center text-slate-500">
                                <Loader2 className="animate-spin mb-4" size={32} />
                                <p>Consulting the AI Architects...</p>
                            </div>
                        ) : suggestion ? (
                            <div className="space-y-4">
                                <div className={`p-4 rounded-xl border-l-4 border-purple-500 ${isDark ? 'bg-slate-700/50' : 'bg-purple-50'}`}>
                                    <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                                        {suggestion.title}
                                    </h4>
                                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {suggestion.description}
                                    </p>
                                </div>

                                <div>
                                    <h5 className={`text-sm font-semibold mb-2 uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Tech Stack</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {suggestion.stack?.map((tech, i) => (
                                            <span key={i} className={`px-2 py-1 text-xs rounded font-medium ${isDark ? 'bg-slate-700 text-cyan-300' : 'bg-slate-100 text-cyan-700'
                                                }`}>
                                                {/* Ensure we render strings, even if API sends objects */}
                                                {typeof tech === 'string' ? tech : JSON.stringify(tech)}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h5 className={`text-sm font-semibold mb-2 uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Key Features</h5>
                                    <ul className={`list-disc list-inside text-sm space-y-1 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {suggestion.features?.map((feat, i) => (
                                            <li key={i}>{typeof feat === 'string' ? feat : JSON.stringify(feat)}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <p className="text-red-400">Something went wrong. Try again!</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-slate-900 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200' : 'bg-slate-50 text-slate-800 selection:bg-cyan-200 selection:text-cyan-900'}`}>

            {/* Navigation */}
            <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled
                ? (isDark ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-white/90 backdrop-blur-md shadow-sm py-4')
                : 'bg-transparent py-6'
                }`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" className={`text-2xl font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        <Terminal className={isDark ? "text-cyan-400" : "text-cyan-600"} />
                        <span>{PORTFOLIO_DATA.personal.name}<span className={isDark ? "text-cyan-400" : "text-cyan-600"}>.</span></span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        <NavLink href="#about" isDark={isDark}>About</NavLink>
                        <NavLink href="#experience" isDark={isDark}>Experience</NavLink>
                        <NavLink href="#projects" isDark={isDark}>Projects</NavLink>
                        <NavLink href="#education" isDark={isDark}>Education</NavLink>
                        <NavLink href="#achievements" isDark={isDark}>Achievements</NavLink>
                        <NavLink href="#content" isDark={isDark}>Content</NavLink>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100 text-slate-600'}`}
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <a href="#contact" className={`px-5 py-2 rounded-full border transition-all font-medium ${isDark
                            ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                            : 'border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white'
                            }`}>
                            Contact Me
                        </a>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${isDark ? 'text-yellow-400' : 'text-slate-600'}`}
                        >
                            {isDark ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                        <button className={isDark ? "text-slate-200" : "text-slate-800"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={`md:hidden absolute top-full left-0 w-full border-b py-4 px-6 flex flex-col gap-4 shadow-xl ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
                        }`}>
                        <NavLink href="#about" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>About</NavLink>
                        <NavLink href="#experience" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Experience</NavLink>
                        <NavLink href="#projects" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                        <NavLink href="#education" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Education</NavLink>
                        <NavLink href="#achievements" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Achievements</NavLink>
                        <NavLink href="#content" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Content</NavLink>
                        <NavLink href="#contact" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Background Decorative Blobs */}
                <div className={`absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-50 animate-pulse ${isDark ? 'bg-blue-600/20' : 'bg-blue-400/20'}`}></div>
                <div className={`absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-50 ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-400/20'}`}></div>

                <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <div className={`inline-block px-3 py-1 border rounded-full text-sm font-medium mb-4 ${isDark
                                ? 'bg-slate-800 border-slate-700 text-cyan-400'
                                : 'bg-white border-slate-200 text-cyan-600 shadow-sm'
                                }`}>
                                👋 Hello World, I&apos;m
                            </div>
                            <h1 className={`text-5xl md:text-7xl font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                {PORTFOLIO_DATA.personal.name}
                            </h1>
                            <h2 className={`text-2xl md:text-3xl font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                {PORTFOLIO_DATA.personal.role}
                            </h2>
                            <p className={`max-w-xl text-lg leading-relaxed mx-auto md:mx-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                {PORTFOLIO_DATA.personal.about}
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                                <a href="#projects" className={`px-8 py-3 rounded-lg font-bold transition-colors shadow-lg ${isDark
                                    ? 'bg-cyan-500 text-slate-900 hover:bg-cyan-400 shadow-cyan-500/25'
                                    : 'bg-cyan-600 text-white hover:bg-cyan-500 shadow-cyan-600/25'
                                    }`}>
                                    View Work
                                </a>
                                <a href={PORTFOLIO_DATA.personal.resumeLink} className={`px-8 py-3 border rounded-lg font-bold transition-colors flex items-center gap-2 ${isDark
                                    ? 'bg-slate-800 text-white border-slate-700 hover:border-cyan-500'
                                    : 'bg-white text-slate-800 border-slate-200 hover:border-cyan-600 hover:text-cyan-600'
                                    }`}>
                                    <User size={18} /> Resume
                                </a>
                            </div>

                            <div className={`flex gap-6 justify-center md:justify-start pt-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                <a href={PORTFOLIO_DATA.personal.github} className={`transition-colors hover:scale-110 transform ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}><Github size={24} /></a>
                                <a href={PORTFOLIO_DATA.personal.linkedin} className={`transition-colors hover:scale-110 transform ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}><Linkedin size={24} /></a>
                                <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className={`transition-colors hover:scale-110 transform ${isDark ? 'hover:text-white' : 'hover:text-slate-900'}`}><Mail size={24} /></a>
                            </div>
                        </div>

                        {/* Hero Visual/Stats */}
                        <div className="flex-1 w-full max-w-lg">
                            <div className="grid grid-cols-2 gap-4">
                                {PORTFOLIO_DATA.stats.map((stat, idx) => (
                                    <div key={idx} className={`border p-6 rounded-2xl backdrop-blur-sm transition-all ${isDark
                                        ? 'bg-slate-800/50 border-slate-700 hover:bg-slate-800'
                                        : 'bg-white/60 border-slate-200 hover:bg-white shadow-sm'
                                        }`}>
                                        <h3 className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</h3>
                                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    <ChevronDown size={32} />
                </div>
            </section>

            {/* About & Skills Section */}
            <section id="about" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <div className="container mx-auto px-6">
                    <SectionTitle title="Technical Arsenal" subtitle="My toolkit for building digital experiences" isDark={isDark} />

                    <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
                        {PORTFOLIO_DATA.skills.map((skill, index) => (
                            <span
                                key={index}
                                className={`px-6 py-3 rounded-lg border transition-all cursor-default select-none text-lg ${isDark
                                    ? 'bg-slate-800 text-slate-300 border-slate-700 hover:border-cyan-500 hover:text-cyan-400'
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-cyan-600 hover:text-cyan-600 shadow-sm'
                                    }`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className={`py-24 ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                <div className="container mx-auto px-6">
                    <TimelineSection title="Work Experience" items={PORTFOLIO_DATA.experience} isDark={isDark} />
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <div className="container mx-auto px-6">
                    <TimelineSection title="Education" items={PORTFOLIO_DATA.education} isDark={isDark} />
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`py-24 ${isDark ? 'bg-slate-800/30' : 'bg-slate-100'}`}>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                            <span className={isDark ? "text-cyan-400" : "text-cyan-600"}>&lt;</span> Featured Projects <span className={isDark ? "text-cyan-400" : "text-cyan-600"}>/&gt;</span>
                        </h2>
                        <p className={`max-w-2xl mx-auto text-center mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            Some things I&apos;ve built to solve real problems
                        </p>
                        {/* ✨ GEMINI FEATURE 1: Project Idea Generator ✨ */}
                        <ProjectGenerator isDark={isDark} />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PORTFOLIO_DATA.projects.map((project, index) => (
                            <ProjectCard key={index} project={project} isDark={isDark} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Source Section */}
            <section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <div className="container mx-auto px-6">
                    <SectionTitle title="Open Source" subtitle="Contributing to the community" isDark={isDark} />
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {PORTFOLIO_DATA.openSource.map((project, index) => (
                            <div key={index} className={`p-6 rounded-xl border transition-all hover:-translate-y-1 ${isDark
                                ? 'bg-slate-800 border-slate-700 hover:border-cyan-500'
                                : 'bg-white border-slate-200 hover:border-cyan-600 shadow-sm'
                                }`}>
                                <div className="flex justify-between items-start mb-4">
                                    <Github className={isDark ? "text-cyan-400" : "text-cyan-600"} size={24} />
                                    <a href={project.link} className={isDark ? "text-slate-400 hover:text-white" : "text-slate-400 hover:text-slate-900"}>
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>{project.title}</h3>
                                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section id="achievements" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <div className="container mx-auto px-6">
                    <SectionTitle title="Achievements" subtitle="Milestones in my computer science journey" isDark={isDark} />

                    <div className={`max-w-3xl mx-auto rounded-2xl p-8 border ${isDark
                        ? 'bg-slate-800/50 border-slate-700'
                        : 'bg-white border-slate-200 shadow-sm'
                        }`}>
                        <div className="space-y-4">
                            {PORTFOLIO_DATA.achievements.map((item, index) => (
                                <AchievementCard key={index} item={item} isDark={isDark} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section (Blogs, Talks, Podcasts) */}
            <section id="content" className={`py-24 ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                <div className="container mx-auto px-6">
                    <SectionTitle title="Content Creation" subtitle="Sharing knowledge through various mediums" isDark={isDark} />

                    <div className="space-y-16">
                        {/* Blogs */}
                        <div>
                            <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Latest Blogs</h3>
                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                {PORTFOLIO_DATA.blogs.map((item, index) => (
                                    <GridCard key={index} item={item} type="blog" isDark={isDark} />
                                ))}
                            </div>
                        </div>

                        {/* Talks */}
                        <div>
                            <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Tech Talks</h3>
                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                {PORTFOLIO_DATA.talks.map((item, index) => (
                                    <GridCard key={index} item={item} type="talk" isDark={isDark} />
                                ))}
                            </div>
                        </div>

                        {/* Podcasts */}
                        <div>
                            <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>Podcasts</h3>
                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                {PORTFOLIO_DATA.podcasts.map((item, index) => (
                                    <GridCard key={index} item={item} type="podcast" isDark={isDark} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Section */}
            <section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <div className="container mx-auto px-6">
                    <SectionTitle title="Social Feed" subtitle="Stay connected with my latest updates" isDark={isDark} />
                    <SocialSection data={PORTFOLIO_DATA.social} isDark={isDark} />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-24 ${isDark ? 'bg-gradient-to-b from-slate-900 to-slate-800' : 'bg-gradient-to-b from-slate-50 to-slate-200'}`}>
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <SectionTitle title="Get In Touch" subtitle="Have a project in mind or want to discuss the latest tech?" isDark={isDark} />

                    <div className={`p-8 md:p-12 rounded-2xl shadow-2xl border ${isDark
                        ? 'bg-slate-800 border-slate-700'
                        : 'bg-white border-slate-200'
                        }`}>
                        <p className={`text-xl mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                        </p>

                        <ContactForm isDark={isDark} />

                        <div className={`mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm ${isDark
                            ? 'border-slate-700 text-slate-500'
                            : 'border-slate-200 text-slate-500'
                            }`}>
                            <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</p>
                            <div className="flex gap-4 mt-4 md:mt-0">
                                <a href={PORTFOLIO_DATA.personal.github} className={isDark ? "hover:text-cyan-400" : "hover:text-cyan-600"}>GitHub</a>
                                <a href={PORTFOLIO_DATA.personal.linkedin} className={isDark ? "hover:text-cyan-400" : "hover:text-cyan-600"}>LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✨ GEMINI FEATURE 2: AI Chatbot ✨ */}
            <ChatBot isDark={isDark} isOpen={isChatOpen} setIsOpen={setIsChatOpen} />

        </div>
    );
}