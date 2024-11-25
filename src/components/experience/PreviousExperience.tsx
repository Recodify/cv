
import Heading from '../heading/Heading';
import { PreviousExperienceCard } from './PreviousExperienceCard';
import { previousRoles } from '../../data/roles';

export default function PreviousExperience() {
  return (
    <div className="print:break-inside-avoid print:break-margin">
      <Heading title="PREVIOUS EXPERIENCE" />
      <div className="space-y-2">
        {previousRoles.map(role => (
          <PreviousExperienceCard key={role.id} role={role} />
        ))}
      </div>
    </div>
  );
}