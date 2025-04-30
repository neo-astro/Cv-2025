import React from 'react';
import { Code, Database, TestTube, Briefcase, Palette, Cloud } from 'lucide-react';
import Badge from './Badge';
import SectionTitle from './SectionTitle';

const TechSkills: React.FC = () => {
  const skills = {
    databases: ['SQL Server', 'MongoDB', 'PostgreSQL'],
    testing: ['Postman', 'Selenium'],
    management: ['JIRA'],
    design: ['Figma', 'Lucidchart', 'Canva'],
    cloud: ['Firebase', 'Google Cloud', 'Azure'],
    development: [
      'Angular', 'React', 'Flutter', 'Django', 'DRF', 'FastAPI', 
      'Flask', 'ASP.NET Core', 'Spring Boot'
    ],
    training: [
      'UX Design (Google)', 'Git/GitHub', 'HTML/CSS', 'Python', 
      'JavaScript', 'AWS Cloud (en curso)', 'AZ-900 (en curso)'
    ]
  };

  return (
    <section className="mb-10 animate-slideUp animation-delay-100">
      <SectionTitle icon={<Code />} title="Perfil Tecnológico" />
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Bases de Datos:</h3>
            </div>
            <div>
              {skills.databases.map(skill => (
                <Badge key={skill} label={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TestTube className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Testing:</h3>
            </div>
            <div>
              {skills.testing.map(skill => (
                <Badge key={skill} label={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Gestión:</h3>
            </div>
            <div>
              {skills.management.map(skill => (
                <Badge key={skill} label={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Palette className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Diseño:</h3>
            </div>
            <div>
              {skills.design.map(skill => (
                <Badge key={skill} label={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Nube:</h3>
            </div>
            <div>
              {skills.cloud.map(skill => (
                <Badge key={skill} label={skill} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Front/Back-End:</h3>
            </div>
            <div>
              {skills.development.map(skill => (
                <Badge key={skill} label={skill} />
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Capacitaciones Técnicas:</h3>
            </div>
            <div>
              {skills.training.map(skill => (
                <Badge key={skill} label={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;