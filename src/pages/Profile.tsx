import { Card } from "@/components/ui/Card";
import { User, MapPin, Mail, Phone, Calendar, Music, Plane, Film, Trophy } from "lucide-react";

export function Profile() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Profile Sidebar */}
        <Card className="w-full md:w-1/3 flex flex-col items-center text-center p-8 sticky top-24">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900/30 mb-4 shadow-xl">
            <img 
              src="https://nirmalgaihre.com.np/images/nirmalgaihre.jpg" 
              alt="Nirmal Gaihre" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Nirmal Gaihre</h2>
          <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-6">Full Stack Developer</p>
          
          <div className="w-full space-y-4 text-left">
            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase font-semibold">Location</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">Syangja Walling, Nepal</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase font-semibold">Email</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">info@nirmalgaihre.com.np</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase font-semibold">Phone</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">9765511650</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase font-semibold">Experience</p>
                <p className="text-sm font-medium text-zinc-900 dark:text-white">3+ Years</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 w-full">
            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/30 transition-all">
              Download CV
            </button>
          </div>
        </Card>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <Card>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-indigo-600" />
              About Me
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
              I am a passionate Full Stack Web Developer with over 3 years of experience in building digital products. 
              My journey started with a curiosity for how things work on the internet, which led me to dive deep into 
              web technologies. I specialize in creating robust, scalable, and user-friendly applications using modern 
              tech stacks like React, Node.js, and PHP.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Beyond coding, I have a strong interest in IoT (Internet of Things), having completed 9+ projects in this domain. 
              I believe in continuous learning and staying updated with the latest industry trends to deliver the best solutions 
              for my clients. Whether it's a simple website or a complex SaaS platform, I bring dedication and creativity to every project.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-lg font-bold mb-4">Education</h3>
              <div className="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-zinc-900"></div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">Diploma in IT</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-1">Aandhikhola Polytechnic (CTEVT) • 2021 - 2025</p>
                  <p className="text-sm text-zinc-500">Focus on Software Engineering and Web Development.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-zinc-300 dark:bg-zinc-700 border-4 border-white dark:border-zinc-900"></div>
                  <h4 className="font-bold text-zinc-900 dark:text-white">High School</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-1">Laxmi Secondary • 2019 - 2021</p>
                  <p className="text-sm text-zinc-500">Major in OPT Maths and Computer Science.</p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-bold mb-4">Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 flex flex-col items-center justify-center gap-2 text-center hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors group">
                  <Music className="w-6 h-6 text-zinc-400 group-hover:text-indigo-600 transition-colors" />
                  <span className="font-medium text-sm">Music</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 flex flex-col items-center justify-center gap-2 text-center hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors group">
                  <Plane className="w-6 h-6 text-zinc-400 group-hover:text-indigo-600 transition-colors" />
                  <span className="font-medium text-sm">Travel</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 flex flex-col items-center justify-center gap-2 text-center hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors group">
                  <Film className="w-6 h-6 text-zinc-400 group-hover:text-indigo-600 transition-colors" />
                  <span className="font-medium text-sm">Movies</span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 flex flex-col items-center justify-center gap-2 text-center hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors group">
                  <Trophy className="w-6 h-6 text-zinc-400 group-hover:text-indigo-600 transition-colors" />
                  <span className="font-medium text-sm">Sports</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
