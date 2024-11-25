import { skills } from '../../data/skills';
import { recentRoles, previousRoles } from '../../data/roles';
import AboutMe from '../aboutme/AboutMe';
import Profile from '../profile/Profile';

function toTitleCase(str: string) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

export default function PlainTextCV() {
    return (
        <div className="w-full max-w-4xl mx-auto bg-white p-8 space-y-8 theme-plain">
            {/* Header */}
            <div className="space-y-4 text-left">
                <Profile />
            </div>

            {/* About Me */}
            <section className="space-y-4">
                <AboutMe />
            </section>

            {/* Experience */}
            <section className="space-y-6">
                <h2 className="text-xl font-bold underline">Experience</h2>
                {recentRoles.map(role => (
                    <article
                        key={role.id}
                        className={[
                            'print:break-inside-avoid',
                            role.printBreak?.plain && 'print:break-margin',
                            'mb-6'
                        ].filter(Boolean).join(' ')}
                    >
                        <div className="space-y-2">
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
                    </article>
                ))}
            </section>

            {/* Skills Sections */}
            {skills.map(group => (
                <section key={group.category} className="space-y-2">
                    <h2 className="text-lg font-bold underline">{toTitleCase(group.title)}</h2>
                    {group.subGroups ? (
                        <div className="space-y-2">
                            {group.subGroups.map(subGroup => (
                                <div key={subGroup.title} className="space-y-2">
                                    <h3 className="font-semibold">{toTitleCase(subGroup.title)}</h3>
                                    <p>{subGroup.skills.map(skill => skill.name).join(', ')}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>{group.skills?.map(skill => skill.name).join(', ')}</p>
                    )}
                </section>
            ))}

            {/* Previous Experience */}
            <section>
                <h2 className="text-xl font-bold py-4 underline">Previous Experience</h2>
                <div className="space-y-2">
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