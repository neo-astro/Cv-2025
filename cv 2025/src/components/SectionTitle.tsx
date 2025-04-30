import React, { ReactNode } from 'react';

interface SectionTitleProps {
  icon: ReactNode;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="text-blue-600 dark:text-blue-400">{icon}</div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
      <div className="h-px flex-grow bg-gradient-to-r from-blue-600 via-teal-500 to-transparent"></div>
    </div>
  );
};

export default SectionTitle;