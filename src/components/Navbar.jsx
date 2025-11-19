import { useState } from 'react'
import { Menu, X, ShoppingBag, Search } from 'lucide-react'

function NavLink({ children }) {
  return (
    <a href="#" className="text-slate-200/90 hover:text-white transition-colors text-sm tracking-wide uppercase">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Brand */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-lime-400 via-emerald-400 to-cyan-400 shadow-lg shadow-emerald-500/20" />
              <span className="text-white font-extrabold tracking-[0.25em] text-sm group-hover:opacity-90">
                THRIVAL FUEL
              </span>
            </a>
          </div>

          {/* Center nav (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink>Shop</NavLink>
            <NavLink>Stacks</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Science</NavLink>
            <NavLink>Find Your Plan</NavLink>
          </nav>

          {/* Right icons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 text-slate-200 hover:text-white transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="p-2 text-slate-200 hover:text-white transition-colors" aria-label="Cart">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile */}
          <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <div className="px-6 py-4 flex flex-col gap-4">
              <NavLink>Shop</NavLink>
              <NavLink>Stacks</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Science</NavLink>
              <NavLink>Find Your Plan</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
