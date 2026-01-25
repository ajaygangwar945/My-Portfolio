import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from './data';
import SectionTitle from './SectionTitle';

const PositionDetails = ({ isDark }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const position = PORTFOLIO_DATA.positions?.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!position) {
            // Optional: redirect or show 404 if not found
            // navigate('/');
        }
    }, [id, position, navigate]);

    if (!position) {
        return (
            <div className={`min-h-screen pt-24 flex flex-col items-center justify-center ${isDark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
                <h2 className="text-2xl font-bold mb-4">Position Not Found</h2>
                <Link to="/" className="text-cyan-500 hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className={`min-h-screen pt-24 pb-12 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className={`p-8 rounded-2xl border mb-12 ${isDark
                        ? 'bg-slate-800/50 border-slate-700'
                        : 'bg-white border-slate-200 shadow-sm'
                        }`}>
                        <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                            <div>
                                <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    {position.title}
                                </h1>
                                <h2 className={`text-xl font-medium ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                                    {position.role}
                                </h2>
                            </div>
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                                <Calendar size={16} />
                                {position.date}
                            </div>
                        </div>

                        <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            {position.fullDescription || position.description}
                        </p>

                        <div className="space-y-4">
                            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Key Responsibilities</h3>
                            <ul className={`space-y-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                {position.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isDark ? 'bg-cyan-400' : 'bg-cyan-600'}`}></span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {position.events && position.events.length > 0 && (
                        <div>
                            <SectionTitle title="Events & Highlights" subtitle="Memorable moments and successful initiatives" isDark={isDark} />
                            <div className={`grid gap-6 ${position.events.length === 1 ? 'place-items-center' : 'md:grid-cols-2'}`}>
                                {position.events.map((event, idx) => (
                                    <div key={idx} className={`group rounded-xl overflow-hidden border transition-all hover:-translate-y-1 w-full max-w-md ${isDark
                                        ? 'bg-slate-800 border-slate-700 hover:border-cyan-500/50'
                                        : 'bg-white border-slate-200 hover:border-cyan-500/50 shadow-sm'
                                        }`}>
                                        <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-700 relative">
                                            {/* Placeholder for actual images */}
                                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                                <Briefcase size={48} />
                                            </div>
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10 opacity-0"
                                                onLoad={(e) => e.target.classList.remove('opacity-0')}
                                                onError={(e) => e.target.style.display = 'none'}
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                                {event.title}
                                            </h4>
                                            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PositionDetails;
