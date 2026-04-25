# 🚀 Deploy to Vercel (Free)

## Step 1 — Push to GitHub

1. Go to https://github.com/new and create a new repository called `puneeth-portfolio`
2. In your project folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/puneeth-portfolio.git
git push -u origin main
```

## Step 2 — Deploy on Vercel

### Option A — CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Your site will be live at `puneeth-portfolio.vercel.app`

### Option B — Website
1. Go to https://vercel.com and sign up with GitHub
2. Click **"Add New Project"**
3. Import your `puneeth-portfolio` repo
4. Click **Deploy** — done!

## Step 3 — Add Resume PDF

Place your resume PDF in the `public/` folder as:
```
public/Puneeth_BA_Resume.pdf
```
The "↓ Resume" button in the hero will automatically link to it.

## Step 4 — Update project GitHub links

In `src/components/Projects.jsx`, update the `github` fields with your actual repo URLs:
```js
github: 'https://github.com/YOUR_USERNAME/your-repo-name',
demo: 'https://your-live-demo.vercel.app',  // if deployed
```

## Custom Domain (Optional)

In Vercel dashboard → Project → Settings → Domains → Add `puneethba.dev` or any domain you own.

---

Every time you `git push`, Vercel automatically redeploys. ✨
