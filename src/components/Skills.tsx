import React from 'react';

type Skill = {
  name: string;
  percentage: number;
  color: string;
};

const skillCategories = [
  {
    title: 'Habilidades Técnicas',
    skills: [
      { name: 'Control de Balón', percentage: 92, color: 'bg-blue-600' },
      { name: 'Pases', percentage: 88, color: 'bg-blue-600' },
      { name: 'Tiro', percentage: 85, color: 'bg-blue-600' },
      { name: 'Regate', percentage: 90, color: 'bg-blue-600' },
    ]
  },
  {
    title: 'Atributos Físicos',
    skills: [
      { name: 'Velocidad', percentage: 82, color: 'bg-gold-500' },
      { name: 'Resistencia', percentage: 78, color: 'bg-gold-500' },
      { name: 'Fuerza', percentage: 75, color: 'bg-gold-500' },
      { name: 'Agilidad', percentage: 86, color: 'bg-gold-500' },
    ]
  },
  {
    title: 'Atributos Mentales',
    skills: [
      { name: 'Visión de Juego', percentage: 89, color: 'bg-green-600' },
      { name: 'Toma de Decisiones', percentage: 84, color: 'bg-green-600' },
      { name: 'Posicionamiento', percentage: 86, color: 'bg-green-600' },
      { name: 'Liderazgo', percentage: 80, color: 'bg-green-600' },
    ]
  }
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-gray-600 font-semibold">{skill.percentage}%</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full ${skill.color} rounded-full`} 
          style={{ width: `${skill.percentage}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            Mis <span className="text-gold-500">Habilidades</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un análisis detallado de mis capacidades en el campo, destacando mis fortalezas como mediocampista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-blue-900 border-b pb-2">{category.title}</h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Atributos Clave */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-blue-900">Características Principales</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Creación de Juego',
                description: 'Capacidad para crear oportunidades con pases precisos y visión táctica.',
                icon: '👁️‍🗨️'
              },
              {
                title: 'Inteligencia Táctica',
                description: 'Lectura del juego y toma de decisiones bajo presión.',
                icon: '🧠'
              },
              {
                title: 'Control Técnico',
                description: 'Excelente primer toque y control en espacios reducidos.',
                icon: '👟'
              },
              {
                title: 'Tiros Libres',
                description: 'Especialista en tiros libres y corners.',
                icon: '🎯'
              }
            ].map((attribute, index) => (
              <div 
                key={index} 
                className="bg-blue-900 text-white rounded-xl p-6 transform transition-transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{attribute.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-gold-400">{attribute.title}</h4>
                <p className="text-gray-200">{attribute.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};