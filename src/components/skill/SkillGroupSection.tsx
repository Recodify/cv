import { SkillGroup } from "@/types/skills";
import SkillItem from "./SkillItem";

export default function SkillGroupSection({ title, skills, subGroups, forcePageBreak }: Readonly<Omit<SkillGroup, 'category'>>) {
  if (subGroups) {
    return (
      <div className={`${forcePageBreak ? 'print:breakbefore' : 'print:nobreak'}`}>
        <div className="space-y-6 ">
          <div className="bg-yellow-400 h-8">
            <div className="flex items-center justify-center gap-3 text-slate-900 h-full">
              <h3 className="font-semibold uppercase tracking-wider text-2xl leading-none">
                {title}
              </h3>
            </div>
          </div>
          <div className="space-y-10">
            {subGroups.map((subGroup) => (
              <div key={subGroup.title} className="space-y-3">
                <h4 className="text-yellow-400 font-semibold text-sm uppercase tracking-wider pl-6 print:pl-0">
                  {subGroup.title}
                </h4>
                <div className="grid grid-cols-2 gap-y-3 gap-x-0 pl-7 print:pl-6">
                  {subGroup.skills.map((skill) => (
                    <SkillItem key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >
    );
  }

  return (
    <div className={`${forcePageBreak ? 'print:breakbefore' : 'print:nobreak'}`}>
      <div className="space-y-6">
        <div className="bg-yellow-400 h-8">
          <div className="flex items-center justify-center gap-3 text-slate-900 h-full">
            <h3 className="font-semibold uppercase tracking-wider text-2xl leading-none">
              {title}
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-3 gap-x-0 pl-7 print:pl-5">
          {skills?.map((skill) => (
            <SkillItem key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
