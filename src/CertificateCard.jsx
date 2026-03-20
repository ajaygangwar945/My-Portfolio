import { ExternalLink, FileText, Award, Maximize2 } from 'lucide-react';

const CertificateCard = ({ certificate, isDark, onClick }) => {
    if (!certificate) return null;

    const handleExternalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div 
            onClick={onClick}
            className={`group rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${isDark
                ? 'bg-slate-800 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
                : 'bg-white border-slate-200 hover:border-cyan-500/50 hover:shadow-cyan-500/10 shadow-sm'
            }`}
        >
            <div className="relative h-40 sm:h-48 overflow-hidden">
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
                {/* View Overlay - only show if clickable */}
                {onClick && (
                    <div className="absolute inset-0 bg-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <div className="bg-white/90 p-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 text-cyan-600 shadow-lg">
                            <Maximize2 size={24} />
                        </div>
                    </div>
                )}

                <div className={`hidden absolute inset-0 items-center justify-center ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <FileText className={isDark ? "text-cyan-400" : "text-cyan-600"} size={48} />
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
                        onClick={handleExternalClick}
                        className={`transition-colors p-2 rounded-lg hover:bg-slate-100/10 ${isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-400 hover:text-cyan-600'}`}
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

export default CertificateCard;
