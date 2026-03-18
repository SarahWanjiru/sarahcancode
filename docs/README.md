# Documentation

This directory contains all project documentation for the Sarah Can Code portfolio website.

## Available Documentation

### Integrations

- **[github-integration.md](./github-integration.md)** - GitHub API setup, repo topics for categorization, webhook for instant cache revalidation
- **[email-integration.md](./email-integration.md)** - Setting up Resend for the contact form
- **[spam-protection.md](./spam-protection.md)** - Spam prevention strategies and implementation

### Contact Form

- **[contact-section-complete.md](./contact-section-complete.md)** - Complete overview of the contact section implementation, features, and testing checklist

### Learning Resources

- **[learning-roadmap.md](./learning-roadmap.md)** - 35-day learning roadmap for mastering Next.js, React, TypeScript, and Tailwind CSS

## Project Structure Reference

```
sarahcancode/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts          # Contact form API with rate limiting
│   │   └── revalidate/
│   │       └── route.ts          # Webhook cache revalidation endpoint
│   ├── components/
│   │   ├── ContactSection.tsx    # Contact form component
│   │   ├── Footer.tsx            # Site footer with social links
│   │   ├── Navigation.tsx        # Fixed nav with resume download
│   │   ├── PostsGrid.tsx         # Medium blog posts grid
│   │   ├── ProjectsGrid.tsx      # GitHub projects grid with tabs
│   │   └── ThemeToggle.tsx       # Dark/light mode toggle
│   ├── context/
│   │   └── ThemeContext.tsx      # Theme provider
│   ├── lib/
│   │   ├── github.ts             # GitHub API fetching and categorization
│   │   └── medium.ts             # Medium RSS fetching
│   ├── blog/
│   │   └── page.tsx              # Blog listing page
│   └── page.tsx                  # Homepage
├── docs/                         # This directory
├── public/
│   └── resume.pdf                # Downloadable resume
└── README.md                     # Project README
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | Resend API key for contact form emails |
| `GITHUB_USERNAME` | Yes | GitHub username for projects API |
| `GITHUB_TOKEN` | No | GitHub personal access token (increases rate limit to 5000/hr) |
| `REVALIDATE_SECRET` | Yes | Secret token for the webhook revalidation endpoint |

## Last Updated

March 2026.
