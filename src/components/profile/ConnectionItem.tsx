import React from 'react';
import { Connection } from '../../types/profile';

export default function ConnectionItem({ icon, text, href, type }: Readonly<Connection>) {
  const content = (
    <div className="flex items-center gap-3 text-secondary hover:text-accent transition-colors">
      <div className="w-5 h-5 icon">{icon}</div>
      <div className="hidden connection-type">{type}:</div>
      <span className="text-sm">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
};
