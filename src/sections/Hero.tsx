import { Mail, ChevronDown, MapPin, Zap } from 'lucide-react';

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg"
      aria-label="Hero — Mohamed Megahed, AI Automation Engineer"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Open to Opportunities &amp; Freelance Projects
            </div>

            {/* Name + Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight mb-4">
              Mohamed
              <br />
              <span className="gradient-text">Megahed</span>
            </h1>

            <p className="font-mono text-sm text-blue-400 mb-6 tracking-wide">
              AI Automation Engineer · n8n Developer · AI Agents &amp; RAG
            </p>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 leading-snug mb-5 max-w-xl">
              I Build Intelligent Automations That Turn Complex Workflows Into Practical Solutions.
            </h2>

            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
              I'm an AI Automation Engineer specializing in n8n workflows, AI agents, LLM integrations, and RAG systems.
              I build practical automation solutions that connect tools, process information, and streamline business operations.
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-8">
              <MapPin size={14} />
              <span>Tanta, Egypt</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, '#projects')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                <Zap size={16} />
                View My Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#2a3d5f] hover:border-blue-500/50 text-slate-300 hover:text-blue-400 font-semibold rounded-xl transition-all duration-200 hover:bg-blue-500/5"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/mohamed-me9ahed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohamed Megahed on GitHub"
                className="p-2 text-slate-500 hover:text-slate-200 hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-kohef"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mohamed Megahed on LinkedIn"
                className="p-2 text-slate-500 hover:text-blue-400 hover:bg-blue-500/5 rounded-lg transition-all duration-200"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:mohamed.megahed.kohef@gmail.com"
                aria-label="Email Mohamed Megahed"
                className="p-2 text-slate-500 hover:text-blue-400 hover:bg-blue-500/5 rounded-lg transition-all duration-200"
              >
                <Mail size={20} />
              </a>
              <div className="h-4 w-px bg-[#1e2d4d]" />
              <span className="text-slate-600 text-xs">Engineering · Automation · AI</span>
            </div>
          </div>

          {/* Right — Photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute inset-[-16px] rounded-full border border-blue-500/20"
                aria-hidden="true"
              />
              <div
                className="absolute inset-[-32px] rounded-full border border-blue-500/10"
                aria-hidden="true"
              />

              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-blue-500/30 glow-blue-strong">
                <img
                  src="/assets/my-photo.jpeg"
                  alt="Mohamed Megahed — AI Automation Engineer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-[#131d35] border border-[#1e2d4d] rounded-xl px-3 py-2 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-slate-300">n8n Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
