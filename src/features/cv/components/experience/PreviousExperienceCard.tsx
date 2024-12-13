import type { ExperienceRole } from '@/features/cv/types/experience';

export function PreviousExperienceCard({ role }: Readonly<{ role: ExperienceRole; }>) {
    return (
        <div className="space-y-4 print:break-inside-avoid ml-2">
            <div className="flex flex-col md:flex-row print:flex-row md:items-center print:items-center gap-1">
                <div className="flex-1">
                    {role.website ? (
                        <a href={`https://${role.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 hover:text-yellow-600">
                            <h3 className=" text-slate-800 text-base">{role.title}</h3>
                            <span>|</span>
                            <span className="text-yellow-600">{role.company}</span>
                        </a>
                    ) : (
                    <div className="inline-flex items-center gap-2">
                            <h3 className=" text-slate-800 text-base">{role.title}</h3>
                            <span>|</span>
                            <span className="text-yellow-600 hover:text-yellow-500">{role.company}</span>
                        </div>
                    )}
                </div>
                <div className="text-slate-600 text-sm md:text-base print:text-sm ">
                    {role.period.start} - {role.period.end}
                </div>
            </div>
        </div>
    );
}
