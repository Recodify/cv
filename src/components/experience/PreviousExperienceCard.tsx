import type { ExperienceRole } from '@/types/experience';

export function PreviousExperienceCard({ role }: Readonly<{ role: ExperienceRole; }>) {
    return (
        <div className="space-y-4">
            {/* Header - all in one line */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {role.website ? (
                        <a href={`https://${role.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-yellow-600">
                            <h3 className="font-semibold text-slate-800 text-lg ">{role.title}</h3>
                            <span>|</span>
                            <span className="text-yellow-600">{role.company}</span>
                        </a>
                    ) : (
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-slate-800 text-lg ">{role.title}</h3>
                            <span>|</span>
                            <span className="text-yellow-600">{role.company}</span>
                        </div>
                    )}
                </div>
                <div className="text-slate-500 mr-2">
                    {role.period.start} - {role.period.end}
                </div>
            </div>
        </div>
    );
}
