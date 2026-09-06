import { motion } from 'motion/react'
import {
  ArrowDownRight,
  BrainCircuit,
  Code2,
  Database,
  Sparkles,
} from 'lucide-react'

const techBadges = [
  {
    label: 'AI / ML',
    icon: BrainCircuit,
    position: 'left-[-1rem] top-24',
  },
  {
    label: 'RAG',
    icon: Database,
    position: 'right-[-1rem] top-16',
  },
  {
    label: 'LLMs',
    icon: Sparkles,
    position: 'right-[-1.25rem] top-1/2',
  },
  {
    label: 'Python',
    icon: Code2,
    position: 'left-[-0.5rem] bottom-20',
  },
]
export default function Hero() {
  return (
    <section
  id="home"
  className="relative box-border flex min-h-svh items-center overflow-hidden px-5 pb-6 pt-24 sm:px-8 lg:px-12"
>
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-portfolio-orange-soft/70 blur-3xl" />

        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-portfolio-teal-soft/80 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10"
        >
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-portfolio-border bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-muted shadow-soft backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-portfolio-teal" />
            AI Developer · GenAI · Machine Learning
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-portfolio-ink sm:text-4xl lg:text-[3.25rem] xl:text-[4.8rem]">
            I build{' '}
            <span className="text-portfolio-orange">
              intelligent systems
            </span>{' '}
            that turn ideas into real-world products.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-6 text-portfolio-muted sm:text-base sm:leading-7">
            B.Tech AI student focused on AI/ML, Generative AI, RAG systems,
            AI agents and intelligent applications that solve practical
            problems.
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-portfolio-ink px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-portfolio-orange"
            >
              View My Projects

              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:-rotate-45"
              />
            </a>

            <a
              href="/resume/Niharika-Lakhera-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-portfolio-border bg-white px-6 py-3.5 text-sm font-semibold text-portfolio-ink transition duration-300 hover:-translate-y-1 hover:border-portfolio-orange hover:text-portfolio-orange"
            >
              Download Resume
            </a>
          </div>

          {/* Exploring pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-portfolio-teal/20 bg-portfolio-teal-soft/70 px-4 py-2.5"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-portfolio-teal opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-portfolio-teal" />
            </span>

            <span className="text-sm font-medium text-portfolio-ink">
              Currently Exploring{' '}
              <span className="font-semibold">RAG + AI Agents</span>
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT AVATAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          {/* Main glow */}
          <div className="absolute h-[75%] w-[75%] rounded-full bg-portfolio-orange-soft blur-3xl" />

          <div className="relative aspect-square w-full max-w-130">
            
            {/* Decorative circle */}
            <div className="absolute inset-[8%] rounded-full border border-portfolio-orange/15" />

            <div className="absolute inset-[15%] rounded-full border border-portfolio-teal/15" />

            {/* Avatar blend */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="avatar-blend absolute inset-0 overflow-hidden"
            >
              <img
  src="/avatar/Niharika.jpeg"
  alt="Niharika Lakhera"
  className="h-[115%] w-[125%] object-contain object-bottom brightness-100 contrast-110 saturate-95"
/>

              {/* Image edge blending */}
              {/* Image edge blending */}
               <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-portfolio-bg/75 via-transparent to-portfolio-bg/5" />

               <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-portfolio-bg/10 via-transparent to-portfolio-bg/10" />   
            </motion.div>

            {/* Tech badges */}
{techBadges.map((badge, index) => {
  const Icon = badge.icon

  return (
    <motion.div
      key={badge.label}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, index % 2 === 0 ? -7 : 7, 0],
      }}
      transition={{
        opacity: {
          duration: 0.5,
          delay: 0.5 + index * 0.12,
        },
        scale: {
          duration: 0.5,
          delay: 0.5 + index * 0.12,
        },
        y: {
          duration: 3.5 + index * 0.4,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
      className={`absolute ${badge.position} z-20 hidden items-center gap-2.5 rounded-full border border-white/80 bg-white/95 px-5 py-3 text-sm font-semibold text-portfolio-ink shadow-card backdrop-blur-md sm:flex`}
    >
      <Icon
        size={19}
        strokeWidth={2.2}
        className="text-portfolio-orange"
      />

      {badge.label}
    </motion.div>
  )
})}

            {/* Small decorative dots */}
            <span className="absolute right-[18%] top-[8%] h-3 w-3 rounded-full bg-portfolio-orange" />
            <span className="absolute bottom-[15%] left-[5%] h-2.5 w-2.5 rounded-full bg-portfolio-teal" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-portfolio-muted md:flex"
      >
        Scroll to explore
        <ArrowDownRight size={15} />
      </motion.a>
    </section>
  )
}