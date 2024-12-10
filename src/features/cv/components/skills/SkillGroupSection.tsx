import { SkillGroup } from "@/features/cv/types/skills";
import SkillItem from "./SkillItem";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SkillGroupSection({ title, skills, subGroups, forcePageBreak }: Readonly<Omit<SkillGroup, 'category'>>) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  const headerContent = (
    <>
      <h3 className="font-semibold uppercase tracking-wider text-sm sm:text-xl md:text-2xl leading-none text-slate-900 text-center w-full">
        {title}
      </h3>
      <div className="md:hidden print:hidden text-slate-900 absolute right-4">
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
    </>
  );

  if (subGroups) {
    return (
      <div className={`${forcePageBreak ? 'print:breakbefore' : 'print:nobreak'}`}>
        <div className="space-y-6">
          <button
            onClick={toggleSection}
            className="w-full bg-yellow-400 h-8 md:h-10 flex items-center justify-between px-4 md:cursor-default relative"
          >
            {headerContent}
          </button>
          <div className={`space-y-4 sm:space-y-10 pb-4 ${!isExpanded ? 'hidden md:block print:block' : ''}`}>
            {subGroups.map((subGroup) => (
              <div key={subGroup.title} className="space-y-2 sm:space-y-3 pb-2">
                <h4 className="text-yellow-400 font-semibold text-xs sm:text-sm uppercase tracking-wider pl-4 md:pl-6 print:pl-0">
                  {subGroup.title}
                </h4>
                <div className="grid grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-4 px-8 md:px-6 print:pl-6">
                  {subGroup.skills.map((skill) => (
                    <SkillItem key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${forcePageBreak ? 'print:breakbefore' : 'print:nobreak'}`}>
      <div className="space-y-6">
        <button
          onClick={toggleSection}
          className="w-full bg-yellow-400 h-8 md:h-10 flex items-center justify-between px-4 md:cursor-default relative"
        >
          {headerContent}
        </button>
        <div className={`pb-4 ${!isExpanded ? 'hidden md:block print:block' : ''}`}>
          <div className="grid grid-cols-2 gap-y-2 sm:gap-y-3 gap-x-4 px-8 md:px-4 print:pl-4">
            {skills?.map((skill) => (
              <SkillItem key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
