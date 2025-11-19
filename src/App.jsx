import Navbar from './components/Navbar'
import ThrivalBar from './components/ThrivalBar'
import Hero from './components/Hero'
import ContentSections from './components/ContentSections'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <ThrivalBar />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ContentSections />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Thrival Fuel. Built for athletes.</p>
            <div className="flex items-center gap-6 text-sm text-slate-300">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
