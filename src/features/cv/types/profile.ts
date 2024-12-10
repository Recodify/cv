import { ReactNode } from 'react';

export type ConnectionType = 'email' | 'phone' | 'location' | 'linkedin' | 'github' | 'stackoverflow';

export interface Connection {
  type: ConnectionType;
  icon: ReactNode;
  text: string;
  href?: string;
}

export interface ProfileProps {
  name: string;
  title: string;
  connections: Connection[];
}