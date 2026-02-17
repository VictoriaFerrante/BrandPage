
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/victoria-ferrante-329638324";
  const githubUrl = "https://github.com/VictoriaFerrante";

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6">
            <a href="#" className="text-3xl font-extrabold text-white tracking-tighter">
              Victoria C. <span className="text-blue-500">Ferrante</span>
            </a>
            <p className="text-slate-500 max-w-sm leading-relaxed italic">
              "Securing the future by building it with precision and automation."
            </p>
            <div className="flex gap-4">
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:Vcferrante11@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group">
                  <div className="p-1.5 rounded-lg bg-slate-900 group-hover:bg-blue-500/10 transition-colors">
                    <Mail size={16} />
                  </div>
                  <span className="text-sm">Vcferrante11@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:5164349150" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group">
                  <div className="p-1.5 rounded-lg bg-slate-900 group-hover:bg-blue-500/10 transition-colors">
                    <Phone size={16} />
                  </div>
                  <span className="text-sm">516-434-9150</span>
                </a>
              </li>
              <li>
                <a 
                  href={linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group"
                >
                  <div className="p-1.5 rounded-lg bg-slate-900 group-hover:bg-blue-500/10 transition-colors">
                    <Linkedin size={16} />
                  </div>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="p-1.5 rounded-lg bg-slate-900">
                  <MapPin size={16} />
                </div>
                <span className="text-sm">Boca Raton, FL</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#education" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Academic Foundation</a></li>
              <li><a href="#experience" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Professional Journey</a></li>
              <li><a href="#skills" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Technical Arsenal</a></li>
              <li><a href="#involvement" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Beyond the Code</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-4">
          <p className="text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} Victoria C. Ferrante. Built for excellence.
          </p>
          <p className="flex items-center gap-2 text-xs text-slate-600">
            Crafted with <Heart size={12} className="text-red-500/50" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
