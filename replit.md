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
- **2025-10-03**: GitHub import completed and configured for Replit
  - Installed dependencies with `--legacy-peer-deps` flag (resolves date-fns version conflict)
  - Fixed styled-jsx warning in Navbar component (removed `jsx` attribute from style tag)
  - Verified CRACO configuration is properly set for Replit (0.0.0.0:5000, allowedHosts: 'all')
  - Configured deployment for autoscale with build and serve commands
  - Application tested and working correctly with no console errors
