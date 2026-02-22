import { NavLink } from 'react-router-dom';
import { LayoutDashboard, User, BrainCircuit, Briefcase, FolderKanban, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Home', path: '/' },
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: BrainCircuit, label: 'Skills', path: '/skills' },
  { icon: Briefcase, label: 'Services', path: '/services' },
  { icon: FolderKanban, label: 'Projects', path: '/projects' },
  { icon: Mail, label: 'Contact', path: '/contact' },
];

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-t border-zinc-200 dark:border-zinc-800 px-6 py-4 z-50 safe-area-bottom">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center gap-1 transition-colors duration-200",
                isActive 
                  ? "text-indigo-600 dark:text-indigo-400" 
                  : "text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300"
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("w-6 h-6", isActive && "fill-current opacity-20")} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
