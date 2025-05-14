import React from 'react';
import { Calendar, Flag, Award, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Player Image */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Juan Pablo Alzate"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white py-3 px-6 rounded-lg shadow-lg">
                <span className="block text-2xl font-bold">#8</span>
                <span className="text-sm text-gold-400">Mediocampista</span>
              </div>
            </div>
          </div>

          {/* Player Bio */}
          <div className="w-full md:w-1/2 lg:w-7/12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">
              Sobre <span className="text-gold-500">Mí</span>
            </h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Soy Juan Pablo Alzate, un mediocampista de 17 años conocido por mi versatilidad en el campo. 
              Mi experiencia en clubes como Vélez Sarsfield y Quilmes me ha permitido desarrollar tanto 
              habilidades creativas como defensivas.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              Mi estilo de juego combina visión táctica con capacidad técnica. Destaco tanto en la 
              creación de juego como en la recuperación del balón. Mi formación en la escuela alemana 
              de fútbol me ha dado una base sólida en disciplina y técnica.
            </p>

            {/* Player Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="text-gold-500 mr-3" size={20} />
                <div>
                  <span className="block text-sm text-gray-500">Fecha de Nacimiento</span>
                  <span className="font-medium text-gray-800">2007</span>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-gold-500 mr-3" size={20} />
                <div>
                  <span className="block text-sm text-gray-500">Ciudad</span>
                  <span className="font-medium text-gray-800">Bogotá, Colombia</span>
                </div>
              </div>
              <div className="flex items-center">
                <Flag className="text-gold-500 mr-3" size={20} />
                <div>
                  <span className="block text-sm text-gray-500">Club Actual</span>
                  <span className="font-medium text-gray-800">Formación Alemana de Fútbol</span>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="text-gold-500 mr-3" size={20} />
                <div>
                  <span className="block text-sm text-gray-500">Posición</span>
                  <span className="font-medium text-gray-800">Mediocampista</span>
                </div>
              </div>
            </div>

            <a 
              href="#skills" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Ver Mis Habilidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};