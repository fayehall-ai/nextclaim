export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Faster, audit-ready medical billing with{' '}
            <span className="text-primary-600">AI + human review</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            NextClaim combines intelligent automation with expert oversight to handle 
            high-volume claim work—coding checks, claim scrubbing, and denial triage—so 
            your practice gets paid faster while staying compliant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:faye@nextclaim.app"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
            <a
              href="#how-it-works"
              className="bg-white hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors border border-slate-200 inline-flex items-center justify-center gap-2"
            >
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
