import React from 'react';
import { User, Mail, Phone, MapPin, Download, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="relative mb-8">
      {/* Background gradient decoration */}
      <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-br from-blue-500/20 to-teal-400/20 rounded-b-full blur-3xl -z-10 transform -translate-y-1/2"></div>
      
      <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-center">
        <div className="space-y-4 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Adrián Esteban Abril Pesántez
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"></div>
          <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
            Desarrollador Full-Stack | UI/UX | Ciberseguridad
          </p>
        </div>
        
        <div className="flex flex-col gap-2 md:items-end">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <a href="mailto:estevanabril@hotmail.es" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              estevanabril@hotmail.es
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <a href="tel:+593987571164" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              +593 987571164
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300">Milagro, Ecuador</span>
          </div>
          
          <div className="mt-4 flex gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? 
                <Sun className="h-5 w-5 text-yellow-500" /> : 
                <Moon className="h-5 w-5 text-blue-600" />
              }
            </button>
            <button 
              className="flex items-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
              onClick={() => window.print()}
            >
              <Download className="h-4 w-4" />
              <span>Descargar CV</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;