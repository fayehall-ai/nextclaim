export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NC</span>
            </div>
            <span className="text-lg font-semibold text-white">NextClaim</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
            <a 
              href="https://nextclaim.app" 
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              nextclaim.app
            </a>
            <a 
              href="mailto:faye@nextclaim.app" 
              className="hover:text-white transition-colors"
            >
              faye@nextclaim.app
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NextClaim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
