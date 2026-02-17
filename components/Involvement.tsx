
import React from 'react';
import { Heart, Users, MessageSquare, TrendingUp, ChevronRight, Dog, Calendar } from 'lucide-react';

const Involvement: React.FC = () => {
  const softSkills = [
    "Strong interpersonal skills and knowledge of workplace etiquette",
    "High EQ employee who works to get the best out of the team",
    "Can operate on an individual basis as well as in a group setting",
    "Concise yet thorough writer, especially with email and general office communications"
  ];

  return (
    <div className="space-y-8">
      {/* Primary Feature: Delta Phi Epsilon Unified Section */}
      <div className="glass rounded-[3rem] p-8 md:p-12 border-white/5 overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 blur-[120px] rounded-full -mr-40 -mt-40 transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>
        
        <div className="relative z-10">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-6">
              <div className="p-5 bg-pink-500/10 rounded-[2rem] border border-pink-500/20 shadow-xl shadow-pink-500/5">
                <Heart className="text-pink-400" size={40} />
              </div>
              <div>
                <h3 className="text-4xl font-extrabold text-white tracking-tight">Delta Phi Epsilon</h3>
                <p className="text-pink-400/80 font-medium flex items-center gap-2 mt-1">
                  <Calendar size={14} />
                  <span>September 2022 – December 2025</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300 uppercase tracking-widest">National Anorexia Nervosa Foundation</span>
              <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-300 uppercase tracking-widest">Cystic Fibrosis Foundation</span>
            </div>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-10 border-l-2 border-pink-500/30 pl-6">
            Active leadership and strategic involvement within the FAU community, focused on maintaining organizational excellence, facilitating internal communications, and driving significant social impact.
          </p>

          {/* Sub-roles Grid within DPE */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 glass rounded-[2.5rem] border-white/5 bg-white/[0.01] hover:border-blue-500/20 transition-all group/card">
              <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-6 group-hover/card:scale-110 transition-transform">
                <Users className="text-blue-400" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Sorority Member & Position on Standards Board</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Elected position responsible for upholding chapter values and accountability. Managed member communications, discussed academic track solutions, and ensured adherence to national guidelines while fostering a culture of excellence.
              </p>
            </div>

            <div className="p-8 glass rounded-[2.5rem] border-white/5 bg-white/[0.01] hover:border-emerald-500/20 transition-all group/card">
              <div className="p-3 bg-emerald-500/10 rounded-xl w-fit mb-6 group-hover/card:scale-110 transition-transform">
                <TrendingUp className="text-emerald-400" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Fundraising Lead</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Strategic oversight of philanthropic events. Orchestrated community-wide initiatives raising critical funds for the National Anorexia Nervosa Foundation and the Cystic Fibrosis Foundation through innovative campaign management and stakeholder outreach.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Involvement & Skills */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Animal Rescue */}
        <div className="p-8 glass rounded-[2.5rem] border-purple-500/20 bg-purple-500/5 flex flex-col gap-6 group hover:border-purple-500/40 transition-all duration-500">
          <div className="flex justify-between items-center">
            <div className="p-3 bg-purple-500/10 rounded-xl w-fit">
              <Dog className="text-purple-400 group-hover:rotate-12 transition-transform" size={28} />
            </div>
            <span className="text-[10px] font-mono bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full uppercase tracking-wider">Feb 2026</span>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Tri-County Animal Rescue</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Active volunteer focused on the care and exercise of shelter dogs, ensuring their social well-being and happiness through dedicated interaction and socialization programs.
            </p>
          </div>
        </div>

        {/* Communication Strategy */}
        <div className="md:col-span-2 p-10 glass rounded-[2.5rem] border-white/5 flex items-start gap-8 bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full -mr-20 -mt-20"></div>
          
          <div className="p-4 bg-orange-500/10 rounded-2xl shrink-0 hidden md:block">
            <MessageSquare className="text-orange-400" size={28} />
          </div>
          
          <div className="flex-1 relative z-10">
            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              Communication & Soft Skills
              <span className="text-xs font-normal text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">Professional Etiquette</span>
            </h4>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-4 group/skill">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40 group-hover/skill:bg-orange-500 mt-2 transition-colors shrink-0"></div>
                  <span className="text-sm text-slate-400 group-hover/skill:text-slate-200 transition-colors leading-relaxed">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm italic text-slate-500 border-t border-white/5 pt-6">
              "Leveraging stylistic precision and emotional intelligence to foster productive environments."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Involvement;
