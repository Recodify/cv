import React from 'react';
import { Connection } from '../../types/profile';
import ConnectionItem from './ConnectionItem';

interface ConnectionListProps {
  items: Connection[];
  className?: string;
}

export default function ConnectionList({ items, className = "" }: Readonly<ConnectionListProps>) {
  return <div className={`connection-list ${className}`}>
    <div className="grid grid-cols-2 md:grid-cols-1 print:grid-cols-1 gap-y-3 sm:gap-y-4 md:gap-y-5 gap-x-2 text-left">
      {items.map((item) => (
        <ConnectionItem key={item.type} {...item} />
      ))}
    </div>
  </div>
}