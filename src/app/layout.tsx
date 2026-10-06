import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NextClaim | AI-Assisted Medical Billing for Outpatient Clinics',
  description: 'Faster, audit-ready medical billing with AI + human review. Built for independent outpatient clinics and specialty practices.',
  keywords: 'medical billing, RCM, revenue cycle management, AI billing, claim scrubbing, outpatient billing, specialty practice billing',
  openGraph: {
    title: 'NextClaim | AI-Assisted Medical Billing',
    description: 'Faster, audit-ready medical billing with AI + human review.',
    url: 'https://nextclaim.app',
    siteName: 'NextClaim',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
