# Tyler Hudson Portfolio

A modern, multi-themed React portfolio website showcasing three distinct personas:

- **Tyler Hudson**: Tech-focused section with matrix-inspired design
- **Persevus**: Gaming content creator with post-apocalyptic battlefield theme
- **Serviam**: Christian ministry content with crusader/templar styling

## Features

- Clean, animated React interface built with Vite
- Responsive design with Tailwind CSS
- Framer Motion animations
- Multi-themed sections with distinct visual identities
- Automatic deployment to GitHub Pages

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

## Deployment

This project uses GitHub Actions for automatic deployment to GitHub Pages. Simply push changes to the `main` branch and the site will be automatically built and deployed.

**Latest Update:** Testing deployment after GitHub Pages configuration.

### Manual Deployment (if needed)

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── components/
│   ├── Landing.jsx          # Main landing page with section selection
│   ├── TylerHudson.jsx      # Tech portfolio section
│   ├── Persevus.jsx         # Gaming content section
│   └── Serviam.jsx          # Ministry content section
├── styles/
│   ├── Landing.css
│   ├── TylerHudson.css
│   ├── Persevus.css
│   └── Serviam.css
└── App.jsx                  # Main app with routing
```
