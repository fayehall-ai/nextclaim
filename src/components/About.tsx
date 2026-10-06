export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            About NextClaim
          </h2>
          
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 text-left">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary-600">FH</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  Faye Hall
                </h3>
                <p className="text-primary-600 font-medium mb-4">Founder</p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  NextClaim was founded to solve a persistent problem in outpatient healthcare: 
                  the disconnect between modern AI capabilities and the real-world demands of 
                  medical billing compliance.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We believe technology should augment—not replace—human judgment in healthcare 
                  revenue cycle management. That&apos;s why every claim processed through NextClaim 
                  gets both AI analysis and human review before it ever reaches a payer.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-slate-600 mb-6">
              Interested in learning more about how NextClaim can help your practice?
            </p>
            <a
              href="mailto:faye@nextclaim.app"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
