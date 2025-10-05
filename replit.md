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
- **2025-10-05 (Latest Update)**: Navbar Redesign & Google Translate Fix
  - **Google Translate Fixed**: 
    - Removed CSS that was blocking translation iframes from working
    - Translation now works properly - selecting Marathi translates entire page
    - Kept banner/overlay hidden while allowing translation engine to function
    - Google Translate properly initialized in index.html
  - **Complete Navbar Redesign**:
    - Logo positioned on the left with CCMP Maharashtra branding
    - Navigation links perfectly centered in the middle
    - Join CCMP button placed before language selector on the right
    - Language selector (globe icon) as the rightmost element
    - Clean, modern styling with proper spacing and hover effects
    - Responsive design maintains order on all screen sizes
    - Mobile menu includes language selector with flag emojis
  - **Routing Fix**:
    - Added `_redirects` file for production deployment
    - Fixes 404 errors when refreshing on client-side routes
    - Works on both development and production environments

- **2025-10-05**: Google Translate Integration & Routing Fix
  - **Custom Language Switcher**: 
    - Created beautiful custom language dropdown to replace default Google Translate widget
    - Features globe icon, flag emojis (🇬🇧 🇮🇳), and smooth slide-down animation
    - Modern, aesthetic design with hover effects matching brand colors (saffron accent)
    - Dropdown shows checkmark for currently selected language
    - Click-outside-to-close functionality for better UX
    - Limited to English and Marathi (en, mr) as requested
    - Positioned in top-right corner next to "Join CCMP" button
    - Completely hidden Google Translate overlay/banner with comprehensive CSS
    - Works across all pages without reload or layout shifts
  - **Fixed Page Reload Issue**:
    - Added `historyApiFallback: true` to craco.config.js devServer configuration
    - Fixes "Page not found" error when reloading on client-side routes (e.g., /about, /leadership)
    - Now properly serves index.html for all routes in development
  - **Dependency Updates**:
    - Updated `react-day-picker` from 8.10.1 to 9.11.0 (React 19 compatibility)
    - Updated `date-fns` from 4.1.0 to 3.6.0 (peer dependency compatibility)
    - Successfully installed all npm packages
  - Application fully tested and verified working on all routes

- **2025-10-04**: Interactive History Timeline Redesign
  - **Completely Replaced** the existing history timeline with a modern, interactive experience
  - **Horizontal Year Selector**: 
    - Scrollable horizontal bar displaying all milestone years (1944-2024)
    - Active year highlighted with gradient (saffron to green) and scale animation
    - Smooth auto-scroll to center selected year
    - Clickable years with hover effects
  - **Main Event Card with Slide Animations**:
    - Large centered card displaying milestone details (year, title, description, image)
    - Smooth horizontal slide-in animations (left/right) based on navigation direction
    - Split layout: image on left (with gradient overlay), content on right
    - Desktop: side-by-side layout, Mobile: stacked vertical layout
  - **Auto-Play Functionality**:
    - Automatically advances to next milestone every 5 seconds
    - Pauses on user interaction (hover/click)
    - Manual play/pause toggle button
    - Seamless loop through all milestones
  - **Navigation Controls**:
    - Left/Right arrow buttons for manual navigation
    - Gradient-styled buttons with hover effects
    - Keyboard accessible (focus states)
    - Progress indicator dots showing current position
  - **Professional Images**: High-quality archive photos from Unsplash for each milestone
  - **Green & Orange Theme**: Consistent gradient styling matching brand colors
  - **Smooth Animations**: CSS keyframe animations for slide-in effects (slideInRight/slideInLeft)
  - **Responsive Design**: 
    - Desktop: Full split-screen card layout with large images
    - Mobile: Vertical stacked layout with swipeable year selector
  - **Accessibility**: ARIA labels, keyboard navigation, readable text contrast
  - All animations optimized for 60fps performance

- **2025-10-03**: Complete UI Enhancement Package Implemented
  - **Removed** "Trusted By Leading Medical Institutions" section from homepage per user request
  - **Footer Redesign**: Complete overhaul with modern dark theme (#0f1419 background)
    - Three-column layout: Quick Links, Connect With Us, Newsletter subscription
    - Social media icons with hover animations
    - Gradient border top and smooth fade-in animations
    - Bottom bar with copyright and policies
  - **Photo/Video Gallery Section**: Professional masonry grid layout on homepage
    - Responsive: 4 columns (desktop), 3 columns (tablet), 2 columns (mobile)
    - Lightbox modal with backdrop blur and smooth animations
    - Hover effects with gradient overlays and captions
    - All images include descriptive alt attributes for accessibility
    - Embedded video player support with Play icon overlay
  - **Social Proof Ticker**: Horizontal scrolling activity feed
    - Real-time member activities with smooth infinite scroll animation
    - Color-coded badges (green for joins, blue for registrations, purple for downloads)
    - Gradient fade-out edges for visual polish
  - **Enhanced Final CTA Section**: Dual call-to-action before footer
    - Gradient background with animated decorative circles
    - "Become a Member" and "Explore Benefits" prominent buttons
    - Responsive layout with centered content
  - **Contact & Support Section**: Two-column layout on homepage
    - Left column: Contact information with icons (email, phone, address)
    - Right column: Quick inquiry form with name, email, and message fields
    - Submit button with hover animations
  - **History Page Mobile Redesign**: Completely rebuilt timeline for responsive UX
    - **Mobile Layout** (< 1024px): Left-aligned vertical timeline with consistent styling
    - **Desktop Layout** (≥ 1024px): Center-aligned alternating timeline (left/right cards)
    - IntersectionObserver animations for scroll-triggered card reveals
    - Fixed refs assignment to enable proper animations on both mobile and desktop
    - Gradient timeline connector with saffron-green-saffron colors
    - Year badges with glow effects and hover interactions
  - **Floating Action Button (FAB)**: Multi-function quick access button
    - Appears after 300px scroll with smooth fade-in
    - Pulse animation for attention
    - Scroll-to-top functionality with smooth behavior
    - Fixed positioning in bottom-right corner
    - Responsive sizing (larger on desktop, smaller on mobile)
  - **Sticky Header**: Smart navigation header
    - Hidden by default, appears when user scrolls up
    - Hides when scrolling down to maximize viewport
    - Smooth slide-down animation from top
    - Semi-transparent backdrop with blur effect
    - Includes logo, navigation links, and "Join API" button
  - **Bug Fixes**:
    - Added missing Phone icon import in Home.jsx
    - Fixed IntersectionObserver refs on desktop timeline cards for proper animations
    - Added descriptive alt attributes to all gallery images for accessibility compliance
  - All changes architect-approved and tested successfully
  - Application running without errors, all animations optimized for performance

- **2025-10-03**: GitHub Import Successfully Configured for Replit
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
