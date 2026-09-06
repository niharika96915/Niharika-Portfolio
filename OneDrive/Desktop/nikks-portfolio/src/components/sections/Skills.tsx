import { motion } from 'motion/react'
import {
  BrainCircuit,
  Code2,
  Database,
  BarChart3,
  Wrench,
} from 'lucide-react'

const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Python', 'Data Structures & Algorithms', 'SQL'],
  },
  {
    title: 'Machine Learning & Data',
    icon: BrainCircuit,
    skills: [
      'Machine Learning',
      'Supervised Learning',
      'Regression',
      'KNN',
      'Model Evaluation',
      'Data Analysis',
      'Data Visualization',
    ],
  },
  {
    title: 'Libraries',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      'Git & GitHub',
      'Jupyter Notebook',
      'VS Code',
      'Power BI',
      'Streamlit',
      'n8n',
      'Docker',
    ],
  },
]

const softSkills = [
  'Problem Solving',
  'Analytical Thinking',
  'Communication',
]

export default function Skills() {
  return (
    <section
      id="skills"
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
              Skills & Tools
            </p>
          </div>

          <h2 className="mt-2 max-w-2xl text-2xl font-bold leading-tight tracking-[-0.035em] text-portfolio-ink sm:text-3xl lg:text-4xl">
            The tools I use to
            <span className="text-portfolio-orange"> build with AI.</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-5 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Main Skills */}
          <div className="grid gap-3 sm:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="rounded-card-lg border border-portfolio-border bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-portfolio-orange-soft">
                      <Icon
                        size={16}
                        className="text-portfolio-orange"
                      />
                    </div>

                    <h3 className="text-sm font-bold text-portfolio-ink">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-portfolio-border bg-portfolio-surface-soft px-2.5 py-1 text-[10px] font-semibold text-portfolio-ink"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-card-lg bg-portfolio-ink p-5 shadow-card"
          >
            <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-portfolio-orange/10" />

            <div className="relative">
              <div className="flex items-center gap-2">
                <BarChart3
                  size={18}
                  className="text-portfolio-orange"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                  Focus Areas
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold leading-tight tracking-tight text-white">
                Building practical
                <span className="text-portfolio-orange">
                  {' '}AI solutions.
                </span>
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/55">
                Combining machine learning, data analysis, Generative AI and
                automation to create useful applications.
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {['AI Development', 'Machine Learning', 'Generative AI', 'Automation'].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] font-semibold text-white/70"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Soft Skills
                </p>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/65"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}