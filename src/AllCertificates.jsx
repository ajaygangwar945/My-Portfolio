import React, { useEffect } from 'react';
import { PORTFOLIO_DATA } from './data';
import CertificateCard from './CertificateCard';
import SectionTitle from './SectionTitle';

const AllCertificates = ({ isDark }) => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`min-h-screen pt-24 pb-12 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
            <div className="container mx-auto px-6">

                <SectionTitle
                    title="All Certificates"
                    subtitle="A complete collection of my professional certifications and achievements."
                    isDark={isDark}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PORTFOLIO_DATA.certificates.map((certificate, index) => (
                        <CertificateCard key={index} certificate={certificate} isDark={isDark} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllCertificates;
