import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import {
    Terminal,
    Menu,
    X,
    Sun,
    Moon
} from 'lucide-react';
import ChatBot from './ChatBot';
import { PORTFOLIO_DATA } from './data';
import Home from './Home';
import AllProjects from './AllProjects';

// NavLink Component
const NavLink = ({ href, children, mobile, onClick, isDark }) => {
    // Simple check to see if we are on the home page to handle anchor links
    // For a more robust solution, we might use useLocation, but href="/#id" works well for simple cases
    const isAnchor = href.startsWith('#');
    const finalHref = isAnchor ? `/${href}` : href;

    return (
        <a
            href={finalHref}
            onClick={onClick}
            className={`${mobile ? 'block py-2 text-lg' : ''} ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'} transition-colors font-medium cursor-pointer`}
        >
            {children}
        </a>
    );
};

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
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
        <BrowserRouter>
            <ScrollToTop />
            <div className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-slate-900 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200' : 'bg-slate-50 text-slate-800 selection:bg-cyan-200 selection:text-cyan-900'}`}>

                {/* Navigation */}
                <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled
                    ? (isDark ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-white/90 backdrop-blur-md shadow-sm py-4')
                    : 'bg-transparent py-6'
                    }`}>
                    <div className="container mx-auto px-6 flex justify-between items-center">
                        <a href="/" className={`text-2xl font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
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

                            <a href="/#contact" className={`px-5 py-2 rounded-full border transition-all font-medium ${isDark
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

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home isDark={isDark} />} />
                    <Route path="/projects" element={<AllProjects isDark={isDark} />} />
                </Routes>

                {/* ✨ GEMINI FEATURE 2: AI Chatbot ✨ */}
                <ChatBot isDark={isDark} isOpen={isChatOpen} setIsOpen={setIsChatOpen} />

            </div>
        </BrowserRouter>
    );
}