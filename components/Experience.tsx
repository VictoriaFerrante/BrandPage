
import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const jobs = [
    {
      company: "NCCI",
      role: "Enterprise Information Security – Office Associate Intern",
      period: "December 2025 – May 2026",
      location: "Boca Raton, FL",
      accent: "blue",
      highlights: [
        "SIEM to analyze network logs/investigations across IAM systems and related hybrid networks",
        "Assisted in tenant hardening of internal systems",
        "IIS Management of hosted services & DevSec Ops for hosted applications",
        "MS 365 Suite audits, and SharePoint online management",
        "Assisted in analysis of configuration drift via AlgoSec’s Firewall analyzer Security Management Suite",
        "Deployment and management of cybersecurity awareness training modules for end users",
        "Automation of vulnerability scanning via Power Automate to identify key weaknesses"
      ]
    },
    {
      company: "Cassena Care LLC",
      role: "Developer Intern",
      period: "Winter 2024, Summer 2025",
      location: "Woodbury, NY",
      accent: "indigo",
      highlights: [
        "Robotic Process Automation (RPA) implementation via UI Path Studio & Orchestrator",
        "Workflow automation using Visual Basic (VB) and existing infrastructure integration",
        "AI integration for document analysis and repetitive task automation",
        "Advanced Excel macro development for automated string generation"
      ]
    },
    {
      company: "Cassena Care LLC",
      role: "Information Technology Intern",
      period: "Summer 2024",
      location: "Woodbury, NY",
      accent: "slate",
      highlights: [
        "Maintained help desk IT infrastructure across multiple subsidiary locations",
        "Ensured hardware/software support in strict HIPAA compliant environments",
        "Managed end-user machine deployment and Windows OS compliance",
        "Network printer administration and docking station configuration"
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {jobs.map((job, idx) => (
        <div key={idx} className="relative group">
          {/* Vertical Line for timeline effect */}
          {idx !== jobs.length - 1 && (
            <div className="absolute left-[39px] top-20 bottom-[-48px] w-px bg-gradient-to-b from-blue-500/30 to-transparent hidden md:block"></div>
          )}

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Icon Circle */}
            <div className="relative z-10 w-20 h-20 rounded-3xl glass border border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/50 transition-colors shadow-xl">
              <Briefcase className={`text-${job.accent}-400`} size={32} />
              <div className="absolute -inset-2 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Content Card */}
            <div className="flex-1 glass p-8 rounded-[2rem] border-white/5 hover:border-white/10 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.company}</h3>
                  <p className="text-blue-400 font-medium">{job.role}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
                  <Calendar size={14} />
                  <span>{job.period}</span>
                </div>
              </div>

              <ul className="grid md:grid-cols-2 gap-4">
                {job.highlights.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed group/li">
                    <ChevronRight size={16} className="text-blue-500/50 group-hover/li:text-blue-500 shrink-0 mt-0.5 transition-colors" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
