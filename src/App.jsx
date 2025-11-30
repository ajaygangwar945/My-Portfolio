import { useState, useEffect } from 'react';
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code,
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
    Briefcase,
    BookOpen,
    Mic,
    Twitter,
    Instagram,
    Facebook,
    Database,
    Award,
    FileText
} from 'lucide-react';
import ChatBot from './ChatBot';
import { PORTFOLIO_DATA, GeminiService } from './data';

// Safety check
if (!PORTFOLIO_DATA) {
    console.error('PORTFOLIO_DATA is not defined. Please check data.jsx');
}

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
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-900'} transition-colors`}
                >
                    <Github size={20} />
                </a>
                <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-900'} transition-colors`}
                >
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

const PositionTimelineItem = ({ position, isLast, isDark }) => (
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
                    {position.title}
                </h4>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${isDark ? 'bg-slate-700 text-cyan-300' : 'bg-cyan-50 text-cyan-700'}`}>
                    {position.date}
                </span>
            </div>
            <h5 className={`text-lg font-medium mb-3 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                {position.role}
            </h5>
            <ul className={`space-y-2 mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {position.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                        <span className={`mr-3 mt-1.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>•</span>
                        <span>{responsibility}</span>
                    </li>
                ))}
            </ul>
            {position.detailsLink && (
                <a
                    href={position.detailsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${isDark
                        ? 'bg-cyan-600 text-white hover:bg-cyan-500'
                        : 'bg-cyan-600 text-white hover:bg-cyan-700'
                        }`}
                >
                    <ExternalLink size={16} />
                    More Details
                </a>
            )}
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

const SocialCard = ({ link, isDark, config }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group block p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isDark
            ? 'bg-slate-800 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
            : 'bg-white border-slate-200 hover:border-cyan-500/50 hover:shadow-cyan-500/10 shadow-sm'
            }`}
    >
        <div className="flex items-center gap-3 mb-4">
            <div className={`p-3 rounded-xl transition-colors ${isDark ? 'bg-slate-700/50 group-hover:bg-cyan-500/20' : 'bg-slate-100 group-hover:bg-cyan-50'}`}>
                {config.icon}
            </div>
            <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-800'}`}>
                {config.title}
            </h3>
        </div>

        <p className={`mb-6 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {config.content}
        </p>

        <div className={`flex items-center gap-2 text-sm font-medium ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
            {config.action}
            <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
    </a>
);

const CertificateCard = ({ certificate, isDark }) => {
    if (!certificate) return null;

    return (
        <div className={`group rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden ${isDark
            ? 'bg-slate-800 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
            : 'bg-white border-slate-200 hover:border-cyan-500/50 hover:shadow-cyan-500/10 shadow-sm'
            }`}>
            <div className="relative h-48 overflow-hidden">
                <img
                    src={certificate.image || '/certificate-placeholder.jpg'}
                    alt={certificate.title || 'Certificate'}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                        if (e.target && e.target.nextElementSibling) {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                        }
                    }}
                />
                <div className={`hidden absolute inset-0 items-center justify-center ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <FileText className={isDark ? "text-cyan-400" : "text-cyan-600"} size={64} />
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-slate-700/50 text-cyan-400' : 'bg-cyan-50 text-cyan-600'}`}>
                        <Award size={20} />
                    </div>
                    <a
                        href={certificate.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'}`}
                    >
                        <ExternalLink size={18} />
                    </a>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    {certificate.title || '[Certificate Title]'}
                </h3>
                <p className={`text-sm font-medium mb-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    {certificate.organization || '[Issuing Organization]'}
                </p>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {certificate.date || '[Month, Year]'}
                </p>
            </div>
        </div>
    );
};

const SocialSection = ({ data, isDark }) => {
    const socialConfig = {
        twitter: {
            title: "Latest Tweets",
            content: "\"Just shipped a new feature! 🚀 #coding #react\"",
            action: "View on Twitter",
            icon: <Twitter size={24} className={isDark ? "text-cyan-400" : "text-cyan-600"} />
        },
        github: {
            title: "GitHub Activity",
            content: "500+ contributions in the last year. Check out my latest repos!",
            action: "View Profile",
            icon: <Github size={24} className={isDark ? "text-cyan-400" : "text-cyan-600"} />
        },
        linkedin: {
            title: "Professional Network",
            content: "Let's connect and discuss potential opportunities and collaborations.",
            action: "Connect with me",
            icon: <Linkedin size={24} className={isDark ? "text-cyan-400" : "text-cyan-600"} />
        },
        instagram: {
            title: "Latest Moments",
            content: "Sharing my daily life, travel adventures, and coding setup.",
            action: "Check Gallery",
            icon: <Instagram size={24} className={isDark ? "text-cyan-400" : "text-cyan-600"} />
        },
        facebook: {
            title: "Social Circle",
            content: "Stay in touch with my personal updates and events.",
            action: "Add Friend",
            icon: <Facebook size={24} className={isDark ? "text-cyan-400" : "text-cyan-600"} />
        },
        discord: {
            title: "Community Chat",
            content: "Join our developer community server. Let's chat about code!",
            action: "Join Server",
            icon: <MessageCircle size={24} className={isDark ? "text-cyan-400" : "text-cyan-600"} />
        },
        leetcode: {
            title: "Problem Solving",
            content: "Solved 500+ problems. Consistent daily streak!",
            action: "View Solutions",
            icon: <Code size={24} className={isDark ? "text-cyan-400" : "text-cyan-600"} />
        },
        codeforces: {
            title: "Competitive Prog.",
            content: "Max Rating: 1600 (Specialist). Participating in weekly contests.",
            action: "View Rating",
            icon: <Terminal size={24} className={isDark ? "text-cyan-400" : "text-cyan-600"} />
        },
        kaggle: {
            title: "Data Science",
            content: "Exploring datasets and building ML models. 2x Silver Medalist.",
            action: "View Notebooks",
            icon: <Database size={24} className={isDark ? "text-cyan-400" : "text-cyan-600"} />
        }
    };

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(data).map(([platform, link]) => {
                if (platform === 'twitterHandle' || !socialConfig[platform]) return null;
                return (
                    <SocialCard
                        key={platform}
                        platform={platform}
                        link={link}
                        isDark={isDark}
                        config={socialConfig[platform]}
                    />
                );
            })}
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

        const skills = PORTFOLIO_DATA?.skills?.join(", ") || "";
        const prompt = `
            Create a unique, advanced coding project idea for a Computer Science portfolio.

            The student has these skills: ${skills}.

            The project should:
            1. Combine at least 3 of these skills.
            2. Solve a real-world problem.
            3. Have a creative name.
            4. Include a brief feature list.

            Format the response as JSON: {"title": "Project Name", "description": "Short description", "stack": ["Tech1", "Tech2"], "features": ["Feature 1", "Feature 2"] }
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
        try {
            if (!PORTFOLIO_DATA) {
                console.error('PORTFOLIO_DATA is undefined!');
            } else {
                console.log('PORTFOLIO_DATA loaded:', Object.keys(PORTFOLIO_DATA));
            }
        } catch (error) {
            console.error('Error checking PORTFOLIO_DATA:', error);
        }
    }, []);

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
                        <span>{(PORTFOLIO_DATA?.personal?.name) || 'Portfolio'}<span className={isDark ? "text-cyan-400" : "text-cyan-600"}>.</span></span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        <NavLink href="#about" isDark={isDark}>About</NavLink>
                        <NavLink href="#experience" isDark={isDark}>Experience</NavLink>
                        <NavLink href="#projects" isDark={isDark}>Projects</NavLink>
                        <NavLink href="#achievements" isDark={isDark}>Achievements</NavLink>
                        <NavLink href="#certificates" isDark={isDark}>Certificates</NavLink>
                        <NavLink href="#education" isDark={isDark}>Education</NavLink>
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
                        <NavLink href="#achievements" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Achievements</NavLink>
                        <NavLink href="#certificates" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Certificates</NavLink>
                        <NavLink href="#education" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Education</NavLink>
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
                        <div className="flex-1 w-full max-w-lg relative">
                            {/* Profile Image */}
                            <div className="mb-8 relative group">
                                <div className={`absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity ${isDark ? 'bg-cyan-500' : 'bg-cyan-400'}`}></div>
                                <img
                                    src={PORTFOLIO_DATA.personal.profileImage}
                                    alt={PORTFOLIO_DATA.personal.name}
                                    className={`relative w-64 h-64 mx-auto object-cover rounded-full border-4 shadow-2xl transition-transform group-hover:scale-105 ${isDark ? 'border-slate-800' : 'border-white'}`}
                                />
                            </div>

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
                    <TimelineSection title="Experience" items={PORTFOLIO_DATA.experience} isDark={isDark} />
                </div>
            </section>

            {/* Positions of Responsibility Section */}
            <section id="positions" className={`py-24 ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                <div className="container mx-auto px-6">
                    <SectionTitle title="Positions of Responsibility" subtitle="Leadership & Community Roles" isDark={isDark} />
                    <div className="max-w-3xl mx-auto">
                        <div className="mt-8">
                            {/* SCC */}
                            <PositionTimelineItem
                                position={{
                                    title: "SCC",
                                    role: "Member",
                                    date: "Sep, 2025 – Present",
                                    detailsLink: "/scc.html",
                                    responsibilities: [
                                        "Represented the student body in meetings with faculty and management, effectively communicating academic and non-academic concerns.",
                                        "Actively contributed to organizing and managing technical events, including coding competitions, workshops, and hackathons, fostering a culture of innovation and technical growth among students.",
                                        "Coordinated with tech communities on campus to bring industry speakers, hands-on sessions, and technology awareness programs, enhancing peer learning and skill development."
                                    ]
                                }}
                                isLast={false}
                                isDark={isDark}
                            />

                            {/* Hostel Committee */}
                            <PositionTimelineItem
                                position={{
                                    title: "Hostel Committee",
                                    role: "Member",
                                    date: "Jan, 2024 – Aug, 2024",
                                    detailsLink: "/hostel-committee.html",
                                    responsibilities: [
                                        "Managed student welfare and conflict resolution for a residence of 500+ students, ensuring a safe and supportive living environment.",
                                        "Acted as a liaison between residents and the administration to resolve maintenance issues and upgrade facility resources.",
                                        "Organized community-building events and festivals, increasing student engagement and participation."
                                    ]
                                }}
                                isLast={false}
                                isDark={isDark}
                            />

                            {/* IGCMUN */}
                            <PositionTimelineItem
                                position={{
                                    title: "IGC MUN",
                                    role: "Member",
                                    date: "Jan, 2024 – Apr, 2024",
                                    detailsLink: "/igcmun.html",
                                    responsibilities: [
                                        "Engaged in diplomatic debates and extensive research on global policies to represent assigned portfolios effectively.",
                                        "Drafted working papers and resolutions while collaborating with diverse teams to reach consensus on complex international issues.",
                                        "Honed public speaking and negotiation skills through formal committee sessions and caucuses."
                                    ]
                                }}
                                isLast={true}
                                isDark={isDark}
                            />

                        </div>
                    </div>
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

            {/* Certificates Section */}
            <section id="certificates" className={`py-24 ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
                <div className="container mx-auto px-6">
                    <SectionTitle title="Certificates" subtitle="Professional certifications and achievements" isDark={isDark} />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {PORTFOLIO_DATA?.certificates && Array.isArray(PORTFOLIO_DATA.certificates) && PORTFOLIO_DATA.certificates.length > 0 ? (
                            PORTFOLIO_DATA.certificates.map((certificate, index) => (
                                <CertificateCard key={index} certificate={certificate} isDark={isDark} />
                            ))
                        ) : (
                            <p className={`col-span-full text-center ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                No certificates to display yet.
                            </p>
                        )}
                    </div>
                </div>
            </section >

            {/* Education Section */}
            < section id="education" className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <div className="container mx-auto px-6">
                    <TimelineSection title="Education" items={PORTFOLIO_DATA.education} isDark={isDark} />
                </div>
            </section >

            {/* Content Section (Blogs, Talks, Podcasts) */}
            < section id="content" className={`py-24 ${isDark ? 'bg-slate-800/50' : 'bg-slate-100'}`}>
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
                    </div>
                </div>
            </section >

            {/* Social Section */}
            < section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <div className="container mx-auto px-6">
                    <SectionTitle title="Social Feed" subtitle="Stay connected with my latest updates" isDark={isDark} />
                    <SocialSection data={PORTFOLIO_DATA.social} isDark={isDark} />
                </div>
            </section >

            {/* Contact Section */}
            < section id="contact" className={`py-24 ${isDark ? 'bg-gradient-to-b from-slate-900 to-slate-800' : 'bg-gradient-to-b from-slate-50 to-slate-200'}`}>
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
            </section >

            {/* ✨ GEMINI FEATURE 2: AI Chatbot ✨ */}
            < ChatBot isDark={isDark} isOpen={isChatOpen} setIsOpen={setIsChatOpen} />

        </div >
    );
}