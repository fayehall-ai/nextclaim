# NextClaim Marketing Site

Marketing landing page for [NextClaim](https://nextclaim.app) — AI-assisted medical billing for outpatient clinics and specialty practices.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel (zero-config)

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Deployment

This site is configured for zero-config deployment on Vercel:

1. Push to the main branch
2. Vercel automatically detects the Next.js framework
3. The site builds and deploys

**No environment variables required.**

## Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles + Tailwind imports
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Landing page
│   └── components/
│       ├── Header.tsx       # Navigation header
│       ├── Hero.tsx         # Hero section with CTA
│       ├── HowItWorks.tsx   # 3-step process
│       ├── WhoItsFor.tsx    # Target audience
│       ├── Trust.tsx        # Compliance & trust signals
│       ├── About.tsx        # Founder section
│       └── Footer.tsx       # Footer with contact info
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json
```

## Contact

- Website: [nextclaim.app](https://nextclaim.app)
- Email: [faye@nextclaim.app](mailto:faye@nextclaim.app)
