import { Card } from "@/components/ui/Card";
import {
  ArrowRight,
  Briefcase,
  Users,
  Code,
  Cpu,
  Download,
  FolderKanban,
  Linkedin,
  Github,
  Mail,
  Twitter,
  Globe,
  Star,
  MessageSquare,
  BookOpen,
  Terminal,
  Smartphone,
  Database,
  Layout,
  Server,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Dashboard() {
  const stats = [
    { label: "Projects Completed", value: "15+", icon: Briefcase, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Happy Clients", value: "14+", icon: Users, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Years Experience", value: "03+", icon: Code, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "IoT Projects", value: "09+", icon: Cpu, color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  const techStack = [
    { name: "React / Next.js", icon: Layout, color: "text-cyan-500" },
    { name: "Node.js / Express", icon: Server, color: "text-lime-500" },
    { name: "IoT / Embedded", icon: Cpu, color: "text-amber-500" },
    { name: "Tailwind CSS", icon: Terminal, color: "text-teal-500" },
    { name: "PostgreSQL / MongoDB", icon: Database, color: "text-violet-500" },
    { name: "Mobile Responsive", icon: Smartphone, color: "text-pink-500" },
  ];

  const testimonials = [
    {
      name: "Sujan Shrestha",
      role: "Founder, TechStartup Nepal",
      content: "Nirmal delivered our college management system on time with excellent UI/UX. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Ramesh Karki",
      role: "CTO, Local SaaS Company",
      content: "Great communication and clean code. The IoT dashboard he built is performing flawlessly.",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b84fbe8308?w=100&h=100&fit=crop",
    },
  ];

  const recentPosts = [
    { title: "Building Real-time IoT Dashboards with Next.js", date: "Jan 15, 2026" },
    { title: "Optimizing React Performance in 2026", date: "Dec 28, 2025" },
    { title: "From Idea to MVP – My SaaS Journey", date: "Nov 10, 2025" },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 text-white border-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

          <div className="relative z-10 p-6 md:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium mb-4 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for work
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Hello, I'm <br /> Nirmal Gaihre
            </h1>
            <p className="text-indigo-100 text-lg mb-8 max-w-lg">
              Full Stack Web Developer & IoT Enthusiast based in Kathmandu. Building digital products, brands, and experiences.
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
          <p className="text-zinc-500 dark:text-zinc-400 mb-6">Full Stack Developer & IoT Enthusiast</p>

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
          <Card key={index} hoverEffect className="flex items-center gap-4 p-5 transition-all duration-300 hover:scale-[1.02]">
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

      {/* Tech Stack */}
      <Card className="p-6">
        <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
          <Star className="w-5 h-5 text-indigo-500" /> My Tech Stack
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-colors group"
            >
              <tech.icon className={cn("w-8 h-8", tech.color)} />
              <span className="text-sm font-medium text-center text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Projects & Expertise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-0 overflow-hidden">
          <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
            <h3 className="font-bold text-lg">Recent Projects</h3>
            <Link to="/projects" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {[
              { name: "College Website", type: "Web Development", status: "Completed" },
              { name: "Tech Portal", type: "Web Application", status: "In Progress" },
              { name: "Garage Management", type: "SaaS Product", status: "Completed" },
              { name: "IoT Weather Station", type: "Hardware + Dashboard", status: "Completed" },
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
                <span
                  className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-medium",
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                  )}
                >
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
          <div className="p-6 space-y-6">
            {[
              { skill: "React / Next.js", level: 90 },
              { skill: "Node.js / Express", level: 85 },
              { skill: "UI / UX Design", level: 80 },
              { skill: "Database Management", level: 75 },
              { skill: "IoT & Hardware Integration", level: 82 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-zinc-700 dark:text-zinc-300">{item.skill}</span>
                  <span className="text-zinc-500">{item.level}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" style={{ width: `${item.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Testimonials */}
      <Card className="p-6">
        <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-indigo-500" /> What Clients Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-zinc-500">{t.role}</p>
                </div>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 italic">"{t.content}"</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Posts / Blog Teaser */}
      <Card className="p-6">
        <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-500" /> Recent Writings
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post, i) => (
            <div
              key={i}
              className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-indigo-500/50 transition-colors cursor-pointer"
            >
              <p className="font-medium text-zinc-900 dark:text-white">{post.title}</p>
              <p className="text-sm text-zinc-500 mt-1">{post.date}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-1">
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Card>

      {/* Social & Contact CTA */}
      <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Let's Build Something Great Together</h3>
        <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
          Whether it's a modern web app, IoT solution, or full digital transformation — I'm ready to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-700/50 rounded-full hover:bg-zinc-600 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/nirmal-gaihre" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-700/50 rounded-full hover:bg-zinc-600 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-700/50 rounded-full hover:bg-zinc-600 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="mailto:hello@nirmalgaihre.com.np" className="p-3 bg-zinc-700/50 rounded-full hover:bg-zinc-600 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.nirmalgaihre.com.np" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-700/50 rounded-full hover:bg-zinc-600 transition-colors">
            <Globe className="w-6 h-6" />
          </a>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold transition-colors shadow-lg shadow-indigo-500/20"
        >
          Get in Touch <ArrowRight className="w-5 h-5" />
        </Link>
      </Card>
    </div>
  );
}