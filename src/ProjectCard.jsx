import React from 'react';
import { Code, Github, Globe } from 'lucide-react';

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
                    <Globe size={20} />
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

export default ProjectCard;
