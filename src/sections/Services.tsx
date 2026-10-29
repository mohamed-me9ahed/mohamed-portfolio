import { Workflow, Link, Bot, MessageSquare, Database, Wrench } from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'n8n Workflow Automation',
    color: 'blue',
    description:
      'Design and implement n8n workflows that connect applications, automate repetitive processes, and process business data reliably.',
    highlights: ['Workflow design and logic', 'Trigger and scheduling setup', 'Error handling and reliability'],
  },
  {
    icon: Link,
    title: 'API & Webhook Integration',
    color: 'cyan',
    description:
      'Connect systems using REST APIs, webhooks, data transformation, and conditional routing to create cohesive automated pipelines.',
    highlights: ['REST API integration', 'Webhook configuration', 'Data transformation and mapping'],
  },
  {
    icon: Bot,
    title: 'AI Agent Workflows',
    color: 'indigo',
    description:
      'Integrate LLMs and tools into automated workflows for conversational assistance, structured output processing, and task-oriented automation.',
    highlights: ['LLM integration', 'Structured output parsing', 'Conversational memory setup'],
  },
  {
    icon: MessageSquare,
    title: 'Telegram Automation',
    color: 'sky',
    description:
      'Build Telegram-based bots and automation workflows for customer interactions, order collection, notifications, and information delivery.',
    highlights: ['Telegram bot configuration', 'Conversational workflows', 'Customer data collection'],
  },
  {
    icon: Database,
    title: 'RAG Assistants',
    color: 'violet',
    description:
      'Build document-based assistants using retrieval, embeddings, vector storage (Supabase/pgvector), and LLM integration for grounded, accurate responses.',
    highlights: ['Document embedding and storage', 'Semantic retrieval', 'LLM-powered grounded answers'],
  },
  {
    icon: Wrench,
    title: 'Workflow Maintenance & Improvements',
    color: 'slate',
    description:
      'Review and improve existing automation workflows through clearer logic, better validation, error handling, and maintainability improvements.',
    highlights: ['Workflow audit and review', 'Error handling additions', 'Logic optimization'],
  },
];

const colorMap: Record<string, { iconBg: string; iconText: string }> = {
  blue:   { iconBg: 'bg-blue-500/10 border-blue-500/20',   iconText: 'text-blue-400' },
  cyan:   { iconBg: 'bg-cyan-500/10 border-cyan-500/20',   iconText: 'text-cyan-400' },
  indigo: { iconBg: 'bg-indigo-500/10 border-indigo-500/20', iconText: 'text-indigo-400' },
  sky:    { iconBg: 'bg-sky-500/10 border-sky-500/20',     iconText: 'text-sky-400' },
  violet: { iconBg: 'bg-violet-500/10 border-violet-500/20', iconText: 'text-violet-400' },
  slate:  { iconBg: 'bg-slate-500/10 border-slate-500/20', iconText: 'text-slate-400' },
};

export default function Services() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding bg-[#0f1629]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-blue-400 text-xs font-mono tracking-widest uppercase mb-3 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">What I Can Build For You</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Practical automation services aligned with my hands-on project experience. Interested in a project? Let's discuss the details.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service) => {
            const c = colorMap[service.color];
            const Icon = service.icon;
            return (
              <div key={service.title} className="card-base p-6 flex flex-col group hover:-translate-y-1 transition-all duration-200">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${c.iconBg}`}>
                  <Icon size={20} className={c.iconText} />
                </div>
                <h3 className="font-semibold text-slate-200 text-lg mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1 h-1 rounded-full bg-blue-500/60" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center p-8 card-base">
          <h3 className="text-xl font-semibold text-slate-200 mb-3">Have an automation project in mind?</h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto text-sm">
            I'm interested in building practical workflows and automation systems. Let's discuss what you're trying to solve.
          </p>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
