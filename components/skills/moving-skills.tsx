"use client";

import { motion } from "framer-motion";
import { skillsUnsorted, skillsInterface } from "@/config/skills"; 

// interface SkillsCardProps {
//   skills: skillsInterface[];
// }

const SkillItem = ({ skill }: { skill: skillsInterface }) => {
  const Icon = skill.icon;
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-secondary/10 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary/20">
      <Icon className="h-5 w-5" />
      <span className="whitespace-nowrap">{skill.name}</span>
    </div>
  );
};

export default function MovingSkills() {
  
  const halfLength = Math.ceil(skillsUnsorted.length / 2);
  const firstRow = skillsUnsorted.slice(0, halfLength);
  const secondRow = skillsUnsorted.slice(halfLength);

  return (
    <div className="w-full overflow-hidden py-10 space-y-6 relative">
    

      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <motion.div
          className="flex flex-nowrap gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 50,
            repeat: Infinity,
          }}
        >
          {[...firstRow, ...firstRow].map((skill, index) => (
            <SkillItem key={`row1-${index}`} skill={skill} />
          ))}
        </motion.div>
      </div>

      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <motion.div
          className="flex flex-nowrap gap-6"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 50,
            repeat: Infinity,
          }}
        >
          {[...secondRow, ...secondRow].map((skill, index) => (
            <SkillItem key={`row2-${index}`} skill={skill} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}