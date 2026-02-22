import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, BrainCircuit, Briefcase, FolderKanban, Mail, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: BrainCircuit, label: 'Skills', path: '/skills' },
  { icon: Briefcase, label: 'Services', path: '/services' },
  { icon: FolderKanban, label: 'Projects', path: '/projects' },
  { icon: Mail, label: 'Contact', path: '/contact' },
];

export function Sidebar() {
  return (
    <motion.aside 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="hidden md:flex flex-col w-64 h-screen bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-r border-zinc-200 dark:border-zinc-800 p-6 fixed left-0 top-0 z-50"
    >
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30">
          N
        </div>
        <div>
          <h1 className="font-bold text-zinc-900 dark:text-white text-lg leading-tight">Nirmal Gaihre</h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Full Stack Developer</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                isActive 
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20" 
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-white"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-zinc-500 dark:text-zinc-400 hover:bg-red-50 dark:hover:bg-red-900/10 hover:text-red-600 dark:hover:text-red-400 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </motion.aside>
  );
}
