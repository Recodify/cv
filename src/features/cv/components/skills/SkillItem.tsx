import { Skill } from "@/features/cv/types/skills";

export default function SkillItem({ name, icon }: Readonly<Skill>) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 print:gap-1 text-gray-300">
        <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">{icon}</div>
        <span className="text-xs sm:text-sm">{name}</span>
      </div>
    </div>
  );
}
