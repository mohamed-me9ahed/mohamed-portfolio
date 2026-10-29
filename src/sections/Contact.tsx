import { Mail, Phone, Copy, CheckCheck } from 'lucide-react';
import { useState } from 'react';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contactLinks = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'mohamed.megahed.kohef@gmail.com',
    href: 'mailto:mohamed.megahed.kohef@gmail.com',
    color: 'blue',
    copyable: true,
    external: false,
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+20 128 147 5235',
    href: 'tel:+201281475235',
    color: 'cyan',
    copyable: true,
    external: false,
  },
  {
    Icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/mohamed-me9ahed',
    href: 'https://github.com/mohamed-me9ahed',
    color: 'slate',
    copyable: false,
    external: true,
  },
  {
    Icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohamed-kohef',
    href: 'https://www.linkedin.com/in/mohamed-kohef',
    color: 'indigo',
    copyable: false,
    external: true,
  },
];

const colorMap: Record<string, { iconBg: string; iconText: string; hover: string }> = {
  blue:   { iconBg: 'bg-blue-500/10 border-blue-500/20',   iconText: 'text-blue-400',   hover: 'hover:border-blue-500/40' },
  cyan:   { iconBg: 'bg-cyan-500/10 border-cyan-500/20',   iconText: 'text-cyan-400',   hover: 'hover:border-cyan-500/40' },
  slate:  { iconBg: 'bg-slate-500/10 border-slate-500/20', iconText: 'text-slate-400',  hover: 'hover:border-slate-500/40' },
  indigo: { iconBg: 'bg-indigo-500/10 border-indigo-500/20', iconText: 'text-indigo-400', hover: 'hover:border-indigo-500/40' },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 text-slate-600 hover:text-slate-300 transition-colors rounded-md hover:bg-white/5"
      aria-label={`Copy ${text}`}
      title="Copy to clipboard"
    >
      {copied ? <CheckCheck size={13} className="text-emerald-400" /> : <Copy size={13} />}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-blue-400 text-xs font-mono tracking-widest uppercase mb-3 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Have an Automation Challenge in Mind?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I'm interested in opportunities where I can build practical automation workflows, integrate AI capabilities,
            and help turn repetitive processes into maintainable systems.
          </p>
        </div>

        {/* Main CTA card */}
        <div className="card-base p-8 sm:p-10 text-center mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 pointer-events-none" aria-hidden="true" />

          <div className="relative">
            <p className="text-slate-300 text-lg mb-2 font-medium">Ready to discuss a project or opportunity?</p>
            <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto">
              The best way to reach me is by email. I'm open to remote work, freelance automation projects, and suitable job opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:mohamed.megahed.kohef@gmail.com"
                id="contact-email-primary"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                Send Me an Email
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-kohef"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#2a3d5f] hover:border-blue-500/40 text-slate-300 hover:text-blue-400 font-semibold rounded-xl transition-all duration-200 hover:bg-blue-500/5"
              >
                <LinkedinIcon size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact detail cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link) => {
            const c = colorMap[link.color];
            const Icon = link.Icon;
            return (
              <div
                key={link.label}
                className={`card-base p-4 flex items-center gap-4 transition-all ${c.hover}`}
              >
                <div className={`w-10 h-10 flex-shrink-0 rounded-xl border flex items-center justify-center ${c.iconBg}`}>
                  <span className={c.iconText}>
                    <Icon size={18} />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 mb-0.5">{link.label}</p>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium ${c.iconText} hover:underline truncate block`}
                    >
                      {link.value}
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className={`text-sm font-medium ${c.iconText} hover:underline truncate block`}
                    >
                      {link.value}
                    </a>
                  )}
                </div>
                {link.copyable && <CopyButton text={link.value} />}
              </div>
            );
          })}
        </div>

        <p className="text-center text-slate-600 text-sm mt-8">
          📍 Based in Tanta, Egypt — Available for remote work and freelance projects worldwide.
        </p>
      </div>
    </section>
  );
}
