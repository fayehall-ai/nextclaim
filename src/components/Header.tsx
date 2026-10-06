export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">NC</span>
          </div>
          <span className="text-xl font-semibold text-slate-900">NextClaim</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#who-its-for" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
            Who It&apos;s For
          </a>
          <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">
            About
          </a>
        </nav>

        <a
          href="mailto:faye@nextclaim.app"
          className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          Contact Us
        </a>
      </div>
    </header>
  )
}
