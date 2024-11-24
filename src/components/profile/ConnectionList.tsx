import React from 'react';
import { Connection } from '../../types/profile';
import ConnectionItem from './ConnectionItem';

interface ConnectionListProps {
  items: Connection[];
  className?: string;
}

export default function ConnectionList({ items, className = "" }: Readonly<ConnectionListProps>) {
  return <div className={`connection-list ${className}`}>
    {items.map((item) => (
      <ConnectionItem key={item.type} {...item} />
    ))}
  </div>
}