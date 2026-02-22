import { Card } from "@/components/ui/Card";
import { Palette, AppWindow, Code, PenTool, Server, Search, ArrowUpRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Web Design",
      description: "Creating beautiful, user-friendly, and responsive website designs that engage your audience.",
      icon: Palette,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      title: "Web Application",
      description: "Building robust and scalable web applications tailored to your specific business needs.",
      icon: AppWindow,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Web Development",
      description: "Full-stack development using modern technologies to bring your ideas to life.",
      icon: Code,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Branding",
      description: "Crafting unique brand identities, logos, and visual assets that stand out.",
      icon: PenTool,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Hosting Services",
      description: "Reliable and secure hosting solutions to ensure your website is always online.",
      icon: Server,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "SEO",
      description: "Optimizing your website to rank higher on search engines and drive organic traffic.",
      icon: Search,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">My Services</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2">Professional solutions for your digital needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} hoverEffect className="group cursor-pointer h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.bg} ${service.color} transition-transform duration-300 group-hover:scale-110`}>
                <service.icon className="w-7 h-7" />
              </div>
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {service.title}
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
              {service.description}
            </p>
          </Card>
        ))}
      </div>

      <Card className="bg-indigo-600 border-none text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-8">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Have a project in mind?</h3>
          <p className="text-indigo-100 max-w-xl">
            Let's discuss how I can help you achieve your goals with custom web solutions.
          </p>
        </div>
        <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg shadow-black/20 whitespace-nowrap">
          Get a Quote
        </button>
      </Card>
    </div>
  );
}
