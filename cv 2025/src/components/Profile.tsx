import React from 'react';
import { UserCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const Profile: React.FC = () => {
  return (
    <section className="mb-10 animate-slideUp">
      <SectionTitle icon={<UserCircle />} title="Perfil Profesional" />
      
      <div className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-blue-600 dark:first-letter:text-blue-400 first-letter:mr-1 first-letter:float-left">
          Desarrollador de software por profesión y pasión, especializado en desarrollo full-stack 
          con gran enfoque en frontend e interfaces atractivas, funcionales y accesibles. Domino 
          diversos lenguajes de programación, frameworks y librerías modernas. Cuento con formación 
          y experiencia práctica en diseño UI/UX, desarrollo de proyectos web, IoT, soluciones en 
          la nube, microservicios, así como herramientas de gestión y diseño. Actualmente trabajo 
          en Iroute Solutions y estoy cursando una Maestría en Análisis y Visualización de Datos 
          en la Universidad Internacional de La Rioja (UNIR), donde potencio mis habilidades en el 
          manejo estratégico de la información.
        </p>
      </div>
    </section>
  );
};

export default Profile;