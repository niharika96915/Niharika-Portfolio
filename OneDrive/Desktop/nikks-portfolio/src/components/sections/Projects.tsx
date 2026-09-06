import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Bot,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Search,
} from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const projects = [
  {
    id: 'studyflow-ai',
    title: 'StudyFlow AI',
    subtitle: 'AI-Powered Study Assistant',
    description:
      'Personalized and context-aware learning support powered by Generative AI, RAG and agent-based workflows.',
    tech: ['Python', 'Generative AI', 'RAG', 'AI Agents'],
    icon: GraduationCap,
    number: '01',
  },
  {
    id: 'placement-preparation-agent',
    title: 'Placement Preparation Agent',
    subtitle: 'AI Placement Assistant',
    description:
      'An AI-powered placement assistant providing personalized guidance through automated workflows and email delivery.',
    tech: ['Gemini API', 'n8n', 'Docker'],
    icon: Bot,
    number: '02',
  },
  {
    id: 'casefile',
    title: 'CaseFile',
    subtitle: 'Investigation Intelligence',
    description:
      'An AI-powered investigation intelligence application for organizing and analyzing case data.',
    tech: ['Python', 'Streamlit', 'Generative AI', 'AI/ML'],
    icon: Search,
    number: '03',
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navigate = useNavigate()

  const activeProject = projects[activeIndex]
  const ActiveIcon = activeProject.icon

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    )
  }

  const nextProject = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    )
  }

  const openProject = (id: string) => {
    navigate(`/projects/${id}`)
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-10 sm:px-8 lg:px-12 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-end justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-portfolio-orange" />

              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-portfolio-muted">
                Selected Work
              </p>
            </div>

            <h2 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.035em] text-portfolio-ink sm:text-3xl lg:text-4xl">
              Things I've
              <span className="text-portfolio-orange"> built.</span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-portfolio-border bg-white text-portfolio-ink transition hover:bg-portfolio-ink hover:text-white"
            >
              <ChevronLeft size={17} />
            </button>

            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-portfolio-border bg-white text-portfolio-ink transition hover:bg-portfolio-ink hover:text-white"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </motion.div>

        {/* Project Showcase */}
        <div className="relative mt-6">

          {/* Desktop Cards */}
          <div className="hidden items-center justify-center gap-4 md:flex">

            {projects.map((project, index) => {
              const Icon = project.icon
              const isActive = index === activeIndex

              return (
                <motion.button
                  key={project.id}
                  type="button"
                  onClick={() => {
                    if (isActive) {
                      openProject(project.id)
                    } else {
                      setActiveIndex(index)
                    }
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.91,
                    opacity: isActive ? 1 : 0.55,
                    y: isActive ? 0 : 8,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: 'easeOut',
                  }}
                  className={`group relative h-65 w-full max-w-95 overflow-hidden rounded-[1.75rem] text-left shadow-soft transition-shadow duration-300 ${
                    isActive
                      ? 'bg-portfolio-ink shadow-card'
                      : 'border border-portfolio-border bg-white hover:opacity-80'
                  }`}
                >
                  {/* Decorative Background */}
                  <div
                    className={`absolute -right-16 -top-16 h-44 w-44 rounded-full ${
                      isActive
                        ? 'bg-portfolio-orange/15'
                        : 'bg-portfolio-orange-soft'
                    }`}
                  />

                  <div
                    className={`absolute -bottom-20 -left-10 h-48 w-48 rounded-full ${
                      isActive
                        ? 'bg-portfolio-teal/10'
                        : 'bg-portfolio-teal-soft'
                    }`}
                  />

                  <div className="relative flex h-full flex-col justify-between p-5">

                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          isActive
                            ? 'bg-white/10'
                            : 'bg-portfolio-surface-soft'
                        }`}
                      >
                        <Icon
                          size={20}
                          className={
                            isActive
                              ? 'text-portfolio-orange'
                              : 'text-portfolio-orange'
                          }
                        />
                      </div>

                      <span
                        className={`text-[11px] font-bold ${
                          isActive
                            ? 'text-white/30'
                            : 'text-portfolio-muted/50'
                        }`}
                      >
                        {project.number}
                      </span>
                    </div>

                    {/* Middle */}
                    <div>
                      <p
                        className={`text-[10px] font-bold uppercase tracking-[0.14em] ${
                          isActive
                            ? 'text-portfolio-teal'
                            : 'text-portfolio-teal'
                        }`}
                      >
                        {project.subtitle}
                      </p>

                      <h3
                        className={`mt-1 text-xl font-bold tracking-tight ${
                          isActive
                            ? 'text-white'
                            : 'text-portfolio-ink'
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={`mt-2 line-clamp-2 text-xs leading-5 ${
                          isActive
                            ? 'text-white/55'
                            : 'text-portfolio-muted'
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-full px-2 py-1 text-[9px] font-semibold ${
                              isActive
                                ? 'bg-white/10 text-white/65'
                                : 'bg-portfolio-surface-soft text-portfolio-ink'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                          isActive
                            ? 'bg-white text-portfolio-ink group-hover:bg-portfolio-orange group-hover:text-white'
                            : 'bg-portfolio-ink text-white'
                        }`}
                      >
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Mobile Active Card */}
          <motion.button
            type="button"
            onClick={() => openProject(activeProject.id)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative flex h-64 w-full overflow-hidden rounded-[1.75rem] bg-portfolio-ink text-left shadow-card md:hidden"
          >
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-portfolio-orange/15" />

            <div className="relative flex w-full flex-col justify-between p-5">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <ActiveIcon
                    size={20}
                    className="text-portfolio-orange"
                  />
                </div>

                <span className="text-[11px] font-bold text-white/30">
                  {activeProject.number}
                </span>
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-portfolio-teal">
                  {activeProject.subtitle}
                </p>

                <h3 className="mt-1 text-2xl font-bold tracking-tight text-white">
                  {activeProject.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-white/55">
                  {activeProject.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {activeProject.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/10 px-2 py-1 text-[9px] font-semibold text-white/65"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-portfolio-ink">
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </div>
          </motion.button>

          {/* Mobile Navigation */}
          <div className="mt-3 flex items-center justify-between md:hidden">
            <button
              type="button"
              onClick={previousProject}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-portfolio-border bg-white"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="flex gap-1.5">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${project.title}`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-6 bg-portfolio-orange'
                      : 'w-1.5 bg-portfolio-border'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextProject}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-portfolio-border bg-white"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Small Hint */}
        <p className="mt-4 text-center text-[10px] font-medium text-portfolio-muted">
          Select a project to explore the full case study →
        </p>
      </div>
    </section>
  )
}