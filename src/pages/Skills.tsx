import { Card } from "@/components/ui/Card";
import { motion } from "motion/react";

export function Skills() {
  const skills = [
    { name: "HTML", level: 98, color: "bg-orange-500" },
    { name: "CSS", level: 95, color: "bg-blue-500" },
    { name: "PHP", level: 92, color: "bg-purple-500" },
    { name: "SQL", level: 95, color: "bg-indigo-500" },
    { name: "WordPress", level: 83, color: "bg-cyan-500" },
    { name: "jQuery", level: 68, color: "bg-yellow-500" },
    { name: "Python", level: 63, color: "bg-green-500" },
    { name: "SEO", level: 76, color: "bg-red-500" },
    { name: "React", level: 90, color: "bg-blue-400", highlight: true },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Technical Skills</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">My proficiency in various technologies and tools.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card 
            key={index} 
            hoverEffect 
            className={`relative overflow-hidden ${skill.highlight ? 'border-indigo-500/50 shadow-indigo-500/10' : ''}`}
          >
            {skill.highlight && (
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-bl-lg">
                Top Skill
              </div>
            )}
            
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">{skill.name}</h3>
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">{skill.level}%</span>
            </div>
            
            <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                className={`h-full rounded-full ${skill.color}`}
              ></motion.div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card>
          <h3 className="text-xl font-bold mb-6">Backend Proficiency</h3>
          <div className="flex flex-wrap gap-4 justify-center py-8">
            {/* Circular Progress Example */}
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle className="text-zinc-100 dark:text-zinc-800 stroke-current" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent"></circle>
                <motion.circle 
                  className="text-indigo-600 stroke-current" 
                  strokeWidth="10" 
                  strokeLinecap="round" 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="transparent" 
                  strokeDasharray="251.2" 
                  strokeDashoffset="251.2"
                  animate={{ strokeDashoffset: 251.2 - (251.2 * 0.92) }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  transform="rotate(-90 50 50)"
                ></motion.circle>
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">92%</span>
                <span className="text-xs text-zinc-500">PHP/Node</span>
              </div>
            </div>

            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle className="text-zinc-100 dark:text-zinc-800 stroke-current" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent"></circle>
                <motion.circle 
                  className="text-green-500 stroke-current" 
                  strokeWidth="10" 
                  strokeLinecap="round" 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="transparent" 
                  strokeDasharray="251.2" 
                  strokeDashoffset="251.2"
                  animate={{ strokeDashoffset: 251.2 - (251.2 * 0.95) }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                  transform="rotate(-90 50 50)"
                ></motion.circle>
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">95%</span>
                <span className="text-xs text-zinc-500">SQL</span>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-xl font-bold mb-6">Other Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["Git", "GitHub", "Docker", "AWS", "Linux", "Figma", "Adobe XD", "Photoshop", "Illustrator", "Postman", "REST API", "GraphQL", "WebSockets", "IoT", "Arduino", "Raspberry Pi"].map((tag, i) => (
              <span 
                key={i} 
                className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
