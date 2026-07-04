# DevOps-Static-WebApp

This repository contains a simple static website and a GitHub Actions workflow for automatic deployment to GitHub Pages.

## What this project does
- Serves a basic HTML, CSS, and JavaScript website
- Uses GitHub Actions to build and deploy the site automatically
- Triggers deployment when code is pushed to the main branch

## Deployment flow
1. Push your changes to GitHub.
2. GitHub detects the push event.
3. The workflow in .github/workflows/deploy.yml starts.
4. The site is uploaded as a Pages artifact.
5. GitHub Pages publishes the updated site.

## Free deployment option used here
- GitHub Pages for hosting
- GitHub Actions for CI/CD
- No paid service is required

## Next steps
1. Create a GitHub repository and push this project to it.
2. Enable GitHub Pages in the repository settings.
3. Choose the GitHub Actions deployment source.
4. Push to main and watch the workflow run.
