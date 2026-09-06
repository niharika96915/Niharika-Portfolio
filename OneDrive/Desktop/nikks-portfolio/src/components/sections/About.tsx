import { motion } from 'motion/react'
import {
  ArrowUpRight,
  BrainCircuit,
  Layers3,
  Rocket,
} from 'lucide-react'

const highlights = [
  {
    icon: BrainCircuit,
    title: 'AI / ML',
    description:
      'Building practical ML and computer vision solutions that turn data into useful decisions.',
  },
  {
    icon: Layers3,
    title: 'Generative AI',
    description:
      'Exploring LLMs, RAG pipelines and context-aware AI applications.',
  },
  {
    icon: Rocket,
    title: 'AI Agents',
    description:
      'Designing intelligent workflows that can reason, retrieve information and take action.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-portfolio-orange" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-portfolio-muted">
              About Me
            </p>
          </div>

          <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.035em] text-portfolio-ink sm:text-4xl lg:text-[2.8rem]">
            I don't just study AI.
            <span className="text-portfolio-orange">
              {' '}I build with it.
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-card-lg border border-portfolio-border bg-white p-6 shadow-soft sm:p-7"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-portfolio-orange-soft px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-portfolio-orange">
                My Approach
              </span>

              <ArrowUpRight
                size={18}
                className="text-portfolio-muted"
              />
            </div>

            <div className="mt-6 space-y-4 text-sm leading-6 text-portfolio-muted sm:text-[15px]">
              <p>
                I'm a B.Tech AI student focused on building intelligent
                products—not just experimenting with models.
              </p>

              <p>
                My work spans{' '}
                <span className="font-semibold text-portfolio-ink">
                  Machine Learning, Generative AI, RAG and AI-powered applications
                </span>
                , with a strong interest in turning complex ideas into simple,
                useful experiences.
              </p>

              <p>
                Right now, I'm pushing deeper into{' '}
                <span className="font-semibold text-portfolio-ink">
                  AI agents, LLM systems and production-ready AI
                </span>
                — learning how intelligent systems can become reliable
                real-world products.
              </p>
            </div>

            {/* Focus row */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['AI Engineering', 'GenAI', 'RAG', 'AI Agents'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-portfolio-border bg-portfolio-surface-soft px-3 py-1.5 text-xs font-semibold text-portfolio-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Focus cards */}
          <div className="grid gap-4">

            {highlights.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="group flex items-center gap-4 rounded-card-lg border border-portfolio-border bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-portfolio-surface-soft">
                    <Icon
                      size={20}
                      className="text-portfolio-orange"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold text-portfolio-ink">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-portfolio-muted sm:text-[13px]">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-portfolio-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </motion.div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}