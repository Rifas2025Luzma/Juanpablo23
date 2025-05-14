import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg")',
          filter: 'brightness(0.4)'
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white text-center md:text-left md:max-w-3xl lg:max-w-4xl">
        <div className="animate-fadeIn mt-20 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Juan Pablo <span className="text-gold-400">Alzate</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 md:mb-8">
            Mediocampista <span className="px-2">•</span> Bogotá, Colombia <span className="px-2">•</span> Talento Emergente
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 md:mb-10 max-w-2xl md:mx-0">
            Mediocampista versátil de 17 años con experiencia en clubes locales.
            Combino creatividad con capacidad de recuperación, buscando el próximo paso en mi carrera profesional.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gold-500 hover:bg-gold-600 text-blue-900 font-medium rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contáctame
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#about" 
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white hover:border-gold-400 hover:text-gold-400 font-medium rounded-full transition-all duration-300"
            >
              Conoce Más
            </a>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-16">
          {[
            { label: 'Torneos Ganados', value: '8' },
            { label: 'Goleador', value: '2x' },
            { label: 'Clubes', value: '3' },
            { label: 'Experiencia', value: '10+ años' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-blue-900 bg-opacity-70 backdrop-blur-sm rounded-lg p-4 transform transition-transform hover:scale-105"
            >
              <p className="text-3xl md:text-4xl font-bold text-gold-400">{stat.value}</p>
              <p className="text-sm md:text-base text-white opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gold-400 rounded-full opacity-75"></div>
      </div>
    </section>
  );
};