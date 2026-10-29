import { useState } from 'react';
import { ExternalLink, Eye, ArrowRight, X, ChevronLeft, ChevronRight, AlertTriangle } from 'lucide-react';
import { projects, type Project } from '../data/projects';

// ─── Image Carousel ──────────────────────────────────────────────────────────
function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  const total = images.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <div className="relative bg-[#0a0f1e] rounded-xl overflow-hidden aspect-video">
      <img
        src={images[idx]}
        alt={`${title} — screenshot ${idx + 1} of ${total}`}
        className="w-full h-full object-contain object-center"
        loading="lazy"
      />
      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-lg transition-colors"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-lg transition-colors"
            aria-label="Next screenshot"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? 'bg-blue-400' : 'bg-white/30'}`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Architecture Diagram ─────────────────────────────────────────────────────
function ArchDiagram({ text }: { text: string }) {
  const steps = text.split('→').map((s) => s.trim());
  return (
    <div className="flex flex-wrap items-center gap-2 p-4 bg-[#0a0f1e] rounded-xl border border-[#1e2d4d]">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="tech-badge text-slate-300 border-slate-600/30 bg-slate-500/10 text-xs px-2 py-0.5 rounded font-mono">
            {step}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight size={12} className="text-blue-500/60 flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Case Study Modal ─────────────────────────────────────────────────────────
function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Case study: ${project.title}`}>
      <div
        className="relative bg-[#0f1629] border border-[#1e2d4d] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0f1629]/95 backdrop-blur-sm border-b border-[#1e2d4d] px-6 py-4 flex items-start justify-between z-10">
          <div>
            <span className="text-xs text-blue-400 font-mono uppercase tracking-wider">{project.category}</span>
            <h2 className="text-xl font-bold text-slate-100 mt-1">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-200 hover:bg-white/5 rounded-lg transition-colors ml-4 flex-shrink-0"
            aria-label="Close case study"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-8">
          {/* Disclaimer */}
          {project.disclaimer && (
            <div className="flex items-start gap-3 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
              <AlertTriangle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-amber-300 text-sm">{project.disclaimer}</p>
            </div>
          )}

          {/* Screenshot carousel */}
          <ImageCarousel images={project.images} title={project.title} />

          {/* Overview */}
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-3">Overview</h3>
            <p className="text-slate-400 leading-relaxed">{project.overview}</p>
          </div>

          {/* Problem */}
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-3">Problem</h3>
            <p className="text-slate-400 leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-3">Solution</h3>
            <p className="text-slate-400 leading-relaxed">{project.solution}</p>
          </div>

          {/* Architecture */}
          {project.architecture && (
            <div>
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-3">Architecture</h3>
              <ArchDiagram text={project.architecture} />
            </div>
          )}

          {/* My Role */}
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-3">My Role</h3>
            <p className="text-slate-400 leading-relaxed">{project.myRole}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-3">Technology Stack</h3>
            <div className="space-y-2">
              {project.techStack.map((t) => (
                <div key={t.name} className="flex items-start gap-3 py-2 border-b border-[#1e2d4d] last:border-0">
                  <span className="tech-badge flex-shrink-0 mt-0.5">{t.name}</span>
                  <span className="text-sm text-slate-400">{t.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Details */}
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-3">Implementation Details</h3>
            <ul className="space-y-2">
              {project.implementationDetails.map((detail, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Lessons Learned */}
          <div>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-3">Lessons Learned</h3>
            <ul className="space-y-2">
              {project.lessonsLearned.map((lesson, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 mt-1.5" />
                  {lesson}
                </li>
              ))}
            </ul>
          </div>

          {/* GitHub link if verified */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#2a3d5f] hover:border-blue-500/50 text-slate-300 hover:text-blue-400 text-sm font-medium rounded-lg transition-all"
            >
              <ExternalLink size={14} />
              View Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, onViewCaseStudy }: { project: Project; onViewCaseStudy: (p: Project) => void }) {
  return (
    <article className="card-base overflow-hidden group flex flex-col hover:-translate-y-1 transition-all duration-300">
      {/* Cover image */}
      <div className="relative h-52 overflow-hidden bg-[#0a0f1e]">
        <img
          src={project.coverImage}
          alt={`${project.title} — workflow screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Order badge */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-white/10 text-white text-xs font-mono px-2 py-0.5 rounded-md">
          {String(project.order).padStart(2, '0')}
        </div>
        {/* Category */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#131d35] to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-xs text-blue-400/70 font-mono mb-2">{project.category}</p>
        <h3 className="font-semibold text-slate-200 text-lg mb-2 leading-snug group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techTags.slice(0, 5).map((tag) => (
            <span key={tag} className="tech-badge">{tag}</span>
          ))}
        </div>

        {/* Disclaimer mini */}
        {project.disclaimer && (
          <p className="text-amber-400/70 text-xs mb-3 flex items-center gap-1">
            <AlertTriangle size={11} />
            Educational project only
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-[#1e2d4d]">
          <button
            id={`case-study-${project.id}`}
            onClick={() => onViewCaseStudy(project)}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2 bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/20 hover:border-blue-500/40 text-blue-400 text-sm font-medium rounded-lg transition-all"
          >
            <Eye size={14} />
            View Case Study
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — GitHub repository`}
              className="p-2 text-slate-500 hover:text-slate-200 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-[#2a3d5f]"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────
export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding bg-[#0f1629]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-blue-400 text-xs font-mono tracking-widest uppercase mb-3 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">What I've Built</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Five hands-on projects spanning AI automation, conversational agents, RAG systems, and computer vision.
          </p>
        </div>

        {/* Grid — project order is enforced in data/projects.ts */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewCaseStudy={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Case study modal */}
      {activeProject && (
        <CaseStudyModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
