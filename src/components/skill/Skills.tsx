import SkillGroupSection from "./SkillGroupSection";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <div className="space-y-2 pb-2 md:space-y-12 print:space-y-5 mt-4 md:mt-8">
      {skills.map((group) => (
        <SkillGroupSection
          key={group.category}
          title={group.title}
          skills={group.skills}
          forcePageBreak={group.forcePageBreak}
          subGroups={group.subGroups}
        />
      ))}
    </div>
  );
}