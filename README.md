# Sarah Can Code - Portfolio Website

A modern, performant portfolio website showcasing software engineering expertise, cloud architecture knowledge, and DevOps practices. Built with Next.js 16, React 19, and Tailwind CSS 4.

## About This Project

This is a professional portfolio website designed to demonstrate:
- **Full-stack development** capabilities with modern React and Next.js
- **Cloud-native thinking** through scalable architecture patterns
- **DevOps mindset** with clean code structure and deployment readiness
- **UI/UX design** skills with responsive layouts and dark mode support

## Features

- ✨ **Modern Tech Stack**: Next.js 16 App Router, React 19, TypeScript
- 🎨 **Custom Design System**: Tailwind CSS 4 with CSS variables for theming
- 🌓 **Dark Mode**: Context-based theme switching with persistent preferences
- 📱 **Fully Responsive**: Mobile-first design approach
- ⚡ **Performance Optimized**: Next.js Image optimization, static generation
- 🧭 **Multi-page Navigation**: Home, About, Projects, Tech Stack, Blog, Testimonials, Contact

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **UI Library**: [React 19](https://react.dev)
- **Language**: [TypeScript 5](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Package Manager**: pnpm

## Project Structure

```
sarahcancode/
├── app/
│   ├── components/       # Reusable UI components
│   ├── context/          # React Context providers
│   ├── about/            # About page
│   ├── blog/             # Blog page
│   ├── contact/          # Contact page
│   ├── projects/         # Projects showcase
│   ├── tech-stack/       # Technology stack page
│   ├── testimonials/     # Testimonials page
│   ├── layout.tsx        # Root layout with navigation
│   └── page.tsx          # Homepage
├── public/               # Static assets
└── tailwind.config.js    # Tailwind configuration
```

## Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd sarahcancode

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## Design System

The project uses a custom design system with CSS variables for consistent theming:

- **Colors**: Semantic color tokens (bg-primary, text-primary, accent, etc.)
- **Typography**: System font stack optimized for readability
- **Spacing**: Tailwind's default spacing scale
- **Dark Mode**: Class-based dark mode with ThemeContext

## Development Roadmap

See [LEARNING_ROADMAP.md](./LEARNING_ROADMAP.md) for the complete development plan and learning objectives.

## License

This project is private and proprietary.

---

Built with ❤️ by Sarah - Engineering reliable systems from interface to infrastructure.
