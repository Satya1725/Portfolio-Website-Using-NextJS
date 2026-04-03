# Portfolio Website — Deployment & Post-Development Guide

Your portfolio site is fully built and verified! Here's everything you need to deploy it, generate a QR code, and integrate it into your resume.

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended — Easiest)

Vercel is the company behind Next.js and offers zero-config deployment.

**Using Git Integration (recommended):**
1. Push your project to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com), sign in, and click **"Add New → Project"**
3. Import your repo — Vercel auto-detects Next.js settings
4. Click **Deploy** — your site will be live at `yourname.vercel.app`
5. Optional: Add a custom domain under **Settings → Domains**

**Using the Vercel CLI:**
```bash
npm i -g vercel
vercel          # follow the prompts
vercel --prod   # deploy to production
```

> [!TIP]
> Every `git push` to `main` triggers an automatic re-deploy on Vercel.

---

### Option 2: GitHub Pages (Free, Custom Domain Support)

Since your site uses `output: 'export'` in `next.config.ts`, it generates a fully static `out/` folder.

**Step 1: Update `next.config.ts` if using a subpath**

If your GitHub Pages URL will be `https://username.github.io/portfolio/`, update:
```ts
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",
  images: { unoptimized: true },
};
```

> [!NOTE]
> If hosting at the root (`https://username.github.io`), skip the `basePath`.

**Step 2: Create GitHub Actions workflow**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
      - uses: actions/deploy-pages@v4
```

**Step 3: Enable GitHub Pages**
1. Go to your repo → **Settings → Pages**
2. Set Source to **GitHub Actions**
3. Push to `main` — the action will build and deploy automatically

---

### Option 3: Netlify

1. Run `npm run build` locally
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag & drop the `out/` folder onto the deploy area
4. Your site is live instantly!

**Or via Git integration:**
1. Connect your GitHub repo on Netlify
2. Set **Build command**: `npm run build`
3. Set **Publish directory**: `out`
4. Deploy!

---

## 🔗 QR Code Generation

Once deployed, generate a QR code for your portfolio URL.

### Free Online Tools
- **[qrcode-monkey.com](https://www.qrcode-monkey.com)** — Customizable colors and logo embedding
- **[qr-code-generator.com](https://www.qr-code-generator.com)** — Simple and fast
- **[goqr.me](https://goqr.me)** — API available too

### Using Python (if you prefer command line)
```bash
pip install qrcode[pil]

python -c "
import qrcode
img = qrcode.make('https://your-portfolio-url.vercel.app')
img.save('portfolio-qr.png')
"
```

### Using Node.js
```bash
npx qrcode -o portfolio-qr.png "https://your-portfolio-url.vercel.app"
```

> [!TIP]
> Generate the QR code at **300+ DPI** for best print quality on a resume. Most online tools allow you to set the download resolution.

---

## 📄 Resume Integration

### Adding the QR Code to Your Resume

1. **Position**: Place the QR code in the **header** (next to your name/contact info) or in a **sidebar**
2. **Size**: Keep it between **1.5 cm × 1.5 cm** and **2.5 cm × 2.5 cm** — large enough to scan but not overwhelming
3. **Label**: Add a small caption like "Scan for Portfolio" or "View My Work"
4. **Test**: Print a test page and try scanning with your phone camera

### Best Practices
- Use a **high-contrast** QR code (dark on light background)
- Ensure there's **quiet zone** (white space) around the QR code
- Link to your **custom domain** if possible (looks more professional than `*.vercel.app`)
- Don't add too much visual customization to the QR code — it can hurt scannability

---

## 📝 Customizing Your Content

All content is config-driven! Edit these JSON files to update your portfolio:

| What to Change | File |
|---|---|
| Name, bio, contact info, socials | `src/config/personal.json` |
| Projects | `src/config/projects.json` |
| Work experience | `src/config/experience.json` |
| Skills | `src/config/skills.json` |
| Nav links | `src/config/navigation.json` |

### Replacing the Profile Photo
Replace `public/images/hero-photo.png` with your own photo (keep the same filename, or update it in the `Hero.tsx` component).

### Replacing the Resume PDF
Replace `public/resume.pdf` with your real resume.

### Replacing Project Images
Replace `public/images/project-1.png` through `project-4.png` with actual screenshots of your projects.

---

## 🏗️ Build Commands Reference

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build static export to `out/` directory |
| `npm run lint` | Run ESLint checks |

> [!IMPORTANT]
> Always test with `npm run build` before deploying to catch any issues early.
