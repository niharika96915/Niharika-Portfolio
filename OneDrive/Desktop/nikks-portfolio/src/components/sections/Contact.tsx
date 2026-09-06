import { useForm } from '@formspree/react'
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  BrainCircuit,
  Mail,
  Send,
  Sparkles,
} from 'lucide-react'

const interests = [
  'AI Products',
  'Generative AI',
  'RAG Systems',
  'AI Agents',
  'Machine Learning',
  'Collaborations',
]

export default function Contact() {
  const [state, handleSubmit] = useForm('mppzjdyg')

  return (
    <section
      id="contact"
      className="relative px-5 pb-3 pt-6 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= MAIN CONTACT CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-card-lg bg-portfolio-ink shadow-card"
        >
          {/* Background accents */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-portfolio-orange/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-portfolio-teal/10 blur-3xl" />

          <div className="relative grid gap-5 p-5 sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-7 lg:p-7">

            {/* ================= LEFT SIDE ================= */}
            <div className="flex flex-col justify-between">

              <div>

                {/* Top row */}
                <div className="flex flex-wrap items-center justify-between gap-2">

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-portfolio-orange" />

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
                      Let's Connect
                    </p>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-1">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-portfolio-teal opacity-60" />

                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-portfolio-teal" />
                    </span>

                    <span className="text-[7px] font-bold uppercase tracking-wider text-white/55">
                      Open to Opportunities
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <h2 className="mt-4 max-w-xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.7rem]">
                  Have an idea?
                  <br />

                  Let's build something

                  <span className="text-portfolio-orange">
                    {' '}intelligent.
                  </span>
                </h2>

                {/* Description */}
                <p className="mt-3 max-w-md text-xs leading-5 text-white/55">
                  From AI experiments to real-world products, I'm always
                  interested in building useful technology and exploring
                  meaningful opportunities.
                </p>

                {/* Currently Exploring */}
                <div className="mt-4 flex items-center gap-2.5">

                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <div className="absolute inset-1.5 rounded-lg border border-portfolio-orange/20" />

                    <BrainCircuit
                      size={20}
                      className="relative text-portfolio-orange"
                    />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-wider text-white/35">
                      Currently Exploring
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold text-white/75">
                      RAG · AI Agents · Intelligent Systems
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= SOCIAL LINKS ================= */}
              <div className="mt-5 flex flex-wrap gap-2">

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/niharika-lakhera-810413336"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold text-white/65 transition hover:border-portfolio-orange/30 hover:bg-white/10 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                  </svg>

                  <span>LinkedIn</span>

                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/niharika96915"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold text-white/65 transition hover:border-portfolio-orange/30 hover:bg-white/10 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
                  </svg>

                  <span>GitHub</span>

                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                {/* Email */}
                <a
                  href="mailto:niharikalakhera86@gmail.com"
                  className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold text-white/65 transition hover:border-portfolio-orange/30 hover:bg-white/10 hover:text-white"
                >
                  <Mail size={12} />

                  <span>Email</span>

                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

              </div>
            </div>

            {/* ================= RIGHT SIDE — FORM ================= */}
            <div className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-sm sm:p-5">

              {/* Form Header */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/35">
                    Start a conversation
                  </p>

                  <h3 className="mt-0.5 text-sm font-bold text-white">
                    What are we building?
                  </h3>
                </div>

                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-portfolio-orange/10">
                  <Sparkles
                    size={14}
                    className="text-portfolio-orange"
                  />
                </div>
              </div>

              {/* ================= SUCCESS MESSAGE ================= */}
              {state.succeeded ? (

                <div className="mt-6 rounded-xl border border-portfolio-teal/20 bg-portfolio-teal/10 p-4">
                  <p className="text-sm font-bold text-white">
                    Message sent successfully ✦
                  </p>

                  <p className="mt-1 text-[10px] leading-4 text-white/55">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>

              ) : (

                /* ================= FORM ================= */
                <form
                  onSubmit={handleSubmit}
                  className="mt-4"
                >

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-[8px] font-semibold text-white/40"
                    >
                      What's your name?
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-1 w-full border-b border-white/10 bg-transparent pb-1.5 text-[10px] text-white outline-none placeholder:text-white/25 transition focus:border-portfolio-orange"
                    />
                  </div>

                  {/* Email */}
                  <div className="mt-3">
                    <label
                      htmlFor="contact-email"
                      className="text-[8px] font-semibold text-white/40"
                    >
                      Your email?
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="mt-1 w-full border-b border-white/10 bg-transparent pb-1.5 text-[10px] text-white outline-none placeholder:text-white/25 transition focus:border-portfolio-orange"
                    />
                  </div>

                  {/* Message */}
                  <div className="mt-3">
                    <label
                      htmlFor="contact-message"
                      className="text-[8px] font-semibold text-white/40"
                    >
                      What are we building?
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={2}
                      placeholder="Tell me about your idea, project or opportunity..."
                      className="mt-1 w-full resize-none border-b border-white/10 bg-transparent pb-1.5 text-[10px] leading-4 text-white outline-none placeholder:text-white/25 transition focus:border-portfolio-orange"
                    />
                  </div>

                  {/* Formspree Error */}
                  {state.errors && (
                    <p className="mt-3 text-[9px] text-red-300">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="group mt-4 flex w-full items-center justify-between rounded-xl bg-portfolio-orange px-3.5 py-2.5 text-[10px] font-bold text-white transition duration-300 hover:bg-white hover:text-portfolio-ink disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <span>
                      {state.submitting
                        ? 'Sending...'
                        : "Let's Build"}
                    </span>

                    <Send
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                </form>
              )}
            </div>
          </div>

          {/* ================= INTERESTS ================= */}
          <div className="relative border-t border-white/10 px-5 py-2.5 sm:px-6 lg:px-7">

            <div className="flex flex-wrap items-center gap-1.5">

              <span className="mr-1 text-[7px] font-bold uppercase tracking-[0.16em] text-white/30">
                Interested in
              </span>

              {interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[7px] font-semibold text-white/50 transition hover:border-portfolio-orange/30 hover:text-white/75"
                >
                  {interest}
                </span>
              ))}

            </div>
          </div>
        </motion.div>

        {/* ================= FOOTER ================= */}
        <footer className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-bold tracking-tight text-portfolio-ink">
              Niharika Lakhera
              <span className="text-portfolio-orange"> ✦</span>
            </p>

            <p className="mt-0.5 text-[8px] text-portfolio-muted">
              AI Developer · GenAI · Machine Learning
            </p>
          </div>

          <p className="text-[8px] text-portfolio-muted">
            Building intelligent systems, one idea at a time.
          </p>

          <p className="text-[8px] text-portfolio-muted">
            © 2026 Niharika Lakhera
          </p>

        </footer>
      </div>
    </section>
  )
}