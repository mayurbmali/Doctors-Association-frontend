# API Frontend Project

## Overview
This project is a React-based frontend application for the Association of Physicians of India (API). Its primary purpose is to showcase the organization's history, mission, leadership, and membership information. The application aims to provide a modern, responsive, and interactive user experience to highlight API's role in advancing physician excellence in India since its establishment in 1944. The business vision is to create a digital hub that effectively communicates the API's values and attracts new members, thereby enhancing its market presence and influence.

## User Preferences
I prefer simple language.
I want iterative development.
Ask before making major changes.
I prefer detailed explanations.
Do not make changes to the folder `Z`.
Do not make changes to the file `Y`.

## System Architecture
The application is built using React 19 with Create React App and CRACO for configuration overrides. Routing is handled by React Router DOM v7. Styling is primarily done with Tailwind CSS, augmented by shadcn/ui components and Radix UI primitives for enhanced UI elements.

**UI/UX Decisions:**
- **Color Schemes & Design:** The application incorporates a professional aesthetic with a green and orange (saffron) theme, including gradient styles that match brand colors. Dark themes are used for sections like the Footer.
- **Interactive Elements:** Extensive use of animations and microinteractions (Framer Motion for scroll effects, Swiper.js for carousels, react-countup for animated statistics, react-intersection-observer for scroll-triggered animations) to create an engaging user experience.
- **Responsive Design:** A mobile-first approach ensures optimal viewing and interaction across all devices, with specific layouts for desktop, tablet, and mobile breakpoints.
- **Accessibility:** Focus on ARIA labels, keyboard navigation, and readable text contrast.

**Technical Implementations & Feature Specifications:**
- **Homepage:** Features a full-viewport parallax hero carousel, animated key metrics, an interactive "Meet Our Founding Pillars" section with hover effects, an auto-playing events carousel, membership benefits, testimonials, a social proof ticker, a photo/video gallery with lightbox, and dual CTAs.
- **History Timeline:** A modern, interactive timeline with a scrollable horizontal year selector, main event cards with slide animations, auto-play functionality, and navigation controls.
- **Navbar:** Redesigned with logo on the left, centered navigation links, a "Join CCMP" button, and a custom language selector with flag emojis and a globe icon. Features a smart sticky header that appears on scroll-up.
- **Footer:** Modern dark-themed redesign with a three-column layout (Quick Links, Connect With Us, Newsletter), social media icons, and copyright information.
- **Language Switcher:** Custom-designed dropdown for English and Marathi, integrating Google Translate functionality while hiding its default overlay.
- **General:** Floating Action Button (FAB) for scroll-to-top, Contact & Support section, and form handling with React Hook Form and Zod validation.

**System Design Choices:**
- **Development Environment:** Configured for Replit with the development server running on port 5000 and host 0.0.0.0, allowing all hosts for iframe compatibility. CRACO is used for custom webpack configurations and path aliases.
- **Deployment:** Autoscale deployment with `npm run build` and `npx serve -s build -l 5000`.
- **Dependency Management:** Dependencies installed with `--legacy-peer-deps` to resolve peer dependency conflicts (e.g., `date-fns` and `react-day-picker`).
- **Routing Fixes:** Includes a `_redirects` file for production and `historyApiFallback: true` for development to prevent 404 errors on client-side route refreshes.

## External Dependencies
- **Frameworks/Libraries:** React 19, Create React App, CRACO, React Router DOM v7.
- **Styling:** Tailwind CSS, shadcn/ui, Radix UI.
- **Form Handling:** React Hook Form, Zod.
- **Date Handling:** date-fns, react-day-picker.
- **Animations:** Framer Motion.
- **Carousels:** Swiper.js.
- **Counters:** react-countup.
- **Scroll Detection:** react-intersection-observer.
- **Deployment Server:** `serve` (for production build).
- **Translation:** Google Translate.