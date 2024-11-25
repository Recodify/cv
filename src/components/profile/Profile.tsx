import ConnectionList from './ConnectionList';
import { connection as connections } from '../../data/connections';

export default function Profile() {
  return (
    <div className="space-y-4 profile-section">
      <div className="text-center md:text-left">
        <h1 className="me font-bold text-highlight text-3xl md:text-4xl">Sam Shiles</h1>
        <h2 className="text-lg md:text-xl text-accent mt-2">
          CTO // ARCHITECT // DEVELOPER // EXITED FOUNDER
        </h2>
      </div>
      <ConnectionList items={connections} className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-0 md:flex-col" />
    </div>
  );
};