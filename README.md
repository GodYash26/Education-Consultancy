# Gyan Education Consultancy

A modern, responsive static website for Gyan Education Consultancy built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Modern, clean, and professional design
- 📱 Fully responsive (mobile, tablet, and desktop)
- ♿ Accessibility-focused with semantic HTML
- 🔍 SEO optimized with proper metadata
- ⚡ Fast performance with Next.js static generation
- 🎯 Pages included:
  - Home (Hero, Services, Why Choose Us)
  - IELTS Preparation
  - PTE Coaching
  - Visa Services
  - Contact (with form)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Deployment:** Static site (can be deployed to Vercel, Netlify, etc.)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GodYash26/Education-Consultancy.git
cd Education-Consultancy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── contact/         # Contact page
│   │   ├── ielts/           # IELTS page
│   │   ├── pte/             # PTE page
│   │   ├── visa-services/   # Visa services page
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Footer component
│   └── lib/                 # Utility functions
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This is a static site and can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Static Export
Add to `next.config.js`:
```javascript
output: 'export'
```

## Customization

- **Colors:** Edit the CSS variables in `src/app/globals.css`
- **Content:** Modify the page files in `src/app/`
- **Components:** Customize UI components in `src/components/`
- **Styling:** Adjust Tailwind configuration in `tailwind.config.ts`

## License

ISC

## Contact

For any queries, please contact:
- Email: info@gyaneducation.com
- Phone: +1 234 567 8900
