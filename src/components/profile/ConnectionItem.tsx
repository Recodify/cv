import React from 'react';
import { Connection } from '../../types/profile';

export default function ConnectionItem({ icon, text, href }: Readonly<Connection>) {
  const content = (
    <div className="flex items-center gap-3 text-gray-200 hover:text-yellow-400 transition-colors">
      <div className="w-5 h-5">{icon}</div>
      <span className="text-sm">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
};
