import { motion } from 'framer-motion'
import { Flame, Bolt, Beaker } from 'lucide-react'

const Feature = ({ icon: Icon, title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-emerald-400/30 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.35)] transition"
  >
    <Icon className="text-emerald-400" />
    <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-slate-300/90 text-sm">{text}</p>
  </motion.div>
)

export default function ContentSections() {
  return (
    <div className="relative z-10">
      {/* Section: Bestsellers */}
      <section id="shop" className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Bestsellers</h2>
          <a href="#" className="text-emerald-300 hover:text-emerald-200 text-sm">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-400/30 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.35)] transition"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-800 to-slate-900 grid place-content-center">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-80 group-hover:opacity-100 transition" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Performance Hydration</h3>
                  <span className="text-emerald-300 font-semibold">$34</span>
                </div>
                <p className="mt-2 text-slate-300/90 text-sm">Electrolytes + adaptogens for all-day output.</p>
                <button className="mt-4 w-full py-2 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">Add to Cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section: Why it works */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={Flame} title="High-Intensity Fuel" text="Formulated to power sprints, lifts, and late-night sessions." />
          <Feature icon={Bolt} title="Clean Energy" text="No crash, no jitters—just smooth, sustained drive." />
          <Feature icon={Beaker} title="Clinically Dosed" text="Evidence-based ingredients at effective levels." />
        </div>
      </section>

      {/* Section: Quiz */}
      <section id="quiz" className="relative py-24">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.12),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">Find your optimal stack</h3>
                <p className="mt-3 text-slate-300/90">Answer a few questions and we’ll match you with a high-performance regimen tailored to your sport, schedule, and goals.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Endurance","Power","Recovery","Focus"].map((chip) => (
                    <span key={chip} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs">{chip}</span>
                  ))}
                </div>
                <a href="#" className="mt-8 inline-block px-6 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">Start Quiz</a>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-2xl border border-emerald-400/20 grid place-content-center">
                <div className="h-40 w-40 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
