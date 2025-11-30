import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';
import { GeminiService } from './data';

const ChatBot = ({ isDark, isOpen, setIsOpen }) => {
    const [messages, setMessages] = useState([
        { role: 'model', text: "Hi! I'm Alex's AI assistant. Ask me anything about his projects, skills, or experience!" }
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

        const prompt = `
            You are an AI assistant for a portfolio website.
            User Question: "${userMessage}"
            Instructions:
            1. Answer purely based on the portfolio data provided in the context.
            2. Be concise, friendly, and professional.
            3. Keep answers under 3 sentences if possible.
        `;

        const reply = await GeminiService.generateContent(prompt);

        setMessages(prev => [...prev, { role: 'model', text: reply }]);
        setIsLoading(false);
    };

    if (!isOpen) return (
        <button
            onClick={() => setIsOpen(true)}
            className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform ${isDark ? 'bg-cyan-500 text-slate-900' : 'bg-cyan-600 text-white'}`}
        >
            <MessageCircle size={28} />
        </button>
    );

    return (
        <div className={`fixed bottom-6 right-6 w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl flex flex-col z-50 border overflow-hidden ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
            {/* Header */}
            <div className={`p-4 flex justify-between items-center border-b ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-100'}`}>
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
                        className={`flex-1 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 ${isDark ? 'bg-slate-900 text-white placeholder-slate-500' : 'bg-slate-50 text-slate-900 placeholder-slate-400'}`}
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

export default ChatBot;
