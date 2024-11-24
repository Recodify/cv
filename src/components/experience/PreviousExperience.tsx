import React from 'react';
import type { ExperienceRole } from '../../types/experience';
import Heading from '../heading/Heading';
import { ExperienceCard } from './ExperienceCard';
import { PreviousExperienceCard } from './PreviousExperienceCard';

export const PREVIOUS_EXPERIENCE_ROLES: ExperienceRole[] = [
    {
      id: 'inty-2012',
      title: "Senior Developer",
      company: "intY",
      website: "inty.com",
      period: {
        start: "Oct 2012",
        end: "Aug 2013"
      }
    },
    {
      id: 'gocompare-2012',
      title: "Senior Developer",
      company: "GoCompare",
      website: "gocompare.com",
      period: {
        start: "Feb 2012",
        end: "Oct 2012"
      }
    },
    {
      id: 'inty-2011',
      title: "Senior Developer",
      company: "intY",
      website: "inty.com",
      period: {
        start: "May 2011",
        end: "Feb 2012"
      }
    },
    {
      id: 'fujitsu-2010',
      title: "Developer",
      company: "Fujitsu",
      website: "fujitsu.com",
      period: {
        start: "Jun 2010",
        end: "Jan 2011"
      }
    },
    {
      id: 'tribal-2008',
      title: "Developer",
      company: "Tribal Group",
      website: "tribalgroup.com",
      period: {
        start: "Apr 2008",
        end: "Feb 2010"
      }
    },
    {
      id: 'grafton-2006',
      title: "Developer & Sys Admin",
      company: "Grafton",
      website: "graftonplc.com",
      period: {
        start: "Jun 2006",
        end: "Apr 2008"
      }
    },
    {
      id: 'logica-2004',
      title: "3rd Line Support",
      company: "Logica (now a CGI Group company)",
      website: "cgi.com",
      period: {
        start: "Nov 2004",
        end: "Jun 2006"
      }
    },
    {
      id: 'tresco-2003',
      title: "Web Developer",
      company: "Tresco Estate",
      website: "tresco.co.uk",
      period: {
        start: "Mar 2003",
        end: "Nov 2004"
      }
    },
    {
      id: 'ford-2001',
      title: "Sys/Network Admin",
      company: "Ford Group (dissolved)",
      period: {
        start: "Jan 2001",
        end: "Mar 2003"
      }
    }
];

export default function PreviousExperience() {
  return (
    <div>
      <Heading title="PREVIOUS EXPERIENCE" />
      <div className="space-y-2">
        {PREVIOUS_EXPERIENCE_ROLES.map(role => (
          <PreviousExperienceCard key={role.id} role={role} />
        ))}
      </div>
    </div>
  );
}