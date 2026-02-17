
import React from 'react';
import { Award, GraduationCap, Star } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Master's Entry */}
      <div className="group relative glass p-8 rounded-3xl border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
          <GraduationCap size={120} />
        </div>
        
        <div className="relative z-10 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-white">Florida Atlantic University</h3>
              <span className="text-xs font-mono bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">Exp. Dec 2026</span>
            </div>
            <p className="text-lg text-blue-400 font-semibold tracking-tight">Master of Science, IT Management</p>
            <p className="text-sm text-slate-400">Cybersecurity Concentration</p>
          </div>

          <div className="pt-6 border-t border-white/5 space-y-4">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Star size={16} className="text-blue-400" />
              <span>Advanced Security Strategy</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <Star size={16} className="text-blue-400" />
              <span>Enterprise IT Infrastructure</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bachelor's Entry */}
      <div className="group relative glass p-8 rounded-3xl border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors">
          <Award size={120} />
        </div>

        <div className="relative z-10 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-white">Florida Atlantic University</h3>
              <span className="text-xs font-mono bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">Grad. Dec 2025</span>
            </div>
            <p className="text-lg text-emerald-400 font-semibold tracking-tight">Bachelor of Arts, Computer Science</p>
            <p className="text-sm text-slate-400">Minor in Cybersecurity</p>
          </div>

          <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
              <p className="text-[10px] font-bold text-emerald-500 uppercase">Honors</p>
              <p className="text-xs font-bold text-white">Summa Cum Laude</p>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
              <p className="text-[10px] font-bold text-blue-500 uppercase">Recognition</p>
              <p className="text-xs font-bold text-white">5x Dean's List</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
