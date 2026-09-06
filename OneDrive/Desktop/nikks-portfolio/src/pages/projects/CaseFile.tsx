import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import {
  ArrowLeft,
  ArrowUpRight,
  BrainCircuit,
  Database,
  Gauge,
  GitBranch,
  Map,
  MapPin,
  Network,
  Route,
  Search,
  ShieldCheck,
  Target,
  TriangleAlert,
} from 'lucide-react'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: string
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-portfolio-orange" />

        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-portfolio-muted">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-1.5 max-w-3xl text-xl font-bold leading-tight tracking-tight text-portfolio-ink sm:text-2xl">
        {title}
      </h2>

      {description && (
        <p className="mt-1.5 max-w-2xl text-[11px] leading-5 text-portfolio-muted sm:text-xs">
          {description}
        </p>
      )}
    </div>
  )
}

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-portfolio-border bg-white p-3.5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:shadow-card"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-portfolio-orange-soft">
        <Icon
          size={15}
          className="text-portfolio-orange"
        />
      </div>

      <h3 className="mt-2.5 text-xs font-bold text-portfolio-ink">
        {title}
      </h3>

      <p className="mt-1 text-[10px] leading-5 text-portfolio-muted">
        {description}
      </p>
    </motion.div>
  )
}

type PipelineStepProps = {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

function PipelineStep({
  number,
  icon: Icon,
  title,
  description,
}: PipelineStepProps) {
  return (
    <div className="rounded-2xl border border-portfolio-border bg-white p-3 shadow-soft">
      <div className="flex items-start gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-portfolio-surface-soft">
          <Icon
            size={15}
            className="text-portfolio-orange"
          />
        </div>

        <div>
          <p className="text-[8px] font-bold uppercase tracking-widest text-portfolio-muted">
            Step {number}
          </p>

          <h3 className="mt-0.5 text-xs font-bold text-portfolio-ink">
            {title}
          </h3>

          <p className="mt-1 text-[10px] leading-5 text-portfolio-muted">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function CaseFile() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-portfolio-bg px-4 pb-10 pt-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* BACK */}
        <button
          type="button"
          onClick={() => navigate('/#projects')}
          className="group mb-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-portfolio-muted transition hover:text-portfolio-orange"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />

          Back to Projects
        </button>

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid items-stretch gap-3 lg:grid-cols-[1.1fr_0.9fr]"
        >

          {/* HERO CONTENT */}
          <div className="rounded-card-lg bg-portfolio-ink p-5 shadow-card sm:p-6">

            <div className="flex flex-wrap items-center gap-1.5">

              <span className="rounded-full bg-portfolio-orange/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-portfolio-orange">
                AI + Geospatial Intelligence
              </span>

              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold text-white/50">
                03
              </span>

            </div>

            <h1 className="mt-4 max-w-2xl text-2xl font-bold leading-[1.05] tracking-tight text-white sm:text-3xl lg:text-4xl">
              CaseFile
              <span className="text-portfolio-orange">
                {' '}— Investigation Intelligence.
              </span>
            </h1>

            <p className="mt-1.5 text-xs font-semibold text-portfolio-teal">
              AI-Powered Missing Person Investigation & Location Intelligence
            </p>

            <p className="mt-3 max-w-xl text-xs leading-5 text-white/60 sm:text-sm">
              An AI-powered investigation support system that analyzes
              historical GPS movement patterns, geographical behavior,
              temporal information and mobility trends to predict probable
              locations and routes in simulated missing-person cases.
            </p>

            {/* TAGS */}
            <div className="mt-4 flex flex-wrap gap-1.5">

              {[
                'Python',
                'Scikit-learn',
                'Streamlit',
                'GeoPandas',
                'Folium',
                'SHAP',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-semibold text-white/65"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* LINKS */}
            <div className="mt-5 grid gap-2 sm:grid-cols-2">

              <a
                href="https://casefile-missing-ai.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-white/10 bg-white/5 p-2.5 transition hover:bg-white/10"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-white/35">
                      Live Demo
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold text-white/70">
                      Open CaseFile
                    </p>
                  </div>

                  <ArrowUpRight
                    size={13}
                    className="text-portfolio-orange transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </div>
              </a>

              <a
                href="https://github.com/niharika96915/CASEFILE-Missing-AI"
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-white/10 bg-white/5 p-2.5 transition hover:bg-white/10"
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-white/35">
                      GitHub
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold text-white/70">
                      View Repository
                    </p>
                  </div>

                  <ArrowUpRight
                    size={13}
                    className="text-portfolio-orange transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />

                </div>
              </a>

            </div>
          </div>

          {/* SCREENSHOT */}
          <div className="relative overflow-hidden rounded-card-lg border border-portfolio-border bg-white p-1.5 shadow-card">

            <div className="relative aspect-video overflow-hidden rounded-2xl bg-portfolio-ink">

              <img
                src="/projects/CaseFile.png"
                alt="CaseFile investigation intelligence dashboard"
                className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-portfolio-ink/30 via-transparent to-transparent" />

            </div>

            <div className="flex items-center justify-between px-2 py-1.5">

              <p className="text-sm font-semibold text-portfolio-ink">
                Investigation Intelligence Dashboard
</p>
              <Search
                size={14}
                className="text-portfolio-orange"
              />

            </div>
          </div>

        </motion.section>

        {/* OVERVIEW */}
        <section className="mt-7">

          <SectionHeading
            eyebrow="Overview"
            title={
              <>
                Turning movement data into
                <span className="text-portfolio-orange">
                  {' '}probabilistic intelligence.
                </span>
              </>
            }
            description="CASEFILE combines machine learning, geospatial analysis, behavioral patterns and temporal intelligence to support simulated investigation scenarios."
          />

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">

            <FeatureCard
              icon={MapPin}
              title="Location Prediction"
              description="Random Forest predicts probable movement zones using historical and case-level features."
            />

            <FeatureCard
              icon={Route}
              title="Route Intelligence"
              description="Markov Chain modeling estimates probable transitions between geographical zones."
            />

            <FeatureCard
              icon={TriangleAlert}
              title="Anomaly Detection"
              description="Isolation Forest identifies statistically unusual movement patterns."
            />

            <FeatureCard
              icon={Target}
              title="Search Priority"
              description="Multiple intelligence signals are combined into a 0–100 priority score."
            />

          </div>
        </section>

        {/* PROBLEM / SOLUTION */}
        <section className="mt-7 grid gap-3 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="rounded-card-lg border border-portfolio-border bg-white p-4 shadow-soft"
          >

            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-portfolio-muted">
              The Problem
            </p>

            <h2 className="mt-1.5 text-lg font-bold tracking-tight text-portfolio-ink">
              Raw movement data is difficult to interpret.
            </h2>

            <p className="mt-2 text-[11px] leading-5 text-portfolio-muted">
              Historical GPS trajectories contain valuable spatial and
              temporal patterns, but extracting useful movement intelligence
              requires combining multiple analytical signals.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="rounded-card-lg bg-portfolio-orange p-4 shadow-soft"
          >

            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/65">
              The Solution
            </p>

            <h2 className="mt-1.5 text-lg font-bold tracking-tight text-white">
              Combine multiple intelligence layers.
            </h2>

            <p className="mt-2 text-[11px] leading-5 text-white/75">
              CASEFILE combines prediction, clustering, anomaly detection,
              route modeling and geospatial visualization into one
              investigation-support workflow.
            </p>

          </motion.div>

        </section>

        {/* ML PIPELINE */}
        <section className="mt-7">

          <SectionHeading
            eyebrow="Machine Learning Pipeline"
            title={
              <>
                From GPS trajectories to
                <span className="text-portfolio-orange">
                  {' '}investigation intelligence.
                </span>
              </>
            }
            description="The system processes historical movement data through multiple machine learning and geospatial analysis stages."
          />

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">

            <PipelineStep
              number="01"
              icon={Database}
              title="Data Processing"
              description="Clean GPS trajectory data and prepare case-level features."
            />

            <PipelineStep
              number="02"
              icon={GitBranch}
              title="Feature Engineering"
              description="Extract movement, distance, speed and temporal behavior."
            />

            <PipelineStep
              number="03"
              icon={BrainCircuit}
              title="ML Analysis"
              description="Apply clustering, anomaly detection and location prediction."
            />

            <PipelineStep
              number="04"
              icon={Gauge}
              title="Intelligence Score"
              description="Combine model outputs into search-priority recommendations."
            />

          </div>

          {/* PIPELINE BAR */}
          <div className="mt-4 overflow-hidden rounded-card-lg bg-portfolio-ink p-4 shadow-card">

            <div className="flex flex-wrap items-center justify-center gap-1.5">

              {[
                'GPS Data',
                'Preprocessing',
                'Feature Engineering',
                'Clustering',
                'Anomaly Detection',
                'Random Forest',
                'Markov Chain',
                'Priority Score',
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5"
                >

                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[9px] font-semibold text-white/70">
                    {item}
                  </span>

                  {index < 7 && (
                    <ArrowUpRight
                      size={11}
                      className="text-portfolio-orange"
                    />
                  )}

                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ML METHODS */}
        <section className="mt-7">

          <SectionHeading
            eyebrow="ML Intelligence"
            title={
              <>
                Multiple models,
                <span className="text-portfolio-orange">
                  {' '}different intelligence signals.
                </span>
              </>
            }
          />

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">

            <FeatureCard
              icon={Target}
              title="Random Forest"
              description="Predicts probable movement zones using historical behavior and case features."
            />

            <FeatureCard
              icon={Map}
              title="K-Means + DBSCAN"
              description="Discovers geographical movement zones and frequently visited regions."
            />

            <FeatureCard
              icon={TriangleAlert}
              title="Isolation Forest"
              description="Detects unusual movement patterns based on distance, speed and duration."
            />

            <FeatureCard
              icon={Route}
              title="Markov Chain"
              description="Models transitions between geographical zones for route intelligence."
            />

          </div>
        </section>

        {/* SEARCH PRIORITY */}
        <section className="mt-7">

          <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">

            {/* SCORE */}
            <div className="rounded-card-lg bg-portfolio-ink p-5 shadow-card">

              <div className="flex items-center gap-2">

                <Target
                  size={16}
                  className="text-portfolio-orange"
                />

                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                  Search Priority
                </p>

              </div>

              <div className="mt-4 flex items-end gap-2">

                <span className="text-4xl font-bold tracking-tight text-white">
                  0–100
                </span>

                <span className="mb-1 text-[10px] text-white/40">
                  priority score
                </span>

              </div>

              <p className="mt-2 text-[10px] leading-5 text-white/50">
                A multi-factor score combines model prediction and behavioral
                intelligence to prioritize geographical search areas.
              </p>

              <div className="mt-4 space-y-2">

                {[
                  ['ML prediction probability', '30%'],
                  ['Historical visit frequency', '20%'],
                  ['Route similarity', '15%'],
                  ['Distance relevance', '15%'],
                  ['Time relevance', '10%'],
                  ['Anomaly evidence', '10%'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-white/10 pb-1.5"
                  >
                    <span className="text-[9px] text-white/55">
                      {label}
                    </span>

                    <span className="text-[9px] font-bold text-portfolio-orange">
                      {value}
                    </span>
                  </div>
                ))}

              </div>

            </div>

            {/* PRIORITY LEVELS */}
            <div className="rounded-card-lg border border-portfolio-border bg-white p-4 shadow-soft">

              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-portfolio-muted">
                Priority Levels
              </p>

              <div className="mt-4 space-y-2">

                {[
                  ['0–30', 'Low'],
                  ['31–60', 'Medium'],
                  ['61–80', 'High'],
                  ['81–100', 'Very High'],
                ].map(([score, level]) => (
                  <div
                    key={score}
                    className="flex items-center justify-between rounded-xl bg-portfolio-surface-soft px-3 py-2.5"
                  >

                    <span className="text-[10px] font-bold text-portfolio-ink">
                      {score}
                    </span>

                    <span className="text-[10px] font-semibold text-portfolio-muted">
                      {level}
                    </span>

                  </div>
                ))}

              </div>

              <div className="mt-4 rounded-xl bg-portfolio-orange-soft p-3">

                <p className="text-[9px] font-bold text-portfolio-orange">
                  Probabilistic recommendation
                </p>

                <p className="mt-1 text-[9px] leading-4 text-portfolio-muted">
                  The score helps prioritize search areas and should not be
                  interpreted as a guaranteed location prediction.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* EXPLAINABLE AI + MAP */}
        <section className="mt-7">

          <SectionHeading
            eyebrow="Intelligence Layer"
            title={
              <>
                Predictions with context,
                <span className="text-portfolio-orange">
                  {' '}not just numbers.
                </span>
              </>
            }
          />

          <div className="mt-4 grid gap-2.5 md:grid-cols-2">

            <FeatureCard
              icon={BrainCircuit}
              title="Explainable AI"
              description="Random Forest feature importance and optional SHAP analysis help explain which factors influence predictions."
            />

            <FeatureCard
              icon={Map}
              title="Interactive Geospatial Map"
              description="Folium and GeoPandas visualize probable locations, movement zones and search-priority areas."
            />

          </div>

        </section>

        {/* DASHBOARD */}
        <section className="mt-7">

          <SectionHeading
            eyebrow="Investigation Dashboard"
            title={
              <>
                One interface for the complete
                <span className="text-portfolio-orange">
                  {' '}investigation workflow.
                </span>
              </>
            }
            description="The Streamlit dashboard brings the project's intelligence modules together into dedicated investigation views."
          />

          <div className="mt-4 rounded-card-lg border border-portfolio-border bg-white p-4 shadow-soft">

            <div className="flex flex-wrap gap-1.5">

              {[
                'Investigation Overview',
                'Location Prediction',
                'Search Priority',
                'Investigation Map',
                'Movement Intelligence',
                'Route Intelligence',
                'Anomaly Analysis',
                'Explainable AI',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-portfolio-surface-soft px-2.5 py-1.5 text-[9px] font-semibold text-portfolio-ink"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* RESPONSIBLE AI */}
        <section className="mt-7">

          <div className="rounded-card-lg border border-portfolio-border bg-white p-4 shadow-soft">

            <div className="flex items-start gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-portfolio-teal-soft">
                <ShieldCheck
                  size={17}
                  className="text-portfolio-teal"
                />
              </div>

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-portfolio-muted">
                  Responsible AI
                </p>

                <h2 className="mt-1 text-lg font-bold tracking-tight text-portfolio-ink">
                  Built as an academic simulation.
                </h2>

                <p className="mt-2 text-[10px] leading-5 text-portfolio-muted">
                  CASEFILE uses public GPS trajectory data and synthetic case
                  information. Predictions are probabilistic and are not
                  intended to determine or prove a person's actual location.
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">

                  {[
                    'Synthetic case data',
                    'No PII',
                    'Probabilistic predictions',
                    'Anomaly ≠ criminal behavior',
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-portfolio-teal-soft px-2.5 py-1 text-[9px] font-semibold text-portfolio-teal"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* TECH STACK */}
        <section className="mt-7">

          <div className="rounded-card-lg bg-portfolio-ink p-4 shadow-card">

            <div className="flex items-center gap-2">

              <Network
                size={16}
                className="text-portfolio-orange"
              />

              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                Technology Stack
              </p>

            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">

              {[
                'Python',
                'Pandas',
                'NumPy',
                'Scikit-learn',
                'Random Forest',
                'K-Means',
                'DBSCAN',
                'Isolation Forest',
                'Markov Chain',
                'SHAP',
                'GeoPandas',
                'Shapely',
                'Folium',
                'Matplotlib',
                'Seaborn',
                'Plotly',
                'Streamlit',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[9px] font-semibold text-white/65"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* STATUS */}
        <section className="mt-7">

          <div className="rounded-card-lg border border-portfolio-border bg-white p-4 shadow-soft">

            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

              <div>

                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-portfolio-muted">
                  Project Status
                </p>

                <h2 className="mt-1 text-lg font-bold tracking-tight text-portfolio-ink">
                  Advanced AI + Geospatial Intelligence System.
                </h2>

                <p className="mt-1 text-[10px] text-portfolio-muted">
                  Machine Learning · Geospatial Analysis · Explainable AI
                </p>

              </div>

              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-portfolio-teal-soft px-2.5 py-1.5 text-[9px] font-bold text-portfolio-teal">

                <span className="h-1.5 w-1.5 rounded-full bg-portfolio-teal" />

                Live Demo

              </span>

            </div>

          </div>

        </section>

        {/* NAVIGATION */}
        <div className="mt-7 flex items-center justify-between border-t border-portfolio-border pt-4">

          <button
            type="button"
            onClick={() => navigate('/projects/placement-preparation-agent')}
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-portfolio-muted transition hover:text-portfolio-orange"
          >
            <ArrowLeft size={13} />
            Previous Project
          </button>

          <button
            type="button"
            onClick={() => navigate('/#projects')}
            className="group inline-flex items-center gap-1.5 text-[10px] font-semibold text-portfolio-ink transition hover:text-portfolio-orange"
          >
            All Projects

            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>

        </div>

      </div>
    </main>
  )
}