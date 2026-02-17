
import React, { useState } from 'react';
import { Mail, CheckCircle, MapPin, Linkedin, Github, Shield, Sparkles, Fingerprint } from 'lucide-react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "Vcferrante11@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/victoria-ferrante-329638324";
  const githubUrl = "https://github.com/VictoriaFerrante";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh] relative">
      {/* Narrative Section */}
      <div className="space-y-8 order-2 md:order-1 relative z-10">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter">
            Victoria C.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600 animate-gradient">
              Ferrante
            </span>
          </h1>
          <div className="space-y-4 text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light">
            <p>
              Currently interning at <span className="text-white font-medium">NCCI</span> as an <span className="text-blue-400 font-medium">Enterprise Information Security - Office Associate Intern</span>. 
            </p>
            <p>
              Simultaneously pursing my <span className="text-white font-medium">MS in IT Management</span>, with a <span className="text-indigo-400 font-medium">Cybersecurity concentration</span> at Florida Atlantic University. 
            </p>
            <p className="text-base text-slate-500 italic">
              Great interest in Cybersecurity, Development, Security analysis, AI Innovation, Design, and continuous learning.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <button 
            onClick={copyEmail}
            className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <span className="relative z-10 flex items-center gap-3">
              {copied ? <CheckCircle size={20} /> : <Mail size={20} />}
              {copied ? 'Email Copied!' : 'Get In Touch'}
            </span>
          </button>
          
          <div className="flex items-center gap-3">
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 glass rounded-2xl text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 glass rounded-2xl text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-6 text-slate-500 text-sm font-medium pt-4">
          <div className="flex items-center gap-2 group cursor-default">
            <div className="p-1.5 rounded-lg bg-slate-800/50 group-hover:bg-blue-500/20 transition-colors">
              <MapPin size={14} className="text-blue-500" />
            </div>
            <span className="group-hover:text-slate-300 transition-colors">Boca Raton, FL</span>
          </div>
          <div className="flex items-center gap-2 group cursor-default">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="group-hover:text-slate-300 transition-colors">Open to Collaboration</span>
          </div>
        </div>
      </div>

      {/* Visual Section */}
      <div className="order-1 md:order-2 flex justify-center relative">
        <div className="relative group perspective-1000">
          {/* Layered Background Effects */}
          <div className="absolute -inset-8 bg-blue-500/20 rounded-[3rem] blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
          
          {/* HUD Decorative Elements */}
          <div className="absolute -top-4 -left-4 z-20 flex flex-col gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-px bg-blue-500"></div>
            <div className="h-8 w-px bg-blue-500"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 z-20 flex flex-col items-end gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="h-8 w-px bg-blue-500"></div>
            <div className="w-8 h-px bg-blue-500"></div>
          </div>
          
          {/* System ID Tag */}
          <div className="absolute top-6 right-6 z-20 font-mono text-[8px] text-blue-400/50 flex flex-col items-end uppercase tracking-widest pointer-events-none">
            <span>Auth_ID: VCF-25</span>
            <span>Status: Verified</span>
          </div>

          {/* Main Photo Container - Perfect 2:3 Aspect Ratio (320x480) */}
          <div className="relative w-72 h-[432px] md:w-[320px] md:h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] bg-slate-900 ring-1 ring-white/5 transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
            <img 
              src="Photo of me.jpg" 
              alt="Victoria C. Ferrante Professional Portrait" 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                const fallback = document.createElement('div');
                fallback.innerHTML = '<div class="text-blue-500 font-bold text-lg">VCF</div>';
                target.parentElement!.appendChild(fallback);
              }}
            />
            {/* Elegant Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 via-transparent to-transparent opacity-60"></div>
            
            {/* Scanning Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent h-1/2 w-full -translate-y-full group-hover:translate-y-[200%] transition-transform duration-[2000ms] pointer-events-none opacity-20"></div>
            
            {/* Inner Border Reflection */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 pointer-events-none"></div>
          </div>
          
          {/* Status Floating Badge */}
          <div className="absolute -bottom-8 -left-8 p-5 glass rounded-3xl border border-blue-500/30 shadow-2xl animate-float backdrop-blur-2xl z-20 group-hover:border-blue-500/60 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/30 to-indigo-500/30 flex items-center justify-center border border-white/10">
                <Fingerprint className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-0.5">Professional</p>
                <p className="text-base font-bold text-white tracking-tight">Cybersecurity Work Focused</p>
              </div>
            </div>
          </div>

          {/* Abstract Geometric Elements */}
          <div className="absolute -bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
