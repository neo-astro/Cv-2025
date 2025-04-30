import React from 'react';

interface BadgeProps {
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span 
      className="inline-block px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 
      text-blue-800 dark:text-blue-300 m-1 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5
      border border-blue-200 dark:border-blue-800"
    >
      {label}
    </span>
  );
};

export default Badge;