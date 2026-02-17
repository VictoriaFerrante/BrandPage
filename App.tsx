
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Code, 
  Cpu, 
  Database, 
  BookOpen, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Copy, 
  CheckCircle,
  Terminal,
  Zap,
  Globe,
  ChevronRight
} from 'lucide-react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import SkillsGrid from './components/SkillsGrid';
import Involvement from './components/Involvement';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full"></div>
      </div>

      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        <Hero />
        
        <section id="education" className="scroll-mt-32">
          <SectionHeader icon={<BookOpen className="text-blue-400" />} title="Academic Foundation" />
          <Education />
        </section>

        <section id="experience" className="scroll-mt-32">
          <SectionHeader icon={<Terminal className="text-blue-400" />} title="Professional Journey" />
          <Experience />
        </section>

        <section id="skills" className="scroll-mt-32">
          <SectionHeader icon={<Zap className="text-blue-400" />} title="Technical Arsenal" />
          <SkillsGrid />
        </section>

        <section id="involvement" className="scroll-mt-32">
          <SectionHeader icon={<Award className="text-blue-400" />} title="Beyond the Code" />
          <Involvement />
        </section>
      </main>

      <Footer />
    </div>
  );
};

const SectionHeader: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="flex items-center gap-4 mb-12">
    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
      {icon}
    </div>
    <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
    <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent ml-4"></div>
  </div>
);

export default App;
