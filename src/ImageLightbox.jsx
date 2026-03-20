import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageLightbox = ({ images, currentIndex, isOpen, onClose, onNext, onPrev }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onNext, onPrev]);

    if (!isOpen || !images || images.length === 0) return null;

    const currentImage = images[currentIndex];

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all duration-300">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[210]"
                aria-label="Close Lightbox"
            >
                <X size={24} className="md:w-7 md:h-7" />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={onPrev}
                        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 p-2 sm:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[210]"
                        aria-label="Previous Image"
                    >
                        <ChevronLeft size={24} className="sm:w-9 sm:h-9" />
                    </button>
                    <button
                        onClick={onNext}
                        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 p-2 sm:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[210]"
                        aria-label="Next Image"
                    >
                        <ChevronRight size={24} className="sm:w-9 sm:h-9" />
                    </button>
                </>
            )}

            {/* Image Container */}
            <div className="relative max-w-5xl max-h-[90vh] w-full px-12 sm:px-4 flex flex-col items-center">
                <img
                    src={currentImage.image}
                    alt={currentImage.title}
                    className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                />
                
                <div className="mt-4 md:mt-6 text-center text-white">
                    <h3 className="text-lg md:text-xl font-bold mb-1">{currentImage.title}</h3>
                    <p className="text-xs md:text-sm text-cyan-400 font-medium">{currentImage.organization}</p>
                    <p className="text-[10px] md:text-xs text-slate-400 mt-2">
                        {currentIndex + 1} / {images.length}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImageLightbox;
