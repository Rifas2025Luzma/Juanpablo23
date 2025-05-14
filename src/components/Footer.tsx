import React from 'react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-gold-400">CF</span>
              <span className="ml-1">10</span>
            </h3>
            <p className="max-w-md text-gray-400 mb-6">
              Young, talented footballer from Madrid with exceptional technical abilities and game intelligence.
              Looking for the next step in my professional career.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-400">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
                <li><a href="#achievements" className="text-gray-400 hover:text-white transition-colors">Achievements</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-400">More</h4>
              <ul className="space-y-2">
                <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press Kit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-400">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Carlos Fernandez. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Designed by <a href="#" className="text-gold-400 hover:text-gold-300">Web Design Professionals</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};