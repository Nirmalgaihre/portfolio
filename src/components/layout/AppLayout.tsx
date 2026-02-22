import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun, Bell, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function AppLayout() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">
      <Sidebar />
      
      <main className="md:pl-64 min-h-screen flex flex-col pb-20 md:pb-0">
        {/* Top Header */}
        <header className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between bg-zinc-50/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50">
          <div className="flex items-center gap-4 md:hidden">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30">
              N
            </div>
            <span className="font-bold text-lg">Nirmal Gaihre</span>
          </div>

          <div className="hidden md:flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input 
                type="text" 
                placeholder="Search projects, skills, or services..." 
                className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <button className="p-2 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-50 dark:border-black"></span>
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="hidden md:flex items-center gap-3 pl-3 border-l border-zinc-200 dark:border-zinc-800">
              <div className="text-right hidden lg:block">
                <p className="text-sm font-medium">Nirmal Gaihre</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Admin</p>
              </div>
              <img 
                src="https://nirmalgaihre.com.np/images/nirmalgaihre.jpg" 
                alt="Profile" 
                className="w-9 h-9 rounded-xl object-cover border border-zinc-200 dark:border-zinc-800"
              />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-7xl mx-auto"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <MobileNav />
    </div>
  );
}
