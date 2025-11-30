import React from 'react';

const SectionTitle = ({ title, subtitle, isDark }) => (
    <div className="mb-12 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
            <span className={isDark ? "text-cyan-400" : "text-cyan-600"}>&lt;</span> {title} <span className={isDark ? "text-cyan-400" : "text-cyan-600"}>/&gt;</span>
        </h2>
        <p className={`max-w-2xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{subtitle}</p>
    </div>
);

export default SectionTitle;
