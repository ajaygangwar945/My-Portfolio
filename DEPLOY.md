# 🚀 Deployment Guide (Netlify)

This guide will help you deploy your portfolio to **Netlify**, which is free and supports the contact form out of the box.

## Prerequisites
- A [GitHub](https://github.com/) account.
- A [Netlify](https://www.netlify.com/) account (you can sign up with GitHub).
- Your project pushed to a GitHub repository.

## Step 1: Push to GitHub
If you haven't pushed your code yet:
1.  Initialize Git: `git init`
2.  Add files: `git add .`
3.  Commit: `git commit -m "Initial commit"`
4.  Create a new repo on GitHub.
5.  Link and push:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git branch -M main
    git push -u origin main
    ```

## Step 2: Deploy on Netlify
1.  Log in to your **Netlify Dashboard**.
2.  Click **"Add new site"** -> **"Import from an existing project"**.
3.  Select **GitHub**.
4.  Authorize Netlify and choose your portfolio repository.
5.  **Configure Build Settings**:
    - **Build Command**: `npm run build`
    - **Publish Directory**: `dist`
    - (Netlify usually detects these automatically).

## Step 3: Add Environment Variables (CRITICAL)
Before clicking "Deploy":
1.  Click **"Show advanced"** (or go to **Site Settings > Environment variables** later).
2.  Click **"New variable"**.
3.  Key: `VITE_GEMINI_API_KEY`
4.  Value: Paste your actual API Key (from Google AI Studio).
5.  Click **"Deploy site"**.

## Step 4: Verify Contact Form
1.  Once deployed, visit your live site URL.
2.  Scroll to the "Get In Touch" section.
3.  Send a test message.
4.  Go to your **Netlify Dashboard > Site Overview > Forms**.
5.  You should see your test message there!

## Troubleshooting
- **AI not working?** Check if you added the `VITE_GEMINI_API_KEY` correctly in Netlify settings. You might need to trigger a redeploy (Site Deploys > Trigger deploy) after adding it.
- **Form not working?** Ensure you didn't remove the `name="contact"` or `data-netlify="true"` attributes in `App.jsx`.
