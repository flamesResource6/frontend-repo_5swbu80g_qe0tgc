import { motion } from 'framer-motion'

// A modern, sticky announcement bar inspired by Thrival's style.
export default function ThrivalBar() {
  return (
    <div className="relative z-40">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-gradient-to-r from-emerald-500 via-lime-400 to-cyan-400 text-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-center text-sm font-semibold tracking-wide">
          Free 2-day shipping on orders over $75 • Subscribe & save 15%
        </div>
      </motion.div>
    </div>
  )
}
