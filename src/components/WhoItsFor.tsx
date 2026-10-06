const audiences = [
  {
    title: 'Independent Outpatient Clinics',
    description: 'Primary care, urgent care, and multi-specialty outpatient facilities looking to reduce billing overhead and improve collections.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Specialty Practices',
    description: 'Dermatology, cardiology, orthopedics, and other specialties with complex coding requirements and high claim volumes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Growing Practices',
    description: 'Practices that need to scale their billing operations without proportionally increasing administrative staff.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Who It&apos;s For
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Built specifically for outpatient practices that want modern billing 
            infrastructure without enterprise complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-5">
                {audience.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
