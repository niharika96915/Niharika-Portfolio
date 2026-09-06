import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  FileSpreadsheet,
  Mail,
  MessageSquare,
  Network,
  Settings2,
  Workflow,
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

      <p className="mt-1 text-[10px] leading-4.5 text-portfolio-muted">
        {description}
      </p>
    </motion.div>
  )
}

type WorkflowStepProps = {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

function WorkflowStep({
  number,
  icon: Icon,
  title,
  description,
}: WorkflowStepProps) {
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

          <p className="mt-1 text-[10px] leading-4.5 text-portfolio-muted">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function PlacementPreparationAgent() {
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
  className="grid items-start gap-3 lg:grid-cols-[1.1fr_0.9fr]"
>

          {/* LEFT HERO */}
          <div className="rounded-card-lg bg-portfolio-ink p-5 shadow-card sm:p-6">

            <div className="flex flex-wrap items-center gap-1.5">
              <span className="rounded-full bg-portfolio-orange/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-portfolio-orange">
                AI Automation
              </span>

              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold text-white/50">
                02
              </span>
            </div>

            <h1 className="mt-4 max-w-2xl text-2xl font-bold leading-[1.05] tracking-tight text-white sm:text-3xl lg:text-4xl">
              Placement
              <span className="text-portfolio-orange">
                {' '}Preparation Agent.
              </span>
            </h1>

            <p className="mt-1.5 text-xs font-semibold text-portfolio-teal">
              AI Placement Assistant
            </p>

            <p className="mt-3 max-w-xl text-xs leading-5 text-white/60 sm:text-sm">
              An automated AI-powered placement preparation system that
              generates personalized aptitude, coding and interview
              preparation material and delivers it directly to students.
            </p>

            {/* TECHNOLOGIES */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {[
                'n8n',
                'Google Gemini',
                'Google Sheets',
                'Gmail',
                'Docker',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-semibold text-white/65"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* RESOURCES */}
            <div className="mt-5 grid gap-2 sm:grid-cols-2">

              <div className="rounded-xl border border-white/10 bg-white/5 p-2.5">
                <p className="text-[8px] font-bold uppercase tracking-wider text-white/35">
                  Live Demo
                </p>

                <p className="mt-0.5 text-[10px] font-semibold text-white/60">
                  Coming Soon
                </p>
              </div>

               <a
                href="https://github.com/niharika96915/Placement-Preperation-Agent.git"
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
          <div className="relative overflow-hidden rounded-card-lg border border-portfolio-border bg-white p-1.5 pb-2 shadow-card">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-portfolio-ink">

              <img
                src="/projects/Placement-Preperation.png"
                alt="Placement Preparation Agent n8n workflow"
                className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-portfolio-ink/25 via-transparent to-transparent" />

            </div>

            <div className="flex items-center justify-between px-2 py-1">
              <p className="text-sm font-semibold text-portfolio-ink">
                Automated n8n workflow
              </p>

              <Workflow
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
                Turning daily placement preparation into an
                <span className="text-portfolio-orange">
                  {' '}automated workflow.
                </span>
              </>
            }
            description="The system combines Generative AI with workflow automation to generate preparation material and deliver it without requiring students to manually request new content."
          />

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">

            <FeatureCard
              icon={BrainCircuit}
              title="AI Content Generation"
              description="Google Gemini generates aptitude, coding and interview preparation material."
            />

            <FeatureCard
              icon={FileSpreadsheet}
              title="Google Sheets"
              description="Student information and generated preparation content are managed through Sheets."
            />

            <FeatureCard
              icon={Mail}
              title="Automated Delivery"
              description="Generated preparation material is sent to students through Gmail."
            />

            <FeatureCard
              icon={Workflow}
              title="n8n Automation"
              description="The complete process is connected through an automated n8n workflow."
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
              Placement preparation can become repetitive.
            </h2>

            <p className="mt-2 text-[11px] leading-5 text-portfolio-muted">
              Students need regular practice across aptitude, coding and
              interviews, but preparing fresh practice material and delivering
              it consistently can require repeated manual effort.
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
              Automate the entire preparation cycle.
            </h2>

            <p className="mt-2 text-[11px] leading-5 text-white/75">
              The agent connects Google Sheets, Gemini, n8n and Gmail to
              generate preparation content and automatically send it to the
              student.
            </p>
          </motion.div>

        </section>

        {/* WORKFLOW */}
        <section className="mt-7">

          <SectionHeading
            eyebrow="Workflow"
            title={
              <>
                From student data to
                <span className="text-portfolio-orange">
                  {' '}personalized preparation.
                </span>
              </>
            }
            description="The workflow coordinates data retrieval, AI generation, sheet updates and email delivery."
          />

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">

            <WorkflowStep
              number="01"
              icon={FileSpreadsheet}
              title="Get Student Data"
              description="Reads student information and preparation details from Google Sheets."
            />

            <WorkflowStep
              number="02"
              icon={BrainCircuit}
              title="Generate Content"
              description="Gemini generates aptitude questions, coding questions and interview tips."
            />

            <WorkflowStep
              number="03"
              icon={Settings2}
              title="Update Sheet"
              description="Generated content is merged and written back into the corresponding sheet row."
            />

            <WorkflowStep
              number="04"
              icon={Mail}
              title="Send Material"
              description="The completed preparation material is delivered through Gmail."
            />

          </div>

          {/* WORKFLOW PIPELINE */}
          <div className="mt-4 overflow-hidden rounded-card-lg bg-portfolio-ink p-4 shadow-card">

            <div className="flex flex-wrap items-center justify-center gap-1.5 text-center">

              {[
                'Google Sheets',
                'n8n',
                'Google Gemini',
                'Generated Content',
                'Updated Sheet',
                'Gmail',
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5"
                >

                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[9px] font-semibold text-white/70">
                    {item}
                  </span>

                  {index < 5 && (
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

        {/* AI GENERATION */}
        <section className="mt-7">

          <SectionHeading
            eyebrow="AI Generation"
            title={
              <>
                Three preparation streams,
                <span className="text-portfolio-orange">
                  {' '}one automated agent.
                </span>
              </>
            }
          />

          <div className="mt-4 grid gap-2.5 md:grid-cols-3">

            <FeatureCard
              icon={BrainCircuit}
              title="Aptitude"
              description="Generates aptitude questions and answers for regular practice."
            />

            <FeatureCard
              icon={Bot}
              title="Coding"
              description="Generates coding questions and corresponding solutions for technical preparation."
            />

            <FeatureCard
              icon={MessageSquare}
              title="Interview Tips"
              description="Generates interview-focused preparation tips to support placement readiness."
            />

          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="mt-7">

          <SectionHeading
            eyebrow="Architecture"
            title={
              <>
                A lightweight automation architecture
                <span className="text-portfolio-orange">
                  {' '}built around n8n.
                </span>
              </>
            }
          />

          <div className="mt-4 grid gap-2.5 lg:grid-cols-[0.85fr_1.15fr]">

            {/* FLOW */}
            <div className="rounded-card-lg bg-portfolio-ink p-4 shadow-card">

              <div className="flex items-center gap-2">

                <Network
                  size={16}
                  className="text-portfolio-orange"
                />

                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                  System Flow
                </p>

              </div>

              <div className="mt-4 space-y-1.5">

                {[
                  'Google Sheets',
                  'n8n Workflow',
                  'Google Gemini',
                  'Content Generation',
                  'Google Sheets Update',
                  'Gmail',
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >

                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[8px] font-bold text-white/45">
                      {index + 1}
                    </span>

                    <span className="text-[10px] font-semibold text-white/70">
                      {item}
                    </span>

                  </div>
                ))}

              </div>
            </div>

            {/* COMPONENTS */}
            <div className="rounded-card-lg border border-portfolio-border bg-white p-4 shadow-soft">

              <div className="grid gap-2 sm:grid-cols-2">

                <div className="rounded-xl bg-portfolio-surface-soft p-3">
                  <p className="text-[8px] font-bold uppercase tracking-wider text-portfolio-muted">
                    Automation
                  </p>

                  <h3 className="mt-0.5 text-xs font-bold text-portfolio-ink">
                    n8n
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-portfolio-muted">
                    Coordinates the complete workflow from input to delivery.
                  </p>
                </div>

                <div className="rounded-xl bg-portfolio-surface-soft p-3">
                  <p className="text-[8px] font-bold uppercase tracking-wider text-portfolio-muted">
                    Intelligence
                  </p>

                  <h3 className="mt-0.5 text-xs font-bold text-portfolio-ink">
                    Google Gemini
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-portfolio-muted">
                    Generates placement preparation content.
                  </p>
                </div>

                <div className="rounded-xl bg-portfolio-surface-soft p-3">
                  <p className="text-[8px] font-bold uppercase tracking-wider text-portfolio-muted">
                    Storage
                  </p>

                  <h3 className="mt-0.5 text-xs font-bold text-portfolio-ink">
                    Google Sheets
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-portfolio-muted">
                    Stores student details and generated material.
                  </p>
                </div>

                <div className="rounded-xl bg-portfolio-surface-soft p-3">
                  <p className="text-[8px] font-bold uppercase tracking-wider text-portfolio-muted">
                    Delivery
                  </p>

                  <h3 className="mt-0.5 text-xs font-bold text-portfolio-ink">
                    Gmail
                  </h3>

                  <p className="mt-1 text-[10px] leading-4 text-portfolio-muted">
                    Sends generated preparation material.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* DATA */}
        <section className="mt-7">

          <SectionHeading
            eyebrow="Data"
            title={
              <>
                Simple student data,
                <span className="text-portfolio-orange">
                  {' '}useful AI output.
                </span>
              </>
            }
          />

          <div className="mt-4 overflow-hidden rounded-card-lg border border-portfolio-border bg-white shadow-soft">

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead className="bg-portfolio-surface-soft">

                  <tr>

                    {[
                      'Name',
                      'Email',
                      'Aptitude',
                      'Coding',
                      'InterviewTip',
                    ].map((heading) => (
                      <th
                        key={heading}
                        className="px-3 py-2.5 text-[9px] font-bold uppercase tracking-wider text-portfolio-muted"
                      >
                        {heading}
                      </th>
                    ))}

                  </tr>

                </thead>

                <tbody>

                  <tr className="border-t border-portfolio-border">

                    <td className="px-3 py-3 text-[10px] font-semibold text-portfolio-ink">
                      Student Name
                    </td>

                    <td className="px-3 py-3 text-[10px] text-portfolio-muted">
                      student@email.com
                    </td>

                    <td className="px-3 py-3 text-[10px] text-portfolio-muted">
                      AI generated
                    </td>

                    <td className="px-3 py-3 text-[10px] text-portfolio-muted">
                      AI generated
                    </td>

                    <td className="px-3 py-3 text-[10px] text-portfolio-muted">
                      AI generated
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>
          </div>
        </section>

        {/* KEY CAPABILITIES */}
        <section className="mt-7">

          <SectionHeading
            eyebrow="Key Capabilities"
            title={
              <>
                Built for consistent,
                <span className="text-portfolio-orange">
                  {' '}automated preparation.
                </span>
              </>
            }
          />

          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">

            {[
              'Aptitude question generation',
              'Coding question generation',
              'Interview preparation tips',
              'Google Sheets integration',
              'Automated Gmail delivery',
              'n8n workflow automation',
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 rounded-xl border border-portfolio-border bg-white p-2.5 shadow-soft"
              >

                <CheckCircle2
                  size={14}
                  className="shrink-0 text-portfolio-orange"
                />

                <span className="text-[10px] font-semibold text-portfolio-ink">
                  {feature}
                </span>

              </div>
            ))}

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
                'n8n',
                'Google Gemini',
                'Google Sheets',
                'Gmail',
                'Docker',
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] font-semibold text-white/70"
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
                  AI-powered placement automation system.
                </h2>

                <p className="mt-1 text-[10px] text-portfolio-muted">
                  Built with n8n, Gemini, Google Sheets, Gmail and Docker.
                </p>

              </div>

              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-portfolio-teal-soft px-2.5 py-1.5 text-[9px] font-bold text-portfolio-teal">

                <span className="h-1.5 w-1.5 rounded-full bg-portfolio-teal" />

                Active Project

              </span>

            </div>

          </div>

        </section>

        {/* BOTTOM NAV */}
        <div className="mt-7 flex items-center justify-between border-t border-portfolio-border pt-4">

          <button
            type="button"
            onClick={() => navigate('/#projects')}
            className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-portfolio-muted transition hover:text-portfolio-orange"
          >
            <ArrowLeft size={13} />
            All Projects
          </button>

          <button
            type="button"
            onClick={() => navigate('/projects/casefile')}
            className="group inline-flex items-center gap-1.5 text-[10px] font-semibold text-portfolio-ink transition hover:text-portfolio-orange"
          >
            Next Project

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