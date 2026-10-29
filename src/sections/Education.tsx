import { GraduationCap, Award, BookOpen, Shield } from 'lucide-react';

const educationItems = [
  {
    icon: GraduationCap,
    type: 'Academic',
    color: 'blue',
    title: 'Faculty of Engineering, Tanta University',
    subtitle: 'Electronics & Electrical Communications Engineering',
    meta: 'Expected Graduation: 2027 · GPA: 3.54 / 4.0',
    details: [
      'Core engineering curriculum: signals, systems, circuit analysis, communications',
      'Strong mathematics and physics foundation',
      'Final-year capstone: SecureChain — AI-assisted security automation platform',
    ],
  },
  {
    icon: Award,
    type: 'AI Training',
    color: 'indigo',
    title: 'NTI / Huawei Egyptian Talent Academy — AI Track',
    subtitle: '80-Hour Program · July 4 – August 4, 2026 · Score: 100%',
    meta: 'National Telecommunications Institute (NTI)',
    details: [
      'AI & ML fundamentals, Python for AI, Mathematics for AI',
      'Data analysis and data processing techniques',
      'Deep learning concepts and AI frameworks',
      'Huawei AI platforms and tools',
      'Emerging AI applications and quantum computing introductions',
    ],
  },
  {
    icon: BookOpen,
    type: 'AI Training',
    color: 'violet',
    title: 'DEPI — AI & Data Science: AI Automation Workflow with n8n',
    subtitle: 'Professional Program',
    meta: 'Digital Egypt Pioneers Initiative (DEPI)',
    details: [
      'AI and generative AI fundamentals',
      'Prompt engineering and LLM applications',
      'AI agent design and implementation',
      'n8n workflow development — core and advanced',
      'LLM integrations and applied automation workflows',
      'Production readiness, security, and governance',
      'Capstone project: applied n8n automation implementation',
    ],
  },
  {
    icon: Shield,
    type: 'Cybersecurity & Networking',
    color: 'slate',
    title: 'Networking & Cybersecurity Training',
    subtitle: 'DEPI Fortinet · NTI Network Security',
    meta: 'Multiple training programs',
    details: [
      'DEPI Fortinet Cybersecurity Engineer training program',
      'NTI Network Security training',
      'CCNA and CCNP Security study (networking and security concepts)',
      'FortiGate and FortiManager exposure',
      'Network security fundamentals and troubleshooting',
    ],
  },
];

const colorMap: Record<string, { icon: string; tag: string; border: string }> = {
  blue:   { icon: 'text-blue-400 bg-blue-500/10 border-blue-500/20',   tag: 'text-blue-400 bg-blue-500/10 border-blue-500/20',   border: 'border-l-blue-500' },
  indigo: { icon: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20', tag: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20', border: 'border-l-indigo-500' },
  violet: { icon: 'text-violet-400 bg-violet-500/10 border-violet-500/20', tag: 'text-violet-400 bg-violet-500/10 border-violet-500/20', border: 'border-l-violet-500' },
  slate:  { icon: 'text-slate-400 bg-slate-500/10 border-slate-500/20',  tag: 'text-slate-400 bg-slate-500/10 border-slate-500/20',  border: 'border-l-slate-500' },
};

export default function Education() {
  return (
    <section id="education" className="section-padding bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-blue-400 text-xs font-mono tracking-widest uppercase mb-3 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Education & Training
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Academic & Professional Development</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A structured learning journey combining formal engineering education with specialized AI and cybersecurity training programs.
          </p>
        </div>

        <div className="space-y-6">
          {educationItems.map((item) => {
            const c = colorMap[item.color];
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`card-base p-6 border-l-4 ${c.border} hover:-translate-y-0.5 transition-transform duration-200`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 flex-shrink-0 rounded-xl border flex items-center justify-center ${c.icon}`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-md border ${c.tag}`}>
                        {item.type}
                      </span>
                      <span className="text-xs text-slate-500">{item.meta}</span>
                    </div>
                    <h3 className="font-semibold text-slate-100 text-lg mb-0.5">{item.title}</h3>
                    <p className="text-sm text-slate-400 mb-4">{item.subtitle}</p>
                    <ul className="space-y-1.5">
                      {item.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="w-1 h-1 rounded-full bg-slate-600 flex-shrink-0 mt-2" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
