
import React from 'react';
import { Code, Shield, Database, Layout, Layers, Terminal } from 'lucide-react';

const SkillsGrid: React.FC = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code size={20} />,
      skills: ["Python", "MySQL", "SwiftUI", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Security & Platforms",
      icon: <Shield size={20} />,
      skills: ["Splunk", "Rapid7", "AlgoSec", "Wireshark", "Jira", "GitHub", "Security awareness education"]
    },
    {
      title: "Automation & Data",
      icon: <Database size={20} />,
      skills: ["UiPath Studio", "Orchestrator", "MongoDB", "Tableau", "Visual Basic", "PowerBI"]
    },
    {
      title: "Web Design",
      icon: <Layout size={20} />,
      skills: ["React", "Tailwind CSS", "Visual Studio Code", "UI/UX Design", "JavaScript", "HTML"]
    },
    {
      title: "Core Concepts",
      icon: <Layers size={20} />,
      skills: ["OSI Model", "Algorithms", "Data Structures", "AI Integration", "Virtualization", "Security Log Analysis"]
    },
    {
      title: "Operations",
      icon: <Terminal size={20} />,
      skills: ["SharePoint", "HIPAA Compliance", "Network Topology"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, idx) => (
        <div key={idx} className="group glass p-6 rounded-2xl border-white/5 hover:bg-white/[0.05] transition-all hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h4 className="font-bold text-white tracking-wide">{cat.title}</h4>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, sIdx) => (
              <span 
                key={sIdx} 
                className="px-3 py-1 text-xs font-medium bg-slate-800/50 text-slate-400 rounded-lg border border-white/5 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
