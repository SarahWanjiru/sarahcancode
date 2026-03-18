# GitHub Integration

The portfolio automatically fetches and displays projects from GitHub using the GitHub REST API. No manual updates to the codebase are needed — manage everything from GitHub.

## How It Works

1. `app/lib/github.ts` fetches all public repos from the GitHub API on page load
2. Repos are filtered by topic — only repos with `web`, `mobile`, or `cloud` topics appear
3. The category is derived from the topic, tags are extracted from the remaining topic parts
4. Results are cached by Next.js and revalidated every 5 minutes, or instantly via webhook

## Categorizing Projects with Topics

GitHub topics are used as the categorization system. Go to any repo on GitHub → click the gear icon next to "About" → add topics.

| Topic (or topic containing) | Portfolio Category |
|-----------------------------|--------------------|
| `web` | Web Development |
| `mobile` | App Development |
| `cloud` | Cloud & DevOps |

Topics can be combined with other keywords using hyphens and they still work:

- `web` → Web Development
- `web-nextjs-typescript` → Web Development, tags: Nextjs, Typescript
- `cloud-aws` → Cloud & DevOps, tags: Aws
- `mobile` → App Development

Repos without a matching topic or without a description are excluded from the portfolio.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `GITHUB_USERNAME` | Your GitHub username — used to build the API URL |
| `GITHUB_TOKEN` | Optional personal access token. Without it, GitHub allows 60 requests/hr. With it, 5000/hr. |

To generate a token: GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens → New token. Grant read-only access to public repositories.

## Cache Revalidation

By default the GitHub data revalidates every 5 minutes (`revalidate: 300` in `github.ts`).

For instant updates whenever you push to GitHub, set up a webhook:

### Webhook Setup

1. Go to any GitHub repo → Settings → Webhooks → Add webhook
2. Set **Payload URL** to:
   ```
   https://your-amplify-domain.com/api/revalidate?secret=your_secret
   ```
3. Set **Content type** to `application/json`
4. Select **Just the push event**
5. Click Add webhook

The `REVALIDATE_SECRET` env var must match the `secret` query param in the webhook URL.

### Revalidation Endpoint

`app/api/revalidate/route.ts` handles the webhook POST request, validates the secret, and calls `revalidatePath("/")` to bust the Next.js cache for the homepage immediately.

## Adding a New Project

1. Create or update the repo on GitHub
2. Add a clear description to the repo (shown as the card description)
3. Add the relevant topic (`web`, `mobile`, or `cloud`) plus any tech tags
4. The project appears on the portfolio within 5 minutes, or instantly if the webhook is configured
