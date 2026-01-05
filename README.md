# 🎤 Professional Anchoring Services

<div align="center">

A beautiful, modern Next.js website for requesting professional anchoring services for events, shows, and conferences.

</div>

## ✨ Features

- 🎨 Beautiful pastel design with soft colors and rounded cards
- 🎭 Smooth animations using Framer Motion
- 📝 Multi-step form for anchor requests
- 📧 Email notifications via EmailJS when form is submitted
- 💬 WhatsApp integration for direct messaging
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

# Set up environment variables (see Email & WhatsApp Setup below)
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 📧 Email & WhatsApp Setup

#### Formspree Configuration (React-Friendly!)

The form uses **Formspree**, a React-friendly library that handles form submissions without needing a backend. It's much simpler than EmailJS!

1. **Sign up for Formspree** (free tier available):
   - Go to [https://formspree.io/](https://formspree.io/)
   - Create a free account (50 submissions/month free)

2. **Create a New Form**:
   - After signing up, you'll be taken to your dashboard
   - Click "New Form" or "Get Started"
   - Give your form a name (e.g., "Anchor Service Requests")
   - Set the email where you want to receive submissions
   - Copy your **Form Endpoint URL** (looks like: `https://formspree.io/f/xxxxxxxxxx`)

3. **Update Environment Variables**:
   - Create a `.env.local` file in the root directory
   - Add your Formspree endpoint:

   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
   ```

4. **That's it!** Formspree will automatically:
   - Send emails to your specified address
   - Format the form data nicely
   - Handle spam protection
   - Provide analytics (on paid plans)

**Why Formspree?**

- ✅ Built specifically for React
- ✅ No complex setup (no service IDs, template IDs, or API keys needed)
- ✅ Just one endpoint URL
- ✅ Free tier with 50 submissions/month
- ✅ Built-in spam protection
- ✅ Works perfectly with Next.js

**Alternative React Libraries:**
If you prefer other options, you could also use:

- **React Email + Resend** - For more control over email templates
- **SendGrid** - Enterprise-grade email service
- **EmailJS** - Client-side email service (what we replaced)

#### WhatsApp Configuration

1. **Get Your WhatsApp Number**:
   - Your WhatsApp number without `+` or spaces
   - Example: For `+1 (234) 567-8900`, use `12345678900`
   - Example: For `+91 98765 43210`, use `919876543210`

2. **Update Environment Variable**:
   ```env
   NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
   ```

The WhatsApp button on the success screen will open WhatsApp with a pre-filled message containing all form details.

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

**📖 See [NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md) for complete step-by-step instructions.**

Quick steps:

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `.next`
6. **IMPORTANT:** Add all environment variables from `.env.local` in Netlify dashboard
7. Click "Deploy site"
8. Wait for build to complete (~2-5 minutes)
9. Your site will be live at `https://your-site-name.netlify.app`

**⚠️ Don't forget to add environment variables in Netlify!** See the deployment guide for the complete list.

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
- **Formspree** - React-friendly form submission service

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
- **Email notification** sent on submission
- **WhatsApp button** for direct contact after submission

Made with 💕 for Professional Anchoring Services
