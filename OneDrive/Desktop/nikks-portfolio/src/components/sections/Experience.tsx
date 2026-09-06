import { motion } from 'motion/react'
import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  LineChart,
} from 'lucide-react'

const experience = {
  role: 'AI/ML Intern',
  company: 'Edusills',
  program: 'Google for Developers Program',
  date: 'April 2026 – June 2026',
  status: 'Present',
  points: [
    'Applied machine learning concepts to real-world datasets for analysis and insights.',
    'Worked on Python-based data analysis and model-building tasks.',
    'Implemented techniques such as feature extraction and pattern recognition.',
    'Developed practical understanding of ML workflows, data preprocessing, and evaluation.',
  ],
}

const focusAreas = [
  {
    icon: BrainCircuit,
    label: 'Machine Learning',
  },
  {
    icon: Database,
    label: 'Data Analysis',
  },
  {
    icon: LineChart,
    label: 'Model Development',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-5 py-10 sm:px-8 lg:px-12 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-portfolio-orange" />

            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-portfolio-muted">
              Experience
            </p>
          </div>

          <h2 className="mt-2 max-w-2xl text-2xl font-bold leading-tight tracking-[-0.035em] text-portfolio-ink sm:text-3xl lg:text-4xl">
            Learning AI by
            <span className="text-portfolio-orange"> building with it.</span>
          </h2>
        </motion.div>

        {/* Experience Card */}
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-5 overflow-hidden rounded-card-lg border border-portfolio-border bg-white shadow-soft"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* Left */}
            <div className="bg-portfolio-ink p-5 sm:p-6 lg:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-portfolio-orange/15">
                  <BrainCircuit
                    size={20}
                    className="text-portfolio-orange"
                  />
                </div>

                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white/60">
                  {experience.date}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">
                {experience.role}
              </h3>

              <p className="mt-1 text-sm font-semibold text-portfolio-orange">
                {experience.company}
              </p>

              <p className="mt-0.5 text-xs text-white/50">
                {experience.program}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {focusAreas.map((item) => {
                  const Icon = item.icon

                  return (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] font-medium text-white/65"
                    >
                      <Icon size={12} />
                      {item.label}
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Right */}
            <div className="p-5 sm:p-6 lg:p-7">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-portfolio-muted">
                  What I worked on
                </p>

                <ArrowUpRight
                  size={17}
                  className="text-portfolio-muted"
                />
              </div>

              <div className="mt-4 space-y-3">
                {experience.points.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.06,
                    }}
                    className="flex gap-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-orange" />

                    <p className="text-xs leading-5 text-portfolio-muted sm:text-[13px]">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 border-t border-portfolio-border pt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-portfolio-muted">
                    Focus
                  </span>

                  {[
                    'Python',
                    'Machine Learning',
                    'Data Preprocessing',
                    'Model Evaluation',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-portfolio-surface-soft px-2.5 py-1 text-[10px] font-semibold text-portfolio-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}