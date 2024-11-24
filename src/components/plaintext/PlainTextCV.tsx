import { SKILL_GROUPS } from '../skill/Skills';
import { EXPERIENCE_ROLES } from '../experience/Experience';
import { PREVIOUS_EXPERIENCE_ROLES } from '../experience/PreviousExperience';
import AboutMe from '../aboutme/AboutMe';

export default function PlainTextCV() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-2xl font-bold">Sam Shiles</h1>
        <p>CTO // ARCHITECT // DEVELOPER // EXITED FOUNDER</p>

        <div className="space-y-1">
          <p>Phone: +44 (0)7551545656</p>
          <p>Email: shilessam@gmail.com</p>
          <p>Location: Bristol, UK</p>
          <p>LinkedIn: mylinkd.in/sam-shiles</p>
          <p>GitHub: github.com/recodify</p>
          <p>Stack Overflow: stk.so/recodify</p>
        </div>
      </header>

      {/* About Me */}
      <section>
        <AboutMe />
      </section>

      {/* Skills Sections */}
      {SKILL_GROUPS.map((group) => (
        <section key={group.category}>
          <h2 className="text-xl font-bold mb-4">{group.title}</h2>
          {group.subGroups ? (
            <div className="space-y-4">
              {group.subGroups.map((subGroup) => (
                <div key={subGroup.title}>
                  <h3 className="font-bold mb-2">{subGroup.title}</h3>
                  <p>{subGroup.skills.map(skill => skill.name).join(', ')}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>{group.skills?.map(skill => skill.name).join(', ')}</p>
          )}
        </section>
      ))}

      {/* Experience */}
      <section>
        <h2 className="text-xl font-bold mb-4">Experience</h2>
        <div className="space-y-6">
          {EXPERIENCE_ROLES.map((role) => (
            <div key={role.id} className="space-y-2">
              <div>
                <h3 className="font-bold">{role.title} | {role.company}</h3>
                <p>{role.period.start} - {role.period.end}</p>
              </div>
              {role.introduction && <p>{role.introduction}</p>}
              {role.technologies && <p>Technologies: {role.technologies.join(', ')}</p>}
              {role.achievements && (
                <ul className="list-disc ml-4">
                  {role.achievements.filter(a => !a.hidden).map((achievement) => (
                    <li key={achievement.id}>
                      {achievement.text.replace(/\{\{|\}\}/g, '')}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Previous Experience */}
      <section>
        <h2 className="text-xl font-bold mb-4">Previous Experience</h2>
        <div className="space-y-2">
          {PREVIOUS_EXPERIENCE_ROLES.map((role) => (
            <div key={role.id}>
              <p>
                <span className="font-bold">{role.title}</span> | {role.company} | {role.period.start} - {role.period.end}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}