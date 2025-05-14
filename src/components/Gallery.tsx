import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

type GalleryItem = {
  type: 'image' | 'video';
  thumbnail: string;
  source?: string;
  title: string;
};

export const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems: GalleryItem[] = [
    {
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
      title: 'Partido contra rivales locales'
    },
    {
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
      title: 'Gol decisivo'
    },
    {
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg',
      title: 'Celebración en equipo'
    },
    {
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/3148452/pexels-photo-3148452.jpeg',
      title: 'Sesión de entrenamiento'
    },
    {
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg',
      title: 'Especialista en tiros libres'
    },
    {
      type: 'video',
      thumbnail: 'https://images.pexels.com/photos/3041256/pexels-photo-3041256.jpeg',
      source: 'https://player.vimeo.com/video/517031489',
      title: 'Mejores momentos 2023'
    },
    {
      type: 'video',
      thumbnail: 'https://images.pexels.com/photos/918798/pexels-photo-918798.jpeg',
      source: 'https://player.vimeo.com/video/517031489',
      title: 'Demostración de habilidades'
    },
    {
      type: 'image',
      thumbnail: 'https://images.pexels.com/photos/3639486/pexels-photo-3639486.jpeg',
      title: 'Equipo juvenil'
    },
  ];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Galería <span className="text-gold-500">Multimedia</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fotos y videos que muestran mis habilidades, actuaciones y momentos memorables en el campo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer overflow-hidden rounded-lg relative aspect-square shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <p className="text-white font-medium">{item.title}</p>
                {item.type === 'video' && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold-500 rounded-full p-3">
                    <Play className="w-6 h-6 text-blue-900" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors"
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={() => navigate('prev')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 transition-colors"
          >
            <ChevronLeft size={40} />
          </button>
          
          <div className="max-w-6xl w-full max-h-[80vh] flex flex-col items-center">
            {galleryItems[currentIndex].type === 'image' ? (
              <img
                src={galleryItems[currentIndex].thumbnail}
                alt={galleryItems[currentIndex].title}
                className="max-h-[70vh] max-w-full object-contain"
              />
            ) : (
              <div className="w-full max-w-4xl aspect-video">
                <iframe
                  src={galleryItems[currentIndex].source}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <p className="text-white text-xl mt-4">{galleryItems[currentIndex].title}</p>
          </div>
          
          <button 
            onClick={() => navigate('next')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 transition-colors"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};