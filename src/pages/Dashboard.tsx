import { Card } from "@/components/ui/Card";
import { ArrowRight, Briefcase, Users, Code, Cpu, Download, FolderKanban } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Dashboard() {
  const stats = [
    { label: "Projects Completed", value: "15+", icon: Briefcase, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Happy Clients", value: "14+", icon: Users, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Years Experience", value: "03+", icon: Code, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "IoT Projects", value: "09+", icon: Cpu, color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium mb-4 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for work
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Hello, I'm <br/> Nirmal Gaihre
            </h1>
            <p className="text-indigo-100 text-lg mb-8 max-w-lg">
              Full Stack Web Developer & IoT Enthusiast based in Kathmandu. 
              Building digital products, brands, and experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors shadow-lg shadow-black/10 flex items-center gap-2"
              >
                Hire Me <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="px-6 py-3 bg-indigo-800/50 text-white rounded-xl font-semibold hover:bg-indigo-800/70 transition-colors border border-white/10 flex items-center gap-2 backdrop-blur-sm">
                <Download className="w-4 h-4" /> Download CV
              </button>
            </div>
          </div>
        </Card>

        <Card className="flex flex-col items-center justify-center text-center p-8">
          <div className="relative mb-6 group">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
              src="https://nirmalgaihre.com.np/images/nirmalgaihre.jpg" 
              alt="Nirmal Gaihre" 
              className="w-40 h-40 rounded-full object-cover border-4 border-white dark:border-zinc-800 shadow-xl relative z-10"
            />
            <div className="absolute bottom-2 right-2 w-8 h-8 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-lg z-20 border border-zinc-100 dark:border-zinc-700">
              <span className="text-xl">🇳🇵</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">Nirmal Gaihre</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-6">Full Stack Developer</p>
          
          <div className="w-full grid grid-cols-3 gap-4 border-t border-zinc-100 dark:border-zinc-800 pt-6">
            <div>
              <p className="text-xl font-bold text-zinc-900 dark:text-white">15+</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Projects</p>
            </div>
            <div className="border-x border-zinc-100 dark:border-zinc-800">
              <p className="text-xl font-bold text-zinc-900 dark:text-white">14+</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Clients</p>
            </div>
            <div>
              <p className="text-xl font-bold text-zinc-900 dark:text-white">3+</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Years</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} hoverEffect className="flex items-center gap-4 p-5">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", stat.bg, stat.color)}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Activity / Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-0 overflow-hidden">
          <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
            <h3 className="font-bold text-lg">Recent Projects</h3>
            <Link to="/projects" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">View All</Link>
          </div>
          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {[
              { name: "College Website", type: "Web Development", status: "Completed" },
              { name: "Tech Portal", type: "Web Application", status: "In Progress" },
              { name: "Garage Management", type: "SaaS Product", status: "Completed" },
            ].map((project, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                    <FolderKanban className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-white">{project.name}</p>
                    <p className="text-xs text-zinc-500">{project.type}</p>
                  </div>
                </div>
                <span className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-medium",
                  project.status === "Completed" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                )}>
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-0 overflow-hidden">
          <div className="p-6 border-b border-zinc-100 dark:border-zinc-800">
            <h3 className="font-bold text-lg">My Expertise</h3>
          </div>
          <div className="p-6 space-y-5">
            {[
              { skill: "React / Next.js", level: 90 },
              { skill: "Node.js / Express", level: 85 },
              { skill: "UI / UX Design", level: 80 },
              { skill: "Database Management", level: 75 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">{item.skill}</span>
                  <span className="text-zinc-500">{item.level}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 rounded-full" 
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
