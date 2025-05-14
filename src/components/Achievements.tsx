import React from 'react';
import { Trophy, Medal, Star, ArrowUpRight } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      year: '2023',
      title: 'Goleador del Torneo',
      description: 'Máximo goleador en el torneo de Bogotá con destacada participación.',
      icon: <Trophy className="w-6 h-6 text-gold-500" />
    },
    {
      year: '2022',
      title: 'Formación Destacada',
      description: 'Formación en clubes prestigiosos de Bogotá.',
      icon: <Medal className="w-6 h-6 text-gold-500" />
    },
    {
      year: '2021',
      title: 'Capitán del Equipo',
      description: 'Líder del equipo en múltiples torneos locales.',
      icon: <Star className="w-6 h-6 text-gold-500" />
    },
    {
      year: '2020',
      title: 'Campeón Regional',
      description: 'Victoria en el campeonato regional de Bogotá.',
      icon: <Trophy className="w-6 h-6 text-gold-500" />
    }
  ];

  const careerStats = [
    { label: 'Torneos', value: '8', suffix: 'ganados' },
    { label: 'Goleador', value: '2', suffix: 'torneos' },
    { label: 'Clubes', value: '3', suffix: 'profesionales' },
    { label: 'Experiencia', value: '10+', suffix: 'años jugando' }
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Logros y <span className="text-gold-400">Trayectoria</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Destacados momentos de mi carrera que demuestran mi crecimiento y potencial.
          </p>
        </div>

        {/* Timeline of achievements */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="md:flex items-start">
                  <div className="md:w-1/4 text-right mb-4 md:mb-0 md:pr-8 hidden md:block">
                    <span className="inline-block bg-blue-800 text-gold-400 py-1 px-3 rounded-full font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  <div className="absolute left-0 md:left-1/4 transform md:translate-x-[-50%] mt-1">
                    <div className="border-2 border-gold-400 rounded-full bg-blue-900 p-1">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="md:w-3/4 md:pl-8 bg-blue-800 bg-opacity-40 p-4 rounded-lg hover:bg-opacity-60 transition-all">
                    <span className="md:hidden inline-block bg-blue-800 text-gold-400 py-1 px-3 rounded-full font-medium mb-2">
                      {achievement.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white">{achievement.title}</h3>
                    <p className="text-gray-200">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {careerStats.map((stat, index) => (
            <div key={index} className="bg-white text-blue-900 rounded-lg p-6 text-center transform transition-transform hover:scale-105">
              <p className="text-3xl md:text-4xl font-bold text-gold-500">{stat.value}</p>
              <p className="text-sm uppercase font-medium mt-1 mb-2">{stat.label}</p>
              <p className="text-gray-600 text-sm">{stat.suffix}</p>
            </div>
          ))}
        </div>

        {/* Career progression chart */}
        <div className="mt-16 bg-blue-800 rounded-xl p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Trayectoria Deportiva</h3>
            <a href="#gallery" className="flex items-center text-gold-400 hover:text-gold-300 transition-colors">
              <span className="mr-1">Ver Galería</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-900 p-4 rounded-lg">
              <h4 className="font-medium text-gold-400 mb-2">2017-2022</h4>
              <p className="text-lg font-bold mb-1">Formación Alemana</p>
              <p className="text-gray-300 mb-3">Desarrollo Integral</p>
              <div className="flex justify-between text-sm">
                <span>Bogotá</span>
                <span>Colombia</span>
              </div>
            </div>
            <div className="bg-blue-900 p-4 rounded-lg">
              <h4 className="font-medium text-gold-400 mb-2">2023-2024</h4>
              <p className="text-lg font-bold mb-1">Vélez Sarsfield</p>
              <p className="text-gray-300 mb-3">División Juvenil</p>
              <div className="flex justify-between text-sm">
                <span>Bogotá</span>
                <span>Colombia</span>
              </div>
            </div>
            <div className="bg-blue-900 p-4 rounded-lg">
              <h4 className="font-medium text-gold-400 mb-2">2025-Presente</h4>
              <p className="text-lg font-bold mb-1">Quilmes</p>
              <p className="text-gray-300 mb-3">Equipo Principal</p>
              <div className="flex justify-between text-sm">
                <span>Bogotá</span>
                <span>Colombia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};