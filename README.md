# StyleSim

AI-powered demand forecasting platform for fashion brands. Simulate market demand before manufacturing to reduce waste and maximize revenue.

## Tech Stack

- **Framework**: Next.js 16.1.6 with React 19
- **Styling**: Tailwind CSS 4 with custom animations
- **Animations**: Framer Motion 12
- **UI Components**: shadcn/ui, custom bento grid layouts
- **Icons**: Phosphor Icons, Lucide, Tabler, HugeIcons
- **Graphics**: OGL (WebGL), custom Grainient backgrounds

## Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm/bun

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd stylesim

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   └── page.tsx        # Landing page composition
├── components/
│   ├── hero.tsx        # Hero section with simulation visual
│   ├── features.tsx    # Bento grid feature showcase
│   ├── how-it-works.tsx # 4-step process explanation
│   ├── stats.tsx       # Key metrics display
│   ├── testimonials.tsx # Team section
│   ├── cta.tsx         # Call-to-action section
│   ├── footer.tsx      # Site footer
│   ├── navbar.tsx      # Navigation bar
│   ├── grainient.tsx   # Animated gradient background
│   └── ui/             # Reusable UI components
│       ├── bento-card.tsx
│       ├── team-section-1.tsx
│       ├── marquee.tsx
│       └── ...
└── lib/
    └── utils.ts        # Utility functions (cn)
```

## Key Features

- **Demand Intelligence**: AI-powered demand forecasting for fashion designs
- **Production Optimization**: Data-driven manufacturing decisions
- **Waste Reduction**: Predicted 73% reduction in overproduction
- **Real-Time Analytics**: Live market trend analysis
- **SKU-Level Insights**: Granular product performance predictions
- **Audience Simulation**: Virtual market testing before launch

## Development

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

## Design System

- **Typography**: Serif + Elegant font pairing
- **Colors**: Warm beige palette (#F5F5DC, #E8DCC4, #C9B896)
- **Layout**: 12-column bento grid with asymmetric cards
- **Animations**: Scroll-triggered, spring-based motion

## Team

- **Jerry Wu** - CEO & Co-founder
- **Ken Wu** - CTO & Co-founder
- **Myra Lam** - CMO & Co-founder

## License

Proprietary - All rights reserved.
