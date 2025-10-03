# API Frontend Project

## Overview
This is a React-based frontend application for the Association of Physicians of India (API). The website showcases the organization's history, mission, leadership, membership information, and more. It was established in 1944 and serves to advance physician excellence across India.

## Tech Stack
- **Framework**: React 19 with Create React App
- **Build Tool**: CRACO (Create React App Configuration Override)
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: Radix UI primitives
- **Form Handling**: React Hook Form with Zod validation
- **Date Handling**: date-fns, react-day-picker
- **Animations**: Framer Motion for scroll effects and transitions
- **Carousels**: Swiper.js for hero, events, and testimonials
- **Counters**: react-countup for animated statistics
- **Scroll Detection**: react-intersection-observer for scroll-triggered animations

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── common/        # Shared components (Navbar, Footer)
│   │   └── ui/           # shadcn/ui components
│   ├── pages/            # Page components (Home, About, Contact, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── utils/            # Mock data and utilities
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Development
- **Port**: 5000 (configured for Replit proxy)
- **Host**: 0.0.0.0 (allows all hosts for iframe compatibility)
- **Hot Reload**: Enabled via webpack dev server

## Key Configuration
- `craco.config.js`: Custom webpack configuration for Replit environment
  - Configured to bind to 0.0.0.0:5000
  - Set allowedHosts to 'all' for Replit proxy compatibility
  - Path alias: '@' points to 'src' directory

## Scripts
- `npm start`: Start development server on port 5000
- `npm run build`: Create production build
- `npm test`: Run tests

## Deployment
- **Type**: Autoscale (stateless website)
- **Build Command**: `npm run build`
- **Run Command**: `npx serve -s build -l 5000`

## Installation Notes
- Dependencies installed with `--legacy-peer-deps` flag due to date-fns version conflict with react-day-picker
- All packages installed and working correctly

## Known Issues & Fixes
- **styled-jsx syntax**: The Navbar component was using `<style jsx>` which caused React warnings. Fixed by removing the `jsx` attribute since styled-jsx is not configured in this project.

## Recent Changes
- **2025-10-03 (Latest)**: GitHub Import Successfully Configured for Replit
  - Installed all dependencies with `npm install --legacy-peer-deps` (resolves date-fns@4.1.0 vs react-day-picker peer dependency conflict)
  - Verified CRACO configuration is properly set for Replit environment:
    - Host: 0.0.0.0 (required for Replit proxy)
    - Port: 5000 (Replit standard)
    - allowedHosts: 'all' (allows iframe access)
  - Workflow "React App" configured and running successfully with `npm start`
  - Application tested and verified working:
    - Homepage renders correctly with hero section, animations, and all components
    - About page displays organization history and information
    - Membership page shows plans and registration form
    - Navigation works correctly across all pages
    - No critical errors in browser console
  - Deployment configuration set up:
    - Type: Autoscale (stateless website)
    - Build: `npm run build`
    - Run: `npx serve -s build -l`
  - Import completed and ready for use

- **2025-10-03**: Modern Homepage Implementation Complete
  - Installed animation packages: Framer Motion, Swiper.js, react-countup, react-intersection-observer
  - Completely rebuilt Home.jsx with modern design and animations:
    - **Hero Section**: Full viewport parallax carousel with scroll-based transforms, gradient overlays, badge, and animated CTAs
    - **Trust Badges**: Partner logos row with grayscale hover effects
    - **Key Metrics**: Animated counters with scroll-triggered animations (10,000+ Members, 80+ Years, etc.)
    - **About Section**: Two-column layout with fade-in animations
    - **Quick Navigation**: Icon-based cards with hover elevation and color accents (fixed Tailwind JIT compatibility)
    - **Events Carousel**: Swiper-based auto-scrolling event cards
    - **Membership Benefits**: Grid layout with staggered animations
    - **Testimonials**: Auto-playing carousel with member quotes
    - **CTA Section**: Newsletter signup and join prompts
  - Implemented parallax effect using Framer Motion's useScroll and useTransform hooks
  - Fixed dynamic Tailwind classes with static conditional logic for proper JIT compilation
  - All animations optimized for 60fps performance with CSS transforms
  - Mobile-first responsive design with breakpoints for all sections
  - Application verified and tested with no console errors

- **2025-10-03 (Initial Setup)**: GitHub import completed and configured for Replit
  - Installed dependencies with `--legacy-peer-deps` flag (resolves date-fns version conflict)
  - Fixed styled-jsx warning in Navbar component (removed `jsx` attribute from style tag)
  - Verified CRACO configuration is properly set for Replit (0.0.0.0:5000, allowedHosts: 'all')
  - Configured deployment for autoscale with build and serve commands
