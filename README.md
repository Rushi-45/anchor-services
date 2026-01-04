# 🎤 Professional Anchoring Services

<div align="center">

A beautiful, modern Next.js website for requesting professional anchoring services for events, shows, and conferences.

</div>

## ✨ Features

- 🎨 Beautiful pastel design with soft colors and rounded cards
- 🎭 Smooth animations using Framer Motion
- 📝 Multi-step form for anchor requests
- 📱 Fully responsive and mobile-first
- ♿ Accessible with keyboard navigation and ARIA labels
- 🔔 Toast notifications for user feedback
- ✨ Cute animations and GIFs throughout
- 🎯 Professional yet friendly design

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Other Commands

```bash
# Run linter
npm run lint

# Format code
npm run format

# Run tests
npm test
```

## 🎨 Customization

### Change Colors

Update CSS variables in `styles/globals.css`:

```css
:root {
  --bg: #fff9ff;
  --primary: #ffb6e6;
  --accent: #ffd8a8;
  --text: #2d2d2d;
}
```

### Update Form Fields

Edit the form steps in `components/steps/`:
- `Step1ClientInfo.tsx` - Company information
- `Step2EventInfo.tsx` - Event details
- `Step3AnchorRequirements.tsx` - Anchor requirements
- `Step4Logistics.tsx` - Event logistics
- `Step5AdditionalInfo.tsx` - Additional information

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git" and connect your repository
4. Netlify will automatically detect Next.js and deploy

### Deploy to Render

1. Create a new account at [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Use these settings:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **Environment:** Node

## 📁 Project Structure

```
anchor-services/
├── components/
│   ├── AnchorHero.tsx        # Home page hero section
│   ├── Stepper.tsx           # Progress stepper component
│   ├── StepperForm.tsx       # Main form container
│   ├── steps/                 # Form step components
│   │   ├── Step1ClientInfo.tsx
│   │   ├── Step2EventInfo.tsx
│   │   ├── Step3AnchorRequirements.tsx
│   │   ├── Step4Logistics.tsx
│   │   └── Step5AdditionalInfo.tsx
│   ├── Confetti.tsx          # Confetti animation
│   └── TypewriterText.tsx    # Typewriter effect component
├── types/
│   └── form.ts               # TypeScript form types
├── lib/
│   └── toast.ts              # Toast notifications
├── pages/
│   ├── _app.tsx              # App wrapper
│   ├── index.tsx             # Home page
│   └── form.tsx              # Form page
├── public/
│   └── assets/               # Images and GIFs
├── styles/
│   └── globals.css           # Global styles & CSS variables
└── package.json
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Hot Toast** - Toast notifications

## 📝 Routes

- `/` - Home page with hero section and information
- `/form` - Multi-step anchor request form

## 🎯 Features Overview

### Home Page
- Beautiful hero section with animations
- Feature highlights
- "How it works" section
- Call-to-action buttons

### Request Form
- 5-step stepper form
- Progress indicator
- Form validation
- Smooth transitions between steps
- Success celebration with confetti

Made with 💕 for Professional Anchoring Services
