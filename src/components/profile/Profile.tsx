import ConnectionList from './ConnectionList';
import { connection as connections } from '../../data/connections';

export default function Profile() {
  return (
    <div className="space-y-8 p-8 profile-section">
      <div>
        <h1 className="me font-bold text-highlight">Sam Shiles</h1>
        <h2 className="text-xl text-accent mt-2">
          CTO // ARCHITECT // DEVELOPER // EXITED FOUNDER
        </h2>
      </div>
      <ConnectionList items={connections} />
    </div>
  );
};