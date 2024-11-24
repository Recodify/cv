import { skills } from '../../data/skills';
import { recentRoles, previousRoles } from '../../data/roles';
import AboutMe from '../aboutme/AboutMe';
import Profile from '../profile/Profile';

export default function PlainTextCV() {
    return (
        <div className="w-full max-w-4xl mx-auto bg-white p-8 space-y-8 theme-plain">
            {/* Header */}
            <div className="space-y-4">
                <Profile />
            </div>

            {/* About Me */}
            <section className="space-y-4">
                <AboutMe />
            </section>


            {/* Experience */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">EXPERIENCE</h2>
                <div className="space-y-6">
                    {recentRoles.map(role => (

                        <div key={role.id} className={`space-y-2 ${role.plainForcePageBreak ? 'print:breakbefore' : ''}`}>
                            <div>
                                <h3 className="font-semibold">{role.title} | {role.company}</h3>
                                <p className="text-sm">{role.period.start} - {role.period.end}</p>
                            </div>
                            {role.technologies && (
                                <p className="text-sm">Technologies: {role.technologies.join(', ')}</p>
                            )}
                            {role.introduction && (
                                <p>{role.introduction}</p>
                            )}
                            {role.achievements && (
                                <ul className="list-disc ml-4 space-y-1">
                                    {role.achievements.filter(a => !a.hidden).map(achievement => (
                                        <li key={achievement.id}>{achievement.text.replace(/\{\{|\}\}/g, '')}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Sections */}
            <div className="text-2xl font-bold print:breakbefore">SPECIALISATIONS</div>
            {skills.map(group => (
                <section key={group.category} className="space-y-4">
                    <h2 className="text-xl font-bold">{group.title.toUpperCase()}</h2>
                    {group.subGroups ? (
                        // For technology section with subgroups
                        <div className="space-y-4">
                            {group.subGroups.map(subGroup => (
                                <div key={subGroup.title} className="space-y-2">
                                    <h3 className="font-semibold">{subGroup.title}</h3>
                                    <p>{subGroup.skills.map(skill => skill.name).join(', ')}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // For other sections without subgroups
                        <p>{group.skills?.map(skill => skill.name).join(', ')}</p>
                    )}
                </section>
            ))}

            {/* Previous Experience */}
            <section className="print:breakbefore">
                <h2 className="text-2xl font-bold">PREVIOUS EXPERIENCE</h2>
                <div className="space-y-4">
                    {previousRoles.map(role => (
                        <div key={role.id}>
                            <h3 className="font-semibold">{role.title} | {role.company}</h3>
                            <p className="text-sm">{role.period.start} - {role.period.end}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}