# NeoBit - Professional Programming Solutions Website

A modern, responsive website for NeoBit, a professional programming company specializing in trading financial solutions, blockchain programming, MQL4/5 bots, mobile apps, and web development.

## 🚀 Features

- **Professional Hero Section**: Eye-catching hero with animated logo and compelling copy
- **Countdown Timer**: Real-time countdown to January 1st, 2026 launch date
- **Services Showcase**: 6 service cards with gradient backgrounds and hover effects
- **About Section**: Company mission and core values
- **Contact Form**: Fully functional contact form with validation
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Smooth Animations**: Framer Motion animations throughout for enhanced UX
- **Modern UI**: Material-UI (MUI) components with custom theming
- **Professional Styling**: Blue/cyan gradient theme with consistent design language

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v7
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Styling**: MUI sx prop + CSS-in-JS

## 📁 Project Structure

```
neobit-website/
├── client/
│   ├── public/
│   │   └── neobit-logo.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CountdownTimer.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── index.html
├── package.json
└── vite.config.ts
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #1e3a8a
- **Secondary Cyan**: #06b6d4
- **Light Cyan**: #22d3ee
- **Dark Blue**: #0f172a
- **Background**: #ffffff
- **Text Primary**: #0f172a
- **Text Secondary**: #475569

### Typography
- **Headings**: Roboto, 700-800 weight
- **Body**: Roboto, 400-500 weight
- **Font Size**: Responsive scaling (xs, sm, md, lg, xl)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

```bash
cd neobit-website
pnpm install
```

### Development

```bash
pnpm dev
```

The development server will start at `http://localhost:3000`

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## 📦 Dependencies

### Core
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `typescript`: ^5.0.0

### UI & Styling
- `@mui/material`: ^7.3.5
- `@emotion/react`: ^11.14.0
- `@emotion/styled`: ^11.14.1
- `@mui/icons-material`: ^7.3.5

### Animations & Effects
- `framer-motion`: ^11.0.0

### Icons
- `lucide-react`: Latest

### Utilities
- `wouter`: For routing

## 🎯 Key Components

### Header
Sticky navigation bar with logo, navigation links, and CTA button. Includes smooth animations and hover effects.

### Hero Section
Full-height hero with animated background elements, compelling headline, description, and dual CTA buttons. Features floating logo animation.

### Countdown Timer
Real-time countdown to January 1st, 2026. Updates every second with animated time units.

### Services Section
Grid layout (responsive: 1 col mobile, 2 cols tablet, 3 cols desktop) showcasing 6 services with icons, titles, and descriptions.

### About Section
Company overview with three key pillars: Expert Team, Mission Driven, and Cutting Edge.

### Contact Section
Two-column layout with contact information (email, phone, location) and a functional contact form.

### Footer
Dark gradient footer with company info, service links, quick links, and social media.

## 🎬 Animations

- **Page Load**: Staggered fade-in animations for elements
- **Scroll Animations**: Elements animate in as they come into view
- **Hover Effects**: Cards lift and shadows enhance on hover
- **Floating Elements**: Background elements float smoothly
- **Logo Animation**: Continuous gentle floating animation

## 📱 Responsive Breakpoints

- **Mobile**: xs (0px - 600px)
- **Tablet**: sm (600px - 960px)
- **Desktop**: md (960px+)

## 🔧 Customization

### Changing Colors
Edit the theme in `client/src/App.tsx`:

```typescript
const theme = createTheme({
  palette: {
    primary: {
      main: "#your-color",
    },
    // ... other colors
  },
});
```

### Modifying Content
- **Hero**: Edit `client/src/components/HeroSection.tsx`
- **Services**: Update services array in `client/src/components/ServicesSection.tsx`
- **Contact Info**: Modify contact details in `client/src/components/ContactSection.tsx`

### Updating Logo
Replace `/client/public/neobit-logo.png` with your logo file.

## 📊 Performance

- Optimized images with proper sizing
- Code splitting with Vite
- Lazy loading for components
- Efficient animations using Framer Motion
- Responsive images and CSS

## 🔐 Security

- No sensitive data in client-side code
- Form submissions use standard HTTP methods
- XSS protection through React's built-in escaping

## 📝 License

© 2025 NeoBit. All rights reserved.

## 📞 Support

For questions or issues, please contact: info@neobit.dev

---

**Launching January 1st, 2026** 🚀
