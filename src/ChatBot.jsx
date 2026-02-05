import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, RefreshCw, Sparkles, Maximize2, Minimize2 } from 'lucide-react';
import { GeminiService } from './data';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ChatBot = ({ isDark, isOpen, setIsOpen }) => {
    const [messages, setMessages] = useState([
        {
            role: 'bot',
            text: "Hi there! I'm Ajay's AI assistant. Ask me anything about his projects, skills, or experience! Try asking for 'new project ideas'!"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isExpanded]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const botResponseText = await GeminiService.generateContent(input);

            if (botResponseText === "RATE_LIMIT_REACHED") {
                setMessages(prev => [...prev, {
                    role: 'bot',
                    text: "I've reached my daily quota for free tier use! 🚀 Ajay's portfolio AI has a limited daily budget. Please try again tomorrow or ask about something else!"
                }]);
                setIsLoading(false);
                return;
            }

            const botMessage = { role: 'bot', text: botResponseText };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I had trouble connecting to the AI. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg hover:scale-110 transition-all z-50 group ${isDark
                        ? 'bg-cyan-500 text-white hover:bg-cyan-400 shadow-cyan-500/20'
                        : 'bg-slate-900 text-white hover:bg-slate-700'
                        }`}
                    aria-label="Open Chat"
                >
                    <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
                    <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
                </button>
            )}

            {/* Chat Window */}
            <div className={`fixed bottom-6 right-6 flex flex-col transition-all duration-300 transform z-50 shadow-2xl rounded-2xl overflow-hidden ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
                } ${isExpanded ? 'w-[90vw] h-[85vh] md:w-[900px]' : 'w-full max-w-lg h-[450px]'} ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>

                {/* Header */}
                <div className={`p-4 border-b flex justify-between items-center ${isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-slate-50/90 border-slate-200'
                    }`}>
                    <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-lg ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-600'}`}>
                            <Bot size={20} />
                        </div>
                        <div>
                            <h3 className={`font-bold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>AI Assistant</h3>
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Online</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className={`p-2 rounded-full transition-colors hidden md:block ${isDark ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-200 text-slate-500'}`}
                            title={isExpanded ? "Collapse" : "Expand"}
                        >
                            {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-200 text-slate-500'}`}
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-400/20 scrollbar-track-transparent">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user'
                                ? (isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600')
                                : (isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-600')
                                }`}>
                                {msg.role === 'user' ? <User size={16} /> : <Sparkles size={16} />}
                            </div>
                            <div className={`p-4 rounded-2xl max-w-[90%] text-sm leading-relaxed shadow-sm overflow-hidden ${msg.role === 'user'
                                ? (isDark ? 'bg-purple-600 text-white rounded-tr-none' : 'bg-purple-600 text-white rounded-tr-none')
                                : (isDark ? 'bg-slate-700/50 text-slate-200 rounded-tl-none border border-slate-600/50' : 'bg-slate-50 text-slate-800 rounded-tl-none border border-slate-200')
                                }`}>
                                {msg.role === 'user' ? (
                                    <p>{msg.text}</p>
                                ) : (
                                    <div className="prose prose-sm max-w-none dark:prose-invert">
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                h1: ({ ...props }) => <h1 className="text-xl font-bold mb-3 mt-4 border-b pb-2 border-slate-600 text-cyan-400" {...props} />,
                                                h2: ({ ...props }) => <h2 className="text-lg font-semibold mb-2 mt-4 text-cyan-300" {...props} />,
                                                h3: ({ ...props }) => <h3 className="text-md font-semibold mb-2 mt-2 text-cyan-200" {...props} />,
                                                ul: ({ ...props }) => <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-800 dark:text-slate-200" {...props} />,
                                                ol: ({ ...props }) => <ol className="list-decimal pl-5 mb-4 space-y-1 text-slate-800 dark:text-slate-200" {...props} />,
                                                li: ({ ...props }) => <li className="mb-1 text-slate-800 dark:text-slate-200" {...props} />,
                                                p: ({ ...props }) => <p className="mb-3 last:mb-0 text-slate-800 dark:text-slate-200" {...props} />,
                                                strong: ({ ...props }) => <strong className="font-bold text-cyan-600 dark:text-cyan-400" {...props} />,
                                                code: ({ inline, children, ...props }) => {
                                                    return inline ? (
                                                        <code className="px-1 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-xs" {...props}>
                                                            {children}
                                                        </code>
                                                    ) : (
                                                        <div className="relative group my-4">
                                                            <div className="absolute top-0 right-0 px-2 py-1 text-xs text-slate-500 bg-slate-800 rounded-bl">
                                                                code
                                                            </div>
                                                            <code className="block p-4 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 font-mono text-sm overflow-x-auto" {...props}>
                                                                {children}
                                                            </code>
                                                        </div>
                                                    )
                                                }
                                            }}
                                        >
                                            {msg.text}
                                        </ReactMarkdown>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-600'}`}>
                                <Bot size={16} />
                            </div>
                            <div className={`p-4 rounded-2xl rounded-tl-none flex items-center gap-3 ${isDark ? 'bg-slate-700' : 'bg-slate-100'}`}>
                                <RefreshCw size={18} className="animate-spin text-cyan-500" />
                                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Thinking...</span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSend} className={`p-4 border-t ${isDark ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-slate-50'}`}>
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message... (e.g. 'Project Ideas')"
                            className={`w-full py-3 pl-4 pr-12 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all ${isDark
                                ? 'bg-slate-800 border-slate-600 text-white placeholder-slate-500'
                                : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                                }`}
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isLoading}
                            className={`absolute right-2 p-2 rounded-lg transition-all ${input.trim() && !isLoading
                                ? 'bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg shadow-cyan-500/20'
                                : 'bg-slate-300 text-slate-500 cursor-not-allowed dark:bg-slate-700 dark:text-slate-600'
                                }`}
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ChatBot;
