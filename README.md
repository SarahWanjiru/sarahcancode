# Sarah Can Code - Portfolio Website

A modern, performant portfolio website showcasing software engineering expertise, cloud architecture knowledge, and DevOps practices. Built with Next.js 16, React 19, and Tailwind CSS 4.

## About This Project

This is a professional portfolio website designed to demonstrate:

- **Full-stack development** capabilities with modern React and Next.js
- **Cloud-native thinking** through scalable architecture patterns
- **DevOps mindset** with CI/CD pipeline and automated workflows
- **UI/UX design** skills with responsive layouts and dark mode support

## Features

- **Modern Tech Stack**: Next.js 16 App Router, React 19, TypeScript 5
- **Custom Design System**: Tailwind CSS 4 with CSS variables for theming
- **Dark Mode**: Context-based theme switching with localStorage persistence
- **Fully Responsive**: Mobile-first design with hamburger menu
- **Performance Optimized**: Next.js Image optimization, lazy loading
- **CI/CD Pipeline**: GitHub Actions with automated builds and linting
- **Code Quality**: ESLint, Prettier, TypeScript strict mode
- **Dependency Management**: Dependabot with grouped updates

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
│   │   ├── Navigation.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── context/          # React Context providers
│   │   └── ThemeContext.tsx
│   ├── blog/             # Blog listing page
│   │   └── page.tsx
│   ├── layout.tsx        # Root layout with navigation
│   ├── page.tsx          # Homepage (Hero, About, Projects, Tech Stack, Contact)
│   └── globals.css       # Global styles with CSS variables
├── .github/
│   ├── workflows/        # CI/CD workflows
│   ├── dependabot.yml    # Dependency updates config
│   └── pull_request_template.md
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
- **Typography**: Geist Sans and Geist Mono fonts
- **Spacing**: Tailwind's default spacing scale
- **Dark Mode**: Class-based dark mode with ThemeContext and localStorage persistence
- **Icons**: Lucide React for consistent iconography

## License

This project is private and proprietary.

---

Built with ❤️ by Sarah - Engineering reliable systems from interface to infrastructure.
