import { ExternalLink, FileText, Award } from 'lucide-react';

const CertificateCard = ({ certificate, isDark }) => {
    if (!certificate) return null;

    return (
        <div className={`group rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden ${isDark
            ? 'bg-slate-800 border-slate-700 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
            : 'bg-white border-slate-200 hover:border-cyan-500/50 hover:shadow-cyan-500/10 shadow-sm'
            }`}>
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

export default CertificateCard;
