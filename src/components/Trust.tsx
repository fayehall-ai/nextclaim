const trustPoints = [
  {
    title: 'HIPAA-Minded Operations',
    description: 'We take patient data security seriously. Our systems and processes are designed with HIPAA requirements in mind.',
  },
  {
    title: 'Business Associate Agreements',
    description: 'We sign BAAs with all clients, establishing clear responsibilities for protected health information.',
  },
  {
    title: 'No Black-Box Decisions',
    description: 'Every AI recommendation is visible and reviewable. Nothing is silently passed through without human oversight.',
  },
  {
    title: 'Audit-Ready Documentation',
    description: 'Complete records of every claim, review, and decision—ready for internal audits or payer inquiries.',
  },
]

export default function Trust() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Trust & Compliance
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Medical billing touches sensitive patient and financial data. We understand 
              that trust is earned through transparency, security, and accountability—not 
              marketing promises.
            </p>
            <a
              href="mailto:faye@nextclaim.app?subject=Compliance%20Questions"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Have compliance questions? Let&apos;s talk
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
