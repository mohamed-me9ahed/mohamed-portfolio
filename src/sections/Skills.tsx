const skillGroups = [
  {
    category: 'AI Automation',
    color: 'blue',
    skills: [
      'n8n',
      'Workflow Design',
      'Workflow Logic',
      'Triggers & Scheduling',
      'Webhooks',
      'REST API Integration',
      'Data Transformation',
      'Conditional Routing',
      'Error Handling',
      'Workflow Reliability',
    ],
  },
  {
    category: 'AI Agents & LLM Integration',
    color: 'indigo',
    skills: [
      'AI Agent Workflows',
      'Prompt Engineering',
      'LLM Integration',
      'Structured Output',
      'Conversational Memory',
      'Tool Integration',
      'RAG (Retrieval-Augmented Generation)',
      'Embeddings',
      'Vector Search',
    ],
  },
  {
    category: 'Databases & Backend Integration',
    color: 'cyan',
    skills: [
      'Supabase',
      'PostgreSQL',
      'Database Schema Design',
      'Row Level Security (RLS)',
      'SQL Functions',
      'Database Integration',
      'Data Validation',
    ],
  },
  {
    category: 'Programming & AI/ML',
    color: 'violet',
    skills: [
      'Python',
      'TensorFlow / Keras',
      'Convolutional Neural Networks',
      'FastAPI',
      'Streamlit',
      'Data Analysis',
      'Machine Learning Fundamentals',
    ],
  },
  {
    category: 'Networking & Security',
    color: 'slate',
    skills: [
      'Networking Fundamentals',
      'Network Troubleshooting',
      'Network Security Fundamentals',
      'Fortinet Technologies',
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue:   { bg: 'bg-blue-500/10',   border: 'border-blue-500/20',   text: 'text-blue-300',   dot: 'bg-blue-400' },
  indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-300', dot: 'bg-indigo-400' },
  cyan:   { bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20',   text: 'text-cyan-300',   dot: 'bg-cyan-400' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-300', dot: 'bg-violet-400' },
  slate:  { bg: 'bg-slate-500/10',  border: 'border-slate-500/20',  text: 'text-slate-300',  dot: 'bg-slate-400' },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-blue-400 text-xs font-mono tracking-widest uppercase mb-3 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">What I Work With</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A practical skill set built through hands-on project work and structured technical training.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const c = colorMap[group.color];
            return (
              <div
                key={group.category}
                className="card-base p-6 flex flex-col"
              >
                <h3 className={`font-semibold text-sm uppercase tracking-wide ${c.text} mb-4 pb-3 border-b border-[#1e2d4d]`}>
                  {group.category}
                </h3>
                <ul className="space-y-2 flex-1">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Integrations row */}
        <div className="mt-10 p-6 card-base">
          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 text-center">
            Platforms & Integrations
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'n8n', 'Supabase', 'Telegram', 'Google Sheets', 'Gmail', 'WhatsApp',
              'Tally', 'OpenRouter', 'Google Gemini', 'FastAPI', 'Streamlit',
              'pgvector', 'PostgreSQL', 'TensorFlow', 'Keras', 'Python',
            ].map((tag) => (
              <span key={tag} className="tech-badge">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
