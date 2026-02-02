import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import {
    Terminal,
    Menu,
    X,
    Sun,
    Moon
} from 'lucide-react';
import { PORTFOLIO_DATA } from './data';
import Home from './Home';
import AllProjects from './AllProjects';
import AllCertificates from './AllCertificates';
import PositionDetails from './PositionDetails';
import ChatBot from './ChatBot';

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

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-slate-900 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200' : 'bg-slate-50 text-slate-800 selection:bg-cyan-200 selection:text-cyan-900'}`}>

                {/* Navigation */}
                <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? (isDark ? 'bg-slate-900 shadow-lg py-4 border-b border-slate-800' : 'bg-white shadow-sm py-4 border-b border-slate-100')
                    : 'bg-transparent py-6'
                    }`}>
                    <div className="container mx-auto px-6 flex justify-between items-center">
                        <a href="/" className={`text-2xl font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            <Terminal className={isDark ? "text-cyan-400" : "text-cyan-600"} />
                            <span>{(PORTFOLIO_DATA?.personal?.name) || 'Portfolio'}<span className={isDark ? "text-cyan-400" : "text-cyan-600"}>.</span></span>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-8 items-center">
                            <NavLink href="/" isDark={isDark}>Home</NavLink>
                            <NavLink href="#about" isDark={isDark}>About</NavLink>
                            <NavLink href="#experience" isDark={isDark}>Experience</NavLink>
                            <NavLink href="#positions" isDark={isDark}>Positions</NavLink>
                            <NavLink href="#projects" isDark={isDark}>Projects</NavLink>
                            <NavLink href="#achievements" isDark={isDark}>Achievements</NavLink>
                            <NavLink href="#certificates" isDark={isDark}>Certificates</NavLink>
                            <NavLink href="#education" isDark={isDark}>Education</NavLink>

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
                    <div className={`md:hidden fixed inset-0 z-[100] transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
                        {/* Overlay */}
                        <div
                            className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                            onClick={() => setIsMenuOpen(false)}
                        ></div>

                        {/* Menu Content */}
                        <div className={`absolute right-0 top-0 h-full w-72 shadow-2xl p-6 flex flex-col transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} ${isDark ? 'bg-slate-900 border-l border-slate-800' : 'bg-white border-l border-slate-100'}`}>
                            <div className="flex justify-between items-center mb-10">
                                <span className={`text-xl font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    <Terminal size={20} className="text-cyan-500" /> Menu
                                </span>
                                <button className={isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"} onClick={() => setIsMenuOpen(false)}>
                                    <X size={28} />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-1 overflow-y-auto">
                                <NavLink href="/" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                                <NavLink href="#about" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>About</NavLink>
                                <NavLink href="#experience" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Experience</NavLink>
                                <NavLink href="#positions" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Positions</NavLink>
                                <NavLink href="#projects" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                                <NavLink href="#achievements" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Achievements</NavLink>
                                <NavLink href="#certificates" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Certificates</NavLink>
                                <NavLink href="#education" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Education</NavLink>
                                <NavLink href="#contact" mobile isDark={isDark} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
                            </nav>

                            <div className="mt-auto pt-6 border-t dark:border-slate-800 border-slate-100 flex flex-col gap-4">
                                <button
                                    onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
                                    className={`flex items-center gap-3 p-4 rounded-xl w-full transition-colors font-medium ${isDark ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                                >
                                    {isDark ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
                                </button>

                                <a href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-center py-4 rounded-xl font-bold transition-all bg-cyan-600 text-white hover:bg-cyan-500 shadow-lg shadow-cyan-600/20">
                                    Get In Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home isDark={isDark} />} />
                    <Route path="/projects" element={<AllProjects isDark={isDark} />} />
                    <Route path="/certificates" element={<AllCertificates isDark={isDark} />} />
                    <Route path="/position/:id" element={<PositionDetails isDark={isDark} />} />
                </Routes>

                {/* ✨ GEMINI FEATURE 2: AI Chatbot ✨ */}
                <ChatBot isDark={isDark} isOpen={isChatOpen} setIsOpen={setIsChatOpen} />


            </div>
        </BrowserRouter>
    );
}