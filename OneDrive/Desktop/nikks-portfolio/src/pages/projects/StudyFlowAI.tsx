import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'

import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileText,
  Layers3,
  LockKeyhole,
  Network,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'

const techStack = {
  frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
  backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT'],
  database: ['MongoDB', 'Mongoose'],
  ai: [
    'Google Gemini',
    'Groq',
    'Hugging Face Transformers',
    'Sentence Transformers',
    'RAG',
    'Vector Similarity Search',
    'AI Agents',
  ],
}

const ragSteps = [
  {
    number: '01',
    title: 'Study Material',
    description: 'Uploaded learning content',
  },
  {
    number: '02',
    title: 'Text Extraction',
    description: 'Convert material into usable text',
  },
  {
    number: '03',
    title: 'Chunking',
    description: 'Split content into smaller contexts',
  },
  {
    number: '04',
    title: 'Embeddings',
    description: 'Create semantic representations',
  },
  {
    number: '05',
    title: 'Vector Search',
    description: 'Find relevant information',
  },
  {
    number: '06',
    title: 'Relevant Context',
    description: 'Provide context to the AI agent',
  },
]

const tutorFeatures = [
  'Retrieves relevant study material',
  'Uses retrieved context as a primary reference',
  'Explains concepts in student-friendly language',
  'Breaks difficult concepts into smaller steps',
  'Provides examples when useful',
  'Handles situations where uploaded material is insufficient',
]

const quizFeatures = [
  'Subject, chapter and topic based',
  'Difficulty and question-count control',
  'Fresh question generation',
  'Duplicate avoidance',
  'Answer validation and explanations',
  'RAG-based question generation',
  'Exam-style navigation',
  'Progress tracking',
]

const securityItems = [
  {
    icon: LockKeyhole,
    title: 'JWT Authentication',
  },
  {
    icon: ShieldCheck,
    title: 'Protected API Routes',
  },
  {
    icon: Database,
    title: 'User-specific Resources',
  },
  {
    icon: LockKeyhole,
    title: 'Server-side API Keys',
  },
]

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-2.5">
        <span className="h-2 w-2 rounded-full bg-portfolio-orange" />

        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-portfolio-muted">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-2 max-w-3xl text-2xl font-bold leading-tight tracking-[-0.035em] text-portfolio-ink sm:text-3xl lg:text-4xl">
        {title}
      </h2>
    </motion.div>
  )
}

function ResourceCard({
  label,
  title,
  icon: Icon,
}: {
  label: string
  title: string
  icon: LucideIcon
}) {
  return (
    <div className="group flex min-w-52 flex-1 items-center justify-between rounded-2xl border border-portfolio-border bg-white px-4 py-3 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-portfolio-surface-soft">
          <Icon size={16} className="text-portfolio-orange" />
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-portfolio-muted">
            {label}
          </p>

          <p className="mt-0.5 text-xs font-bold text-portfolio-ink">
            {title}
          </p>
        </div>
      </div>

      <ArrowUpRight
        size={15}
        className="text-portfolio-muted transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-portfolio-orange"
      />
    </div>
  )
}

