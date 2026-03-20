import { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from './data';
import CertificateCard from './CertificateCard';
import SectionTitle from './SectionTitle';
import ImageLightbox from './ImageLightbox';

const AllCertificates = ({ isDark }) => {
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const certificates = PORTFOLIO_DATA?.certificates || [];

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => setIsLightboxOpen(false);
    const nextImage = () => setLightboxIndex((prev) => (prev + 1) % certificates.length);
    const prevImage = () => setLightboxIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

    return (
        <div className={`min-h-screen pt-24 pb-12 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
            <div className="container mx-auto px-6">

                <SectionTitle
                    title="All Certificates"
                    subtitle="A complete collection of my professional certifications and achievements."
                    isDark={isDark}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-2xl mx-auto">
                    {certificates.map((certificate, index) => (
                        <CertificateCard 
                            key={index} 
                            certificate={certificate} 
                            isDark={isDark} 
                            onClick={() => openLightbox(index)}
                        />
                    ))}
                </div>

                <ImageLightbox
                    images={certificates}
                    currentIndex={lightboxIndex}
                    isOpen={isLightboxOpen}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            </div>
        </div>
    );
};

export default AllCertificates;
