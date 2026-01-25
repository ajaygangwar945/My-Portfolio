import React, { useEffect } from 'react';
import { PORTFOLIO_DATA } from './data';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const AllProjects = ({ isDark }) => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`min-h-screen pt-24 pb-12 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
            <div className="container mx-auto px-6">

                <SectionTitle
                    title="All Projects"
                    subtitle="A complete collection of my work, experiments, and open source contributions."
                    isDark={isDark}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PORTFOLIO_DATA.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} isDark={isDark} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
