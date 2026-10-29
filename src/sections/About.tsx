import { BookOpen, Cpu, Network, ArrowRight } from 'lucide-react';

function SectionHeading({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14">
      <span className="inline-block text-blue-400 text-xs font-mono tracking-widest uppercase mb-3 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">{title}</h2>
      {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

const highlights = [
  {
    icon: Network,
    title: 'Engineering Foundation',
    text: 'Faculty of Engineering, Tanta University — Electronics & Electrical Communications, with deep roots in networking, connectivity, and systems thinking.',
  },
  {
    icon: Cpu,
    title: 'AI Automation Specialization',
    text: 'Specialized in n8n workflow development, AI agents, LLM integrations, and RAG architecture — focused on practical automation that solves real business problems.',
  },
  {
    icon: BookOpen,
    title: 'Hands-On Projects',
    text: 'Built real-world automation workflows, conversational AI systems, RAG assistants, and computer vision applications through structured training and self-directed projects.',
  },
];

export default function About() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section-padding bg-[#0f1629]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Building Practical Automation Systems"
          subtitle="From networking fundamentals to AI automation engineering — a focused technical journey."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-[#1e2d4d] shadow-2xl">
                <img
                  src="/assets/my-photo.jpeg"
                  alt="Mohamed Megahed — AI Automation Engineer from Tanta, Egypt"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              {/* Stats badge */}
              <div className="absolute -top-4 -right-4 bg-[#131d35] border border-[#2a3d5f] rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3.54</div>
                  <div className="text-xs text-slate-500 mt-0.5">GPA / 4.0</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#131d35] border border-[#2a3d5f] rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-xs text-slate-500 mt-0.5">Projects Built</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I began my technical journey in networking and network security, developing a foundation in systems architecture, connectivity,
                and troubleshooting. This engineering background gave me a systematic approach to understanding how systems communicate and fail.
              </p>
              <p>
                Over time, I expanded my focus into artificial intelligence and specialized in <strong className="text-slate-200">AI automation engineering</strong> —
                specifically n8n workflow development, AI agents, LLM-powered applications, and Retrieval-Augmented Generation (RAG).
              </p>
              <p>
                My approach combines workflow design, API integration, data processing, and AI capabilities to create practical systems
                that solve real problems. Through hands-on projects and structured technical training, I have explored business automation,
                conversational assistants, RAG implementations, database-backed applications, and computer vision.
              </p>
              <p>
                I am currently pursuing my degree at the Faculty of Engineering, Tanta University, while actively building and deploying
                automation projects. I am open to suitable job opportunities, remote positions, and freelance automation engagements.
              </p>
            </div>

            <a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium group transition-colors"
            >
              See my projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div key={item.title} className="card-base p-6">
              <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <item.icon size={20} className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-slate-200 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