function ArchitectureNode({
  icon: Icon,
  title,
  subtitle,
  small = false,
}: {
  icon: LucideIcon
  title: string
  subtitle: string
  small?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-portfolio-border bg-portfolio-surface-soft ${
        small ? 'p-3' : 'p-3.5'
      }`}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white">
        <Icon size={15} className="text-portfolio-orange" />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-bold text-portfolio-ink">{title}</p>

        <p className="mt-0.5 truncate text-[10px] text-portfolio-muted">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

function AgentCard({
  icon: Icon,
  title,
  description,
  features,
}: {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-card-lg border border-portfolio-border bg-white p-5 shadow-soft sm:p-6"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-portfolio-orange-soft">
          <Icon size={19} className="text-portfolio-orange" />
        </div>

        <div>
          <h3 className="text-base font-bold text-portfolio-ink">
            {title}
          </h3>

          <p className="mt-1 text-[11px] leading-5 text-portfolio-muted">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {features.map((feature) => (
          <div key={feature} className="flex gap-2">
            <CheckCircle2
              size={13}
              className="mt-0.5 shrink-0 text-portfolio-teal"
            />

            <p className="text-[11px] leading-5 text-portfolio-muted">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </motion.article>
  )
}

function StackGroup({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div>
      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-portfolio-muted">
        {title}
      </p>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-portfolio-border bg-portfolio-surface-soft px-2.5 py-1.5 text-[10px] font-semibold text-portfolio-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function StudyFlowAI() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen overflow-x-hidden bg-portfolio-bg">
      {/* =========================================================
          TOP NAV
      ========================================================= */}
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-portfolio-border/80 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="group inline-flex items-center gap-2 text-xs font-bold text-portfolio-ink transition hover:text-portfolio-orange sm:text-sm"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
            Portfolio
          </button>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-portfolio-orange" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-portfolio-muted">
              Project Case Study
            </span>
          </div>

          <span className="rounded-full bg-portfolio-orange-soft px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-portfolio-orange">
            Active Development
          </span>
        </nav>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="px-5 pb-10 pt-10 sm:px-8 lg:px-12 lg:pb-12 lg:pt-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-7 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
            {/* LEFT — INFORMATION */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-portfolio-orange" />

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-portfolio-muted">
                  AI Learning Platform
                </p>
              </div>

              <h1 className="mt-3 text-4xl font-bold leading-none tracking-tight text-portfolio-ink sm:text-5xl lg:text-7xl">
                StudyFlow
                <span className="text-portfolio-orange"> AI.</span>
              </h1>

              <p className="mt-3 text-base font-bold text-portfolio-teal">
                AI-Powered Study Assistant
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-portfolio-muted sm:text-[15px] sm:leading-7">
                A personalized AI learning platform combining intelligent
                tutoring, RAG-based learning, adaptive quizzes, and resilient
                AI infrastructure.
              </p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {[
                  'Generative AI',
                  'RAG',
                  'AI Agents',
                  'MongoDB',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-portfolio-border bg-white px-3 py-1.5 text-[10px] font-semibold text-portfolio-ink shadow-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Resources */}
              <div className="mt-6 grid gap-2 sm:flex">
                <ResourceCard
                  label="Live Demo"
                  title="Coming Soon"
                  icon={Zap}
                />

                <ResourceCard
                  label="GitHub Repository"
                  title="Coming Soon"
                  icon={Layers3}
                />
              </div>
            </motion.div>

            {/* RIGHT — SMALL IMAGE PANEL */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-portfolio-orange-soft" />

              <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-portfolio-teal-soft" />

              <div className="relative overflow-hidden rounded-[1.5rem] border border-portfolio-border bg-white p-2 shadow-card sm:p-2.5">
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-portfolio-ink">
                  <img
                    src="/projects/StudyFlow-AI.png"
                    alt="StudyFlow AI landing page"
                    className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.025]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />
                </div>

                <div className="flex items-center justify-between px-2 py-2">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-portfolio-muted">
                    Product Preview
                  </p>

                  <span className="flex items-center gap-1.5 text-[9px] font-semibold text-portfolio-teal">
                    <span className="h-1.5 w-1.5 rounded-full bg-portfolio-teal" />
                    StudyFlow AI
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROBLEM / SOLUTION
      ========================================================= */}
      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-card-lg border border-portfolio-border bg-white p-5 shadow-soft sm:p-6"
          >
            <div className="flex items-center gap-2">
              <Search size={17} className="text-portfolio-orange" />

              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-portfolio-muted">
                The Problem
              </p>
            </div>

            <h2 className="mt-3 text-xl font-bold tracking-tight text-portfolio-ink">
              Generic AI isn't enough.
            </h2>

            <p className="mt-2 text-xs leading-5 text-portfolio-muted sm:text-[13px]">
              Students need assistance that understands their actual study
              material, learning context, topics, and progress—not just
              general model knowledge.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-card-lg bg-portfolio-ink p-5 shadow-card sm:p-6"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={17} className="text-portfolio-orange" />

              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                The Solution
              </p>
            </div>

            <h2 className="mt-3 text-xl font-bold tracking-tight text-white">
              A context-aware learning workspace.
            </h2>

            <p className="mt-2 text-xs leading-5 text-white/50 sm:text-[13px]">
              StudyFlow AI connects uploaded materials, RAG retrieval, AI
              tutoring, quizzes, and learning progress into one personalized
              learning experience.
            </p>
          </motion.article>
        </div>
      </section>

      {/* =========================================================
          ARCHITECTURE
      ========================================================= */}
      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="System Architecture"
            title={
              <>
                A modular architecture for
                <span className="text-portfolio-orange"> AI workflows.</span>
              </>
            }
          />

          <div className="mt-5 grid gap-3 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-card-lg border border-portfolio-border bg-white p-5 shadow-soft sm:p-6"
            >
              <div className="space-y-2">
                <ArchitectureNode
                  icon={Network}
                  title="React Frontend"
                  subtitle="Vite + TypeScript"
                />

                <div className="flex justify-center text-xs font-bold text-portfolio-orange">
                  ↓
                </div>

                <ArchitectureNode
                  icon={Layers3}
                  title="Express Backend"
                  subtitle="REST APIs"
                />

                <div className="flex justify-center text-xs font-bold text-portfolio-orange">
                  ↓
                </div>

                <div className="grid gap-2 sm:grid-cols-3">
                  <ArchitectureNode
                    icon={Bot}
                    title="AI Agents"
                    subtitle="Tutor / Quiz"
                    small
                  />

                  <ArchitectureNode
                    icon={Search}
                    title="RAG"
                    subtitle="Retrieval"
                    small
                  />

                  <ArchitectureNode
                    icon={Database}
                    title="MongoDB"
                    subtitle="Application data"
                    small
                  />
                </div>

                <div className="flex justify-center text-xs font-bold text-portfolio-orange">
                  ↓
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                  <ArchitectureNode
                    icon={RefreshCw}
                    title="Provider Manager"
                    subtitle="Gemini → Groq fallback"
                    small
                  />

                  <ArchitectureNode
                    icon={BrainCircuit}
                    title="Embedding Model"
                    subtitle="all-MiniLM-L6-v2"
                    small
                  />
                </div>
              </div>
            </motion.div>

            {/* Engineering Decisions */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="rounded-card-lg bg-portfolio-ink p-5 shadow-card sm:p-6"
            >
              <div className="flex items-center gap-2">
                <BrainCircuit size={17} className="text-portfolio-orange" />

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">
                  Engineering Decisions
                </p>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs font-bold text-white">
                    Provider abstraction
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/45">
                    AI providers can be changed without rewriting the complete
                    application.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Local embeddings
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/45">
                    Uses an open-source embedding model to reduce dependency on
                    paid embedding APIs.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Modular agents
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/45">
                    Tutor and Quiz intelligence are separated into focused AI
                    agents.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    User-level isolation
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/45">
                    RAG retrieval is filtered at the user level to help prevent
                    cross-user retrieval.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-white">
                    Graceful fallback
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-white/45">
                    Temporary provider issues can be handled through retry and
                    fallback mechanisms.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          RAG
      ========================================================= */}
      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Retrieval-Augmented Generation"
            title={
              <>
                Grounding AI responses in
                <span className="text-portfolio-orange">
                  {' '}
                  study material.
                </span>
              </>
            }
          />

          <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {ragSteps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                }}
                className="group rounded-card-lg border border-portfolio-border bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-portfolio-orange">
                    {step.number}
                  </span>

                  {index < ragSteps.length - 1 && (
                    <ArrowUpRight
                      size={14}
                      className="text-portfolio-border transition group-hover:text-portfolio-orange"
                    />
                  )}
                </div>

                <h3 className="mt-3 text-sm font-bold text-portfolio-ink">
                  {step.title}
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-portfolio-muted">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 rounded-card-lg border border-portfolio-border bg-portfolio-surface-soft p-4"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
              <span className="text-xs font-bold text-portfolio-ink">
                Relevant Context
              </span>

              <span className="text-portfolio-orange">→</span>

              <span className="text-xs font-bold text-portfolio-ink">
                Tutor / Quiz Agent
              </span>

              <span className="text-portfolio-orange">→</span>

              <span className="text-xs font-bold text-portfolio-ink">
                Context-Aware Response
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          AI AGENTS
      ========================================================= */}
      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="AI Agents"
            title={
              <>
                Focused agents for
                <span className="text-portfolio-orange"> learning.</span>
              </>
            }
          />

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <AgentCard
              icon={Bot}
              title="Tutor Agent"
              description="Provides context-aware explanations using relevant study material."
              features={tutorFeatures}
            />

            <AgentCard
              icon={CheckCircle2}
              title="Quiz Agent"
              description="Generates customized quizzes based on learning context and selected parameters."
              features={quizFeatures}
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          RELIABILITY
      ========================================================= */}
      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-portfolio-ink shadow-card">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2">
                  <RefreshCw
                    size={17}
                    className="text-portfolio-orange"
                  />

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Reliability Engineering
                  </p>
                </div>

                <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                  AI should fail
                  <span className="text-portfolio-orange"> gracefully.</span>
                </h2>

                <p className="mt-3 max-w-md text-xs leading-5 text-white/50">
                  StudyFlow AI reduces dependence on a single provider through
                  provider abstraction, retries, fallback routing, and
                  open-source local embeddings.
                </p>
              </div>

              <div className="border-t border-white/10 p-6 lg:border-l lg:border-t-0 sm:p-7">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {[
                    'AI Request',
                    'Provider Manager',
                    'Gemini',
                    'Retry + Backoff',
                    'Groq Fallback',
                    'Response',
                  ].map((item, index, array) => (
                    <div
                      key={item}
                      className="flex items-center gap-2"
                    >
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold text-white/70">
                        {item}
                      </span>

                      {index < array.length - 1 && (
                        <span className="text-portfolio-orange">→</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {[
                    'Rate limits',
                    'Quota exhaustion',
                    'Temporary failures',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                    >
                      <p className="text-[10px] font-medium text-white/55">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECURITY + TECH STACK
      ========================================================= */}
      <section className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-3 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Security */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-card-lg border border-portfolio-border bg-white p-5 shadow-soft sm:p-6"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck
                size={17}
                className="text-portfolio-orange"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-portfolio-muted">
                Security
              </p>
            </div>

            <div className="mt-4 space-y-2">
              {securityItems.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl bg-portfolio-surface-soft p-3"
                  >
                    <Icon
                      size={15}
                      className="shrink-0 text-portfolio-orange"
                    />

                    <span className="text-xs font-semibold text-portfolio-ink">
                      {item.title}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-4 rounded-xl border border-portfolio-border bg-white p-3">
              <p className="text-[10px] leading-5 text-portfolio-muted">
                API keys are kept on the server and are not exposed to the
                frontend.
              </p>
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-card-lg border border-portfolio-border bg-white p-5 shadow-soft sm:p-6"
          >
            <div className="flex items-center gap-2">
              <FileText
                size={17}
                className="text-portfolio-orange"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-portfolio-muted">
                Technology Stack
              </p>
            </div>

            <div className="mt-5 space-y-4">
              <StackGroup
                title="Frontend"
                items={techStack.frontend}
              />

              <StackGroup
                title="Backend"
                items={techStack.backend}
              />

              <StackGroup
                title="Database"
                items={techStack.database}
              />

              <StackGroup
                title="AI / Machine Learning"
                items={techStack.ai}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CURRENT STATUS
      ========================================================= */}
      <section className="px-5 pb-14 pt-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl rounded-card-lg border border-portfolio-border bg-white p-5 shadow-soft sm:p-6"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-portfolio-teal" />

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-portfolio-muted">
                  Current Status
                </p>
              </div>

              <h2 className="mt-2 text-xl font-bold tracking-tight text-portfolio-ink">
                Core functionality is actively being developed.
              </h2>

              <p className="mt-2 max-w-3xl text-xs leading-5 text-portfolio-muted">
                Current functionality includes authentication, AI Learning
                Workspace, provider abstraction, automatic AI fallback,
                document processing, text chunking, local embeddings, vector
                similarity search, RAG-based responses, Tutor Agent, Quiz
                Agent, and interactive exam-style quizzes.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-portfolio-ink px-4 py-2.5 text-xs font-bold text-white transition duration-300 hover:bg-portfolio-orange"
            >
              Back to Portfolio

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}