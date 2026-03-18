# Sarah Can Code - Portfolio Website

A modern, performant portfolio website showcasing software engineering expertise, cloud architecture knowledge, and DevOps practices. Built with Next.js 16, React 19, and Tailwind CSS 4.

## About This Project

A professional portfolio website designed to demonstrate:

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
- **GitHub Projects Integration**: Auto-fetches and categorizes repos via GitHub API — no manual updates needed
- **Medium Blog Integration**: Live posts fetched via rss2json, revalidated every 5 minutes
- **Contact Form**: Resend-powered email with rate limiting, honeypot, and spam protection
- **Resume Download**: One-click PDF download from the navigation bar
- **On-demand Cache Revalidation**: GitHub webhook instantly busts the Next.js cache on every push
- **CI/CD Pipeline**: GitHub Actions with automated builds and linting
- **Deployed on AWS Amplify**: SSR hosting with environment variable support

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **UI Library**: [React 19](https://react.dev)
- **Language**: [TypeScript 5](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Email**: [Resend](https://resend.com)
- **Hosting**: [AWS Amplify](https://aws.amazon.com/amplify/)
- **Package Manager**: pnpm

## Project Structure

```
sarahcancode/
├── app/
│   ├── api/
│   │   ├── contact/          # Contact form API endpoint
│   │   └── revalidate/       # On-demand cache revalidation endpoint
│   ├── components/           # Reusable UI components
│   │   ├── Navigation.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectsGrid.tsx  # GitHub projects with category filtering
│   │   └── PostsGrid.tsx     # Medium blog posts with category filtering
│   ├── context/              # React Context providers
│   │   └── ThemeContext.tsx
│   ├── lib/                  # Data fetching utilities
│   │   ├── github.ts         # GitHub API integration
│   │   └── medium.ts         # Medium RSS integration
│   ├── blog/                 # Blog listing page
│   │   └── page.tsx
│   ├── layout.tsx            # Root layout with navigation
│   ├── page.tsx              # Homepage (Hero, About, Projects, Tech Stack, Contact)
│   └── globals.css           # Global styles with CSS variables
├── docs/                     # Project documentation
├── .github/
│   ├── workflows/            # CI/CD workflows
│   ├── dependabot.yml        # Dependency updates config
│   └── pull_request_template.md
├── public/                   # Static assets including resume.pdf
└── tailwind.config.js        # Tailwind configuration
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation

```bash
git clone <repository-url>
cd sarahcancode
pnpm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
GITHUB_USERNAME=SarahWanjiru
GITHUB_TOKEN=your_github_token        # optional, increases rate limit to 5000/hr
REVALIDATE_SECRET=your_secret_string  # used to authenticate the webhook endpoint
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
pnpm build
pnpm start
```

## GitHub Projects Integration

Projects are fetched automatically from the GitHub API and categorized using repo **topics**:

| Topic | Category |
|-------|----------|
| `web` | Web Development |
| `mobile` | App Development |
| `cloud` | Cloud & DevOps |

To add a project to the portfolio, go to the repo on GitHub → Settings (gear icon next to About) → add the relevant topic. No code changes needed.

The cache revalidates every 5 minutes. For instant updates, set up the GitHub webhook (see [docs/github-integration.md](./docs/github-integration.md)).

## Medium Blog Integration

Blog posts are fetched from Medium via rss2json and revalidated every 5 minutes. Posts are automatically categorized by their Medium tags. No manual updates needed — publish on Medium and the blog updates automatically.

## Deployment (AWS Amplify)

The app is deployed on AWS Amplify with SSR support. The Amplify build spec (configured in the Amplify console) installs pnpm before building:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install -g pnpm
        - pnpm install
    build:
      commands:
        - pnpm run build
  artifacts:
    baseDirectory: .next
    files:
      - "**/*"
  cache:
    paths:
      - .next/cache/**/*
      - node_modules/**/*
```

Add all environment variables from `.env.local` in Amplify console → App settings → Environment variables.

## Design System

- **Colors**: Semantic color tokens (bg-primary, text-primary, accent, etc.)
- **Typography**: Geist Sans and Geist Mono fonts
- **Dark Mode**: Class-based dark mode with ThemeContext and localStorage persistence
- **Icons**: Lucide React for consistent iconography

## Documentation

- **[GitHub Integration](./docs/github-integration.md)** - GitHub API setup, topics, and webhook configuration
- **[Contact Section](./docs/contact-section-complete.md)** - Contact form implementation and features
- **[Email Integration](./docs/email-integration.md)** - Setting up Resend
- **[Spam Protection](./docs/spam-protection.md)** - Spam prevention strategies
- **[Learning Roadmap](./docs/learning-roadmap.md)** - 35-day learning path

## License

This project is private and proprietary.

---

Built with ❤️ by Sarah - Engineering reliable systems from interface to infrastructure.
