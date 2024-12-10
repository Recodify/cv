import React from 'react';
import { Connection } from '../../types/profile';

export default function ConnectionItem({ icon, text, href, type }: Readonly<Connection>) {
  const content = (
    <div className="flex items-center gap-1 sm:gap-2 md:gap-3 text-secondary hover:text-accent transition-colors pr-2">
      <div className="w-4 sm:w-5 h-4 sm:h-5 icon flex-shrink-0 flex items-center justify-center">
        {icon}
      </div>
      <div className="hidden connection-type">{type}:</div>
      <span className="text-xs sm:text-sm">
        <span className="hidden theme-plain:inline">
          {href && (type === 'linkedin' || type === 'stackoverflow' || type === 'github') ? 'https://' : ''}
        </span>
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
};

