import { Card } from "@/components/ui/Card";
import { ExternalLink, Github, FolderKanban } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "College Website",
      category: "Web Development",
      image: "https://concept3d.com/wp-content/uploads/2025/04/Ole-Miss-Website-1024x564.png",
      tech: ["PHP", "MySQL", "Bootstrap"],
      status: "Completed",
    },
    {
      title: "Tech Portal",
      category: "Web Application",
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1708440143/catalog/1539966330102095872/zcgn8dzmruownfkivfym.webp",
      tech: ["React", "Node.js", "MongoDB"],
      status: "In Progress",
    },
    {
      title: "Garage Management",
      category: "Web Application",
      image: "https://sayaaraa.app/sayaaraa_app.png",
      tech: ["Laravel", "Vue.js", "MySQL"],
      status: "Completed",
    },
    {
      title: "Online Admission",
      category: "Web Development",
      image: "https://www.startuniversity.net/img/osa3.jpg",
      tech: ["PHP", "jQuery", "SQL"],
      status: "Completed",
    },
    {
      title: "Pathology Website",
      category: "Web Design",
      image: "https://cdn.shortpixel.ai/spai/w_919+q_lossless+ret_img+to_webp/websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/09/diagnostics-lab-02-social-image.jpg",
      tech: ["WordPress", "Elementor"],
      status: "Completed",
    },
    {
      title: "Logo Design",
      category: "Graphic Design",
      image: "https://res.cloudinary.com/vistaprint/images/w_1000,h_600,c_scale/f_auto,q_auto/v1739399860/ideas-and-advice-prod/en-gb/featured/featured.png?_i=AA",
      tech: ["Illustrator", "Photoshop"],
      status: "Completed",
    },
    {
      title: "Nam Jap Counter",
      category: "Web Application",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/78/7a/f7/787af7e3-e129-b09c-0a3b-2f6e92f20b67/AppIcon-0-0-1x_U007ephone-0-11-0-0-85-220.png/1200x630wa.png",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      status: "Completed",
    },
    {
      title: "AI Podcast",
      category: "Web Application",
      image: "https://framerusercontent.com/images/GWnXJTus4sSO25a7FY9shdBw5lE.png?width=2400&height=1284",
      tech: ["Next.js", "AI APIs", "TypeScript"],
      status: "Completed",
    },
    {
      title: "Simple Todo List",
      category: "Web Application",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*9033jqLdN91zKYu64OLfug.png",
      tech: ["React", "Tailwind CSS", "localStorage"],
      status: "Planned",
    },
    {
      title: "Weather Checker",
      category: "Web Application",
      image: "https://cdn.dribbble.com/userupload/6597880/file/original-9621142c9fec29800b326c094c66fc8c.jpg?resize=752x&vertical=center",
      tech: ["React", "Tailwind CSS", "OpenWeather API"],
      status: "Planned",
    },
    {
      title: "Personal Notes App",
      category: "Web Application",
      image: "https://notable.app/static/images/screenshots/main_mac.png",
      tech: ["React", "localStorage", "Markdown support"],
      status: "In Progress",
    },
    {
      title: "Daily Expense Tracker",
      category: "Web Application",
      image: "https://www.sourcecodester.com/sites/default/files/images/rems/screenshot-2025-04-23-170722.png",
      tech: ["React", "Chart.js", "localStorage"],
      status: "Planned",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Web Application",
    "Web Design",
    "Graphic Design",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Projects
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">
            Showcase of my latest works, experiments, and simple upcoming ideas.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-0 overflow-hidden group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                    <button className="p-2 bg-white rounded-full text-zinc-900 hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-zinc-900 hover:scale-110 transition-transform">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span
                      className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        project.status === "Completed"
                          ? "bg-green-500/90 text-white"
                          : project.status === "In Progress"
                          ? "bg-blue-500/90 text-white"
                          : "bg-amber-500/90 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                    <FolderKanban className="w-3 h-3" />
                    {project.category}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>

                  <div className="mt-auto pt-4 flex flex-wrap gap-2 border-t border-zinc-100 dark:border-zinc-800">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}