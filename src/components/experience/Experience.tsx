import { recentRoles } from '../../data/roles';
import Heading from '../heading/Heading';
import { ExperienceCard } from './ExperienceCard';

export default function Experience() {
  return (
    <div className="print:mt-10">
      <Heading title="EXPERIENCE" />
      <div className="space-y-6 sm:space-y-8 md:space-y-12 print:space-y-3">
        {recentRoles.map(role => (
          <ExperienceCard key={role.id} role={role} />
        ))}
      </div>
    </div>
  );
}