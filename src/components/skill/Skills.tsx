import SkillGroupSection from "./SkillGroupSection";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <div className="space-y-24 print:space-y-5 mt-8">
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