# PORTFOLIO

## Deployment Instructions

This portfolio project is set up to be deployed on GitHub Pages using GitHub Actions.

### Steps to Deploy

1. **Update the homepage URL in `react-portfolio/package.json`**
   - Replace `WARRAICH-11` with your actual GitHub username
   - Example: `"homepage": "https://johndoe.github.io/PORTFOLIO"`

2. **Push your code to GitHub**
   - Make sure your repository name is "PORTFOLIO"
   - If your repository has a different name, update the homepage URL accordingly

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Go to Settings > Pages
   - Select the branch "gh-pages" as the source
   - Save the settings

4. **Wait for the GitHub Actions workflow to complete**
   - The workflow will automatically build and deploy your site
   - You can check the progress in the "Actions" tab of your repository

5. **Visit your deployed website**
   - Your site will be available at: https://YOUR_GITHUB_USERNAME.github.io/PORTFOLIO

### Manual Deployment

You can also deploy manually using the following commands:

```bash
cd react-portfolio
npm run deploy
```

This will build your project and push it to the gh-pages branch of your repository.
