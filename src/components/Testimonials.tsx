import React, { useState } from 'react';
import { Quote } from 'lucide-react';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "El crecimiento de Juan Pablo en estos últimos dos años ha sido impresionante. Su capacidad técnica, compromiso y visión dentro del campo lo convierten en un jugador clave. Está preparado para dar el siguiente gran paso.",
      name: "Antonio García",
      role: "Director de Academia",
      image: "https://images.pexels.com/photos/5792630/pexels-photo-5792630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "Juan Pablo tiene una mentalidad ganadora. Su constancia en los entrenamientos, su liderazgo silencioso y su inteligencia táctica hacen que marque la diferencia en cada partido.",
      name: "Marcelo Ruiz",
      role: "Entrenador Principal",
      image: "https://images.pexels.com/photos/6180740/pexels-photo-6180740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "Lo que más destaca de Juan Pablo es su madurez para tomar decisiones bajo presión. Siempre busca aprender, escucha consejos y trabaja con humildad. Tiene todo para llegar lejos.",
      name: "Claudia Fernández",
      role: "Preparadora Física",
      image: "https://images.pexels.com/photos/7946440/pexels-photo-7946440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "Desde que llegó a la academia ha sido un ejemplo. Su disciplina, respeto y pasión por mejorar inspiran al resto del equipo. Juan Pablo es sin duda un talento en ascenso.",
      name: "Luis Ortega",
      role: "Captador de Talentos",
      image: "https://images.pexels.com/photos/6866435/pexels-photo-6866435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            <span className="text-gold-500">Lo Que Dicen</span> de Mí
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Opiniones de entrenadores y profesionales que han sido testigos de mi desarrollo como jugador.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Large quote icon */}
          <div className="absolute -left-4 -top-4 opacity-10 transform scale-150 z-0">
            <Quote size={120} className="text-blue-900" />
          </div>

          {/* Testimonial carousel */}
          <div className="relative z-10">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 mb-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 shrink-0 overflow-hidden rounded-full border-4 border-gold-400">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-blue-900 text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-gold-500">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-gold-500 w-8' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="absolute -bottom-4 md:bottom-auto md:top-1/2 w-full flex justify-between md:transform md:-translate-y-1/2">
              <button
                onClick={prevTestimonial}
                className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition-colors focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition-colors focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};