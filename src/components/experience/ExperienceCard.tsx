import type { ExperienceRole } from '@/types/experience';
import { TechnologyBadge } from './TechnologyBadge';

function formatAchievementText(text: string) {
    return text.split(/(\{\{.*?\}\})/).map((part, idx) => {
        if (part.startsWith('{{') && part.endsWith('}}')) {
            const boldText = part.slice(2, -2);
            return <strong key={`${boldText}}`} className="font-semibold">{boldText}</strong>;
        }
        return <span key={`${part}`}>{part}</span>;
    });
}

export function ExperienceCard({ role }: Readonly<{ role: ExperienceRole; }>) {
    const containerClasses = [
        role.forcePageBreak && 'print:breakbefore',
        role.bumpdown && `print:mt-${role.bumpdown}`
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses}>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <a href={`https://${role.website}`} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 hover:text-yellow-500">
                            <h3 className="font-semibold text-lg">{role.title}</h3>
                            <span>|</span>
                            <span className="text-lg text-yellow-600">{role.company}</span>
                        </a>
                    </div>
                    <div className="text-primary mr-2">{role.period.start} - {role.period.end}</div>
                </div>
            </div>

            <hr hidden={!role.technologies?.length} className="mt-2 mb-4 border-accent" />

            <div hidden={!role.technologies?.length} className="space-y-6">
                <div className="flex flex-wrap gap-2">
                    {role.technologies?.map(tech => (
                        <TechnologyBadge key={`${role.id}-${tech}`} name={tech} />
                    ))}
                </div>
                <p hidden={!role.introduction} className="text-primary">{role.introduction}</p>
                <ul hidden={!role.achievements?.length} className="list-disc text-primary space-y-2 ml-10">
                    {role.achievements?.filter(a => !a.hidden).map(achievement => (
                        <li key={achievement.id}>{formatAchievementText(achievement.text)}</li>
                    ))}
                </ul>
                <hr />
            </div>
        </div>
    );
}