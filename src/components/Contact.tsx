import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `https://wa.me/573134015927?text=Hola Juan Pablo, me interesa contactarte. Mi nombre es ${formState.name} de ${formState.organization}. ${formState.message}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contacta <span className="text-gold-400">Conmigo</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ¿Interesado en discutir oportunidades? Completa el formulario y me pondré en contacto contigo rápidamente.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white text-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-blue-900">Envíame un Mensaje</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Tu Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="organization" className="block text-gray-700 font-medium mb-2">
                  Club/Organización
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formState.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-blue-900 text-white font-medium flex items-center justify-center hover:bg-blue-800"
              >
                <span className="inline-flex items-center">
                  <Send size={18} className="mr-2" />
                  Contactar por WhatsApp
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-6">
            <h3 className="text-2xl font-bold mb-8 text-gold-400">Información de Contacto</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-blue-800 p-3 rounded-full mr-4">
                  <Phone className="text-gold-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">WhatsApp</h4>
                  <p className="text-gray-300">+57 313 401 5927</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-800 p-3 rounded-full mr-4">
                  <MapPin className="text-gold-400" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Ubicación</h4>
                  <p className="text-gray-300">Bogotá, Colombia</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-800 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-gold-400">Disponible Para</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
                  <span>Contratos profesionales</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
                  <span>Pruebas con clubes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
                  <span>Oportunidades en academias</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gold-400 rounded-full mr-2"></span>
                  <span>Selección nacional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};